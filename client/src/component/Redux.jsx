import React from "react";
import { useSelector, useDispatch } from "react-redux";

export function Redux() {
  const 꺼내온거 = useSelector((state) => state);
  const dispatch = useDispatch(); //함수 변경할때 사용하는것
  console.log(꺼내온거);
  return (
    <div>
      Redux
      <div>
        <button onClick={() => dispatch({ type: "증가" })}>증가</button>
        <button onClick={() => dispatch({ type: "감소" })}>감소</button>
        <button onClick={() => dispatch({ type: "곱하기2" })}>곱하기2</button>
        <button onClick={() => dispatch({ type: "나누기2" })}>나누기2</button>
        <button onClick={() => dispatch({ type: "리셋" })}>리셋</button>
        <div>현재 숫자={꺼내온거.count}</div>
      </div>
    </div>
  );
}
