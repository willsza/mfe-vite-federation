import { create } from "zustand";

interface Store {
  user: string;
  balance: number;
  setUser: (user: string) => void;
  addToBalance: (amount: number) => void;
}

export const useStore = create<Store>((set) => ({
  user: "John",
  balance: 0,
  setUser: (user) => {
    set(() => ({ user }));
  },
  addToBalance: (amount) => {
    set((state) => ({ balance: state.balance + amount }));
  },
}));
