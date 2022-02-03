import {Storage} from "./Storage";

export class Auth {

  static check(): boolean {
    if (Storage.token != undefined) {
      return true;
    }
    return false;
  }

}
