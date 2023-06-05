import axiosInstance from "../../services/axios";
import { ChatHistory, ChatInfo } from "./types";

enum ChatRoutes {
  GET_CHAT_INFO = "/chat",
  GET_CHAT_MESSAGES = "/chat",
}

export default class ChatInstance {
  static async getChatInfo() {
    const res = await axiosInstance.get<ChatInfo>(ChatRoutes.GET_CHAT_INFO);
    return res.data.chat;
  }

  static async getInitHistory(soulId: string) {
    const limit = 10;
    const res = await axiosInstance.get<ChatHistory>(
      `${ChatRoutes.GET_CHAT_MESSAGES}/${soulId}`,
      {
        params: { limit: limit },
      }
    );
    return res.data.messages;
  }

  static async getMessages(soulId: string, lastMessageId: string) {
    const limit = 10;
    const res = await axiosInstance.get<ChatHistory>(
      `${ChatRoutes.GET_CHAT_MESSAGES}/${soulId}`,
      {
        params: { limit, lastMessageId },
      }
    );
    return res.data.messages;
  }
}
