import create from "Zustand";
import { persist } from "zustand/middleware";

//useStore이름 마음대로입니다. 원하는걸로 바꾸고 여러개 만드셔도됩니다.
const chatStore = create(
  persist(
    (set) => ({
      chatMsgList: [],
      addMsg(name, msg) {
        set((state) => ({
          chatMsgList: [...state.chatMsgList, { name, msg }],
        }));
      },
    }),
    {
      name: "chatMsgList",
      getStorage: () => sessionStorage, //세션에 저장
      //   getStorage: () => localStorage, //로컬에 저장
    }
  )
);

export default chatStore;
