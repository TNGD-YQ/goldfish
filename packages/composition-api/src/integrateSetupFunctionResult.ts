import CommonSetup from './setup/CommonSetup';
import { computed } from '@alipay/goldfish-reactive-connect';

type Kind = 'page' | 'component' | 'app';

type ViewType<P, D> = {
  page: tinyapp.IPageInstance<D>;
  component: tinyapp.IComponentInstance<P, D>;
  app: tinyapp.IAppInstance<any>;
};

export interface ISetupFunction {
  (): Record<string, any>;
}

function connectData(
  viewInstance: object,
  store: object,
  config: Record<string, any>,
  k: string,
) {
  const value = config[k];
  if (typeof value === 'function') {
    Object.defineProperty(viewInstance, k, {
      value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    Object.defineProperty(store, k, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: computed(config[k]),
    });
  }
}

/**
 * 1. Execute the setup function.
 * 2. Convert the result of setup function to the observable data on the store.
 *
 * @param fn
 * @param setup
 * @param viewInstance
 * @param store
 */
export default function integrateSetupFunctionResult<K extends Kind, D = any, P = any>(
  fn: ISetupFunction,
  setup: CommonSetup<any>,
  viewInstance: ViewType<P, D>[K],
  store: Object,
) {
  setup.setStoreInstance(store);
  setup.setViewInstance(viewInstance);

  let config: Record<string, any> = {};
  config = fn();

  for (const k in config) {
    connectData(viewInstance, store, config, k);
  }
}