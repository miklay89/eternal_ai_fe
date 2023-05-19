import { io } from "socket.io-client";
import { API_BASE_URL } from "./axios";
import LocalStorage from "./localStorage";
import Auth from "../api/auth/auth";

enum Chat {
  CHAT = "/chat/socket.io/",
}

const URL = "https://eternal-ai.onrender.com/chat/socket.io";
console.log(URL);
let token = LocalStorage.getToken();
console.log(token);

(async () => {
  if (!token) {
    await Auth.refresh();
    token = LocalStorage.getToken();
  }
})();

const options = {
  auth: {
    token: token || "",
  },
  // port: 10000,
  // secure: true,
  autoConnect: false,
};

export const socket = io(URL, options);
