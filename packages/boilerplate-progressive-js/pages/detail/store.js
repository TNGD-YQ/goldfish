import { observable, computed } from '@goldfishjs/reactive-connect';
import { PageStore } from '@goldfishjs/core';

class MyPageStore extends PageStore {
  // Get currentUser from AppStore.
  // AppStore can not be used by PageView directly.
  currentUser = computed({
    get: () => {
      return this.appStore.currentUser;
    }
  });
}

export default observable(MyPageStore);