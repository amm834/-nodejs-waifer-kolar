export class Storage {

  static set token(data: any) {
    localStorage.setItem('token', data)
  }

  static get token() {
    return localStorage.getItem('token')
  }

  static removeToken(key: string) {
    localStorage.removeItem(key)
  }
}
