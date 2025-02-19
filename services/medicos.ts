import { api } from "./instance";
import { Errors } from "@/utils/errors";

export const medicoService = {
  medicos: async (data: {
    nome: string,
    especialidade?: string
  }) => {
    try {
      const response = await api.get("/medico", {
        params: data
      });
      return response.data;
    } catch (error) {
      Errors(error)
    }
  },
};


