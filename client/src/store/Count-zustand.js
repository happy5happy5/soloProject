import create from "Zustand";
// import { persist } from "zustand/middleware"

const useStore = create((set) => ({
  count: 0,
  증가() {
    set((state) => ({ count: state.count + 1 }));
  },
  감소() {
    set((state) => ({ count: state.count - 1 }));
  },
  곱하기2() {
    set((state) => ({ count: state.count * 2 }));
  },
  나누기2() {
    set((state) => ({ count: state.count / 2 }));
  },
  리셋() {
    set((state) => ({ count: 0 }));
  },
}));

export default useStore;
