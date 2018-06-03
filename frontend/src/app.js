import { Store, connectTo } from 'aurelia-store';
import { inject } from 'aurelia-framework';

const setGreeting = (state, message) => {
  const newGreeting = { ...state, message };
  return newGreeting;
};

@inject(Store)
@connectTo()
export class App {
  state;

  constructor(store) {
    this.store = store;
    this.store.registerAction('greet', setGreeting);
  }

  doSomething() {
    this.store.dispatch('greet', 'Steve was here.');
  }
}
