import { create } from "zustand";

const useGlobalStore = create((set) => ({
  user: null,
  loading: false,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
}));

export default useGlobalStore;
