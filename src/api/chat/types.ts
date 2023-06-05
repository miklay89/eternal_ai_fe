export type ChatInfo = {
  chat: {
    userId: string;
    currentSoulId: string | null;
  } | null;
};

export type ChatHistory = {
  messages: {
    id: string;
    soulId: string;
    content: string;
    userId: string;
    role: "user" | "assistant";
    timestamp: string;
  }[];
};
