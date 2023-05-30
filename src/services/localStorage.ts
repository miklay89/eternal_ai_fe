export default class LocalStorage {
  static setToken(token: string) {
    localStorage.setItem("token", token);
  }

  static getToken() {
    const token = localStorage.getItem("token");
    return token;
  }

  static deleteToken() {
    localStorage.removeItem("token");
  }
}
