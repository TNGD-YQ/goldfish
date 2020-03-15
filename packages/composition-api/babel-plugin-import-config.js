const libraryName = require('./package.json').name;
const codeDir = `${libraryName}/lib`;

module.exports = {
  libraryName,
  camel2DashComponentName: false,
  customName(name) {
    return {
      useComponentLifeCycle: `${codeDir}/useComponentLifeCycle`,
      useComputed: `${codeDir}/useComputed`,
      usePageLifeCycle: `${codeDir}/usePageLifeCycle`,
      useAppLifeCycle: `${codeDir}/useAppLifeCycle`,
      setupComponent: `${codeDir}/setupComponent`,
      setupPage: `${codeDir}/setupPage`,
      setupApp: `${codeDir}/setupApp`,
      Setup: `${codeDir}/setup/Setup`,
      useState: `${codeDir}/useState`,
      useValue: `${codeDir}/useValue`,
      useFetchInitData: `${codeDir}/useFetchInitData`,
      useProps: `${codeDir}/useProps`,
      useContextType: `${codeDir}/useContextType`,
      usePlugin: `${codeDir}/usePlugin`,
      useReady: `${codeDir}/useReady`,
      useInitDataReady: `${codeDir}/useInitDataReady`,
      usePluginsReady: `${codeDir}/usePluginsReady`,
      useGlobalData: `${codeDir}/useGlobalData`,
      useWatch: `${codeDir}/useWatch`,
      useAutorun: `${codeDir}/useAutorun`,
      usePlugins: `${codeDir}/usePlugins`,
      reactive: `${codeDir}/reactive`,
      usePageEvents: `${codeDir}/usePageEvents`,
    }[name];
  },
};
