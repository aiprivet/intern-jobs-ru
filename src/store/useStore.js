import { create } from "zustand";

export const useSpeicalityStore = create((set) => ({
  speciality: null,
  updateSpeciality: (newSpeciality) => set({ speciality: newSpeciality }),
}));
