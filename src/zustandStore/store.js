import { create } from "zustand";

const useMovieCardStore = create((set, get) => ({
  cards: {}, // Store cards by ID
  addCard: (id, initialData) =>
    set((state) => ({
      cards: { ...state.cards, [id]: initialData },
    })),
  updateCard: (id, updatedData) =>
    set((state) => ({
      cards: { ...state.cards, [id]: { ...state.cards[id], ...updatedData } },
    })),
}));

export default useMovieCardStore;
