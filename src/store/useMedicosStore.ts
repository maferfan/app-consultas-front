import { create } from "zustand";
import { medicoService } from "@/src/services/medicos";
import { Especialidade, Medico } from "@/src/types/medicos.types";

type MedicosStore = {
  medicos: Medico[];
  filtroActive: boolean;
  especialidade: Especialidade;
  name: string;
  setFiltroActive: (active: boolean) => void;
  setEspecialidade: (especialidade: Especialidade) => void;
  setName: (name: string) => void;
  fetchMedicos: () => Promise<void>;
};

export const useMedicosStore = create<MedicosStore>((set, get) => ({
  medicos: [],
  filtroActive: false,
  especialidade: {} as Especialidade,
  name: "",
  setFiltroActive: (active) => set({ filtroActive: active }),
  setEspecialidade: (especialidade) => set({ especialidade }),
  setName: (name) => set({ name }),
  fetchMedicos: async () => {
    const { name, filtroActive, especialidade } = get();
    if (especialidade.nome || name !== "") {
      const data = await medicoService.medicos({
        nome: name,
        especialidade: filtroActive ? especialidade.nome : "",
      });
      set({ medicos: data });
    }
  },
}));
