export type ResMessage = {
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

export type ErrorRes = {
  message: string;
  statusCode: number;
};
