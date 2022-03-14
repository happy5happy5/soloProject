import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { io } from "socket.io-client";
import chatStore from "../store/Chat-zustand";

let socket;
const Chat = () => {
  const [name, setName] = useState("");
  const { chatId, chatMsgList, addMsg, addId, removeId } = chatStore();

  useEffect(() => {
    socket = io("http://localhost:4000", {
      reconnectionDelayMax: 10000,
    });
    socket.on("connect", () => {
      console.log(socket.id);
    });
    socket.on("message", (x) => {
      addMsg(x.name, x.msg);
    });
    socket.on("enter", (x) => {
      addMsg("admin", x);
    });
    socket.on("out", (x) => {
      addMsg("admin", x);
    });
  }, []);
  // useEffect(() => {
  //   socket.emit("disconnect", () => {});
  // }, [window.location.pathname]);

  const handleMsgInput = useCallback((e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      if (name === "") return alert("이름 넣어라 오류난다");
      addMsg(name, e.target.value);
      if (socket) {
        socket.emit("message", { name: name, msg: e.target.value });
      }
      e.target.value = "";
    }
  });

  return (
    <div>
      <div>
        Chat
        <button
          type="button"
          onClick={() => window.sessionStorage.removeItem("chatMsgList")}
        >
          리셋 메세지 리스트
        </button>
      </div>
      <SetName
        placeholder="닉네임"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <SendMsg placeholder="메세지" onKeyUp={handleMsgInput} />
      <ListMsg>
        {chatMsgList.map((x, i) => (
          <Message name={x.name === name ? "me" : "U"} key={x.name + i}>
            {x.name}:{x.msg}
          </Message>
        ))}
      </ListMsg>
    </div>
  );
};
const Message = styled.div`
  text-align: ${(x) => (x.name === "me" ? "right" : "left")};
`;
const ListMsg = styled.div``;
const SetName = styled.input``;
const SendMsg = styled.input``;

export { Chat };
