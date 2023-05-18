import axiosInstance from "../../services/axios";
import { Card } from "./types";

enum ProfileRoutes {
  PROFILE_INFO = "/user/profile",
  PROFILE_SUBSCRIPTION = "/user/subscription",
}

export default class Profile {
  static async getData() {
    try {
      await axiosInstance.get(ProfileRoutes.PROFILE_INFO, {
        headers: {
          Authorization: "token",
        },
      });
      // TODO fill profile
      return true;
    } catch {
      // TODO show message - error
    }
  }

  static async updateData() {
    try {
      await axiosInstance.patch(ProfileRoutes.PROFILE_INFO, {
        headers: {
          Authorization: "token",
        },
      });
      // TODO show message - ok
      return true;
    } catch {
      // TODO show message - error
      return false;
    }
  }

  static async createSubscription(card: Card) {
    try {
      await axiosInstance.post(ProfileRoutes.PROFILE_SUBSCRIPTION, {
        headers: {
          Authorization: "token",
        },
      });
      // TODO show message - ok
      return true;
    } catch {
      // TODO show message - error
      return false;
    }
  }

  static async updateSubscription(card: Card) {
    try {
      await axiosInstance.patch(ProfileRoutes.PROFILE_SUBSCRIPTION, {
        headers: {
          Authorization: "token",
        },
      });
      // TODO show message - ok
      return true;
    } catch {
      // TODO show message - error
      return false;
    }
  }

  static async deleteSubscription(card: Card) {
    try {
      await axiosInstance.delete(ProfileRoutes.PROFILE_SUBSCRIPTION, {
        headers: {
          Authorization: "token",
        },
      });
      // TODO show message - ok
      return true;
    } catch {
      // TODO show message - error
      return false;
    }
  }
}
