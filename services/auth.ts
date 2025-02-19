import { api } from "./instance";
import { Errors } from "@/utils/errors";

export const authService = {
  authUser: async (login: { email: string; senha: string }) => {
    try {
      const response = await api.post("/login", login);
      return response.data;
    } catch (error) {
      Errors(error)
    }
  },
};
