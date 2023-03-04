import { makeObservable, observable } from "mobx";

export class Store {
  list = [];
  constructor() {
    makeObservable(this, {
      list: observable,
    });
  }
}

export default new Store();
