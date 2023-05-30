import { io } from "socket.io-client";
import { API_BASE_URL } from "./axios";
import LocalStorage from "./localStorage";

enum Chat {
  CHAT = "/chat/socket.io",
}

const options = {
  auth: {
    token: `${LocalStorage.getToken()}`,
  },
  autoConnect: false,
  path: Chat.CHAT,
};

const socket = io(API_BASE_URL, options);

export default socket;
