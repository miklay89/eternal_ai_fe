export type Profile = {
  user: {
    email: string;
    name: string | null;
    phone: string | null;
    subscriptionDue: string | null;
    freeQuestionsLeft: number;
    isSubscribed: boolean;
  };
};

export type UpdateProfile = {
  user: {
    name: string | null;
    phone: string | null;
  };
};

export type Card = {
  card: {
    number: string; // 16 numbers, no separators
    expYear: number; // full year of expiration
    expMonth: number; // 1-12, month of expiration
    cvc: string; // 3 symbols
  };
};
