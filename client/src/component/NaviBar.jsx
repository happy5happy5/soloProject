import React from "react";
import { useNavigate } from "react-router-dom";
export const NaviBar = () => {
  let navigate = useNavigate();
  return (
    <div>
      {menuNameList.map((ele, menuIdx) => (
        <button
          className={menuNameList[menuIdx]}
          key={menuNameList[menuIdx]}
          order={menuIdx}
          onClick={() => {
            if (menuIdx === 0) navigate("/");
            else if (menuIdx === 1) navigate("/chat");
            else if (menuIdx === 2) navigate("/login");
            else if (menuIdx === 3) navigate("/redux");
            else navigate("/");
          }}
        >
          {ele}
        </button>
      ))}
    </div>
  );
};
const menuNameList = ["Main", "Chat", "Login", "Redux"];
