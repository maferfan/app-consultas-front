import { api } from "./instance";

export const authService = {
  authUser: async (login: { email: string; senha: string }) => {
    try {
      const response = await api.post("/login", login);
      return response.data;
    } catch (error) {
        console.log(error)
        throw error
    }
  },
};
