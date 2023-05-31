import axios, { isAxiosError } from "axios";
import axiosInstance from "../../services/axios";
import { Card, FullProfile, UpdateProfile } from "./types";

enum ProfileRoutes {
  PROFILE_INFO = "/user/profile",
  PROFILE_SUBSCRIPTION = "/user/subscription",
}

export default class Profile {
  static async getData() {
    const res = await axiosInstance.get<FullProfile>(
      ProfileRoutes.PROFILE_INFO
    );
    return res.data;
  }

  static async updateData(name?: string, phone?: string) {
    try {
      const payload = {
        name: name ? name : undefined,
        phone: phone ? phone : undefined,
      };
      const res = await axiosInstance.patch<UpdateProfile>(
        ProfileRoutes.PROFILE_INFO,
        payload
      );
      return true;
    } catch (e) {
      if (isAxiosError<{ message: string }>(e)) {
        console.log(e.response!.data.message);
        return e.response!.data.message;
      }
      return false;
    }
  }

  static async createSubscription() {
    try {
      await axiosInstance.post(ProfileRoutes.PROFILE_SUBSCRIPTION);
    } catch (e) {
      if (isAxiosError<{ message: string }>(e)) {
        console.log(e.response!.data.message);
        return e.response!.data.message;
      }
      return false;
    }
  }

  static async updateCardInfo(card: Card) {
    try {
      await axiosInstance.patch(ProfileRoutes.PROFILE_SUBSCRIPTION, card);
      return true;
    } catch (e) {
      if (isAxiosError<{ message: string }>(e)) {
        console.log(e.response!.data.message);
        return e.response!.data.message;
      }
      return false;
    }
  }

  static async deleteSubscription() {
    try {
      await axiosInstance.delete(ProfileRoutes.PROFILE_SUBSCRIPTION);
      return true;
    } catch (e) {
      if (isAxiosError<{ message: string }>(e)) {
        console.log(e.response!.data.message);
        return e.response!.data.message;
      }
      return false;
    }
  }
}
