import create from "Zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
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
        set((_) => ({ count: 0 }));
      },
    }),
    {
      name: "count in session u can ckeck via window.localStorage",
      getStorage: () => sessionStorage, //세션에 저장
      //   getStorage: () => localStorage, //로컬에 저장
    }
  )
);

export default useStore;
