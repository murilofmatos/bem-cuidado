import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      user: {
        id: null,
        nome: "",
        email: "",
        authenticated: false,
      },
      setUser: (userData) =>
        set({ user: { ...userData, authenticated: true } }),
      clearUser: () =>
        set({
          user: {
            id: null,
            nome: "",
            email: "",
            authenticated: false,
          },
        }),
    }),
    {
      name: "user-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useUserStore;
