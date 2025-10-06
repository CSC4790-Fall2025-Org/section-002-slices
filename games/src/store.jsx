import { create } from "zustand"

export const useGameStore = create((set) => ({
  score: 0,
  addScore: (points) => set((s) => ({ score: s.score + points })),
}))
