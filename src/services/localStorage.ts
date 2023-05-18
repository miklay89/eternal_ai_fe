export default class LocalStorage {
  static setToken(token: string) {
    localStorage.setItem("token", token);
  }

  static getToken() {
    return localStorage.getItem("token");
  }

  static deleteToken() {
    localStorage.removeItem("token");
  }
}
