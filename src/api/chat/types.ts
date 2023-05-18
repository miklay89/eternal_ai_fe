export type ChatResponse = {
  chat: {
    userId: string;
    currentSoulId: string | null;
  };
  messages: {
    id: string;
    soulId: string;
    content: string;
    userId: string;
    role: "user" | "assistant";
    timestamp: Date;
  }[];
};
