import axiosInstance from "../../services/axios";
import LocalStorage from "../../services/localStorage";
import { PasswordUpdateData, Refresh, SignIn } from "./types";
import axios, { isAxiosError } from "axios";
import { API_BASE_URL } from "../../services/axios";

enum AuthRoutes {
  SIGN_UP = "/auth/register",
  SIGN_IN = "/auth/login",
  REFRESH = "/auth/login",
  ME = "/auth/status",
  RESET_PASSWORD = "/auth/resetpass",
}

export default class Auth {
  static async signUp(email: string, password: string): Promise<void | string> {
    try {
      await axios.post(API_BASE_URL + AuthRoutes.SIGN_UP, {
        email,
        password,
      });
    } catch (e) {
      if (isAxiosError<{ message: string }>(e)) {
        console.log(e.response?.data.message);
        return e.response?.data.message;
      }
      if (e instanceof Error) {
        console.log(e.message);
        return e.message;
      }
    }
  }

  static async signIn(email: string, password: string): Promise<void | string> {
    try {
      const res = await axios.post<SignIn>(API_BASE_URL + AuthRoutes.SIGN_IN, {
        email,
        password,
      });
      LocalStorage.setToken(`Bearer ${res.data.accessToken}`);
    } catch (e) {
      if (isAxiosError<{ message: string }>(e)) {
        console.log(e.response?.data.message);
        return e.response?.data.message;
      }
      if (e instanceof Error) {
        console.log(e.message);
        return e.message;
      }
    }
  }

  static async refresh() {
    try {
      const res = await axios.patch<Refresh>(
        API_BASE_URL + AuthRoutes.REFRESH,
        {
          withCredentials: true,
        }
      );
      LocalStorage.setToken(`Bearer ${res.data.accessToken}`);
      return res.data.accessToken;
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
      return false;
    }
  }

  static async checkAuthMe() {
    await axiosInstance.get(AuthRoutes.ME);
  }

  static async updatePassword(data: PasswordUpdateData) {
    try {
      await axios.post(API_BASE_URL + AuthRoutes.RESET_PASSWORD, data);
      return true;
    } catch (e) {
      if (isAxiosError<{ message: string }>(e)) {
        console.log(e.response!.data.message);
        return e.response!.data.message;
      }
    }
  }
}
