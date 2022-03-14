import create from "zustand";
import { persist } from "zustand/middleware";

//useStore이름 마음대로입니다. 원하는걸로 바꾸고 여러개 만드셔도됩니다.
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
