import axiosInstance from "../../services/axios";
import { ChatInfo } from "./types";

enum ChatRoutes {
  GET_CHAT_INFO = "/chat",
  GET_CHAT_MESSAGES = "/chat",
}

export default class Chat {
  static async getChatInfo() {
    const res = await axiosInstance.get<ChatInfo>(ChatRoutes.GET_CHAT_INFO);
    return res.data.chat;
  }

  static async getChatMessage(soulId: string, lastMessageId: string) {
    const limit = 10;
    const res = await axiosInstance.get(ChatRoutes.GET_CHAT_MESSAGES, {
      params: { soulId, limit, lastMessageId },
    });
    console.log("messages", res.data);
  }
}
