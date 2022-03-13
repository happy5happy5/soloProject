import React from "react";
import useStore from "../store/Count-zustand";
export function Zustand() {
  const { count, 증가, 감소, 곱하기2, 나누기2, 리셋 } = useStore();
  return (
    <div>
      성경갓 Zustand
      <div>
        <button onClick={() => 증가()}>증가</button>
        <button onClick={() => 감소()}>감소</button>
        <button onClick={() => 곱하기2()}>곱하기2</button>
        <button onClick={() => 나누기2()}>나누기2</button>
        <button onClick={() => 리셋()}>리셋</button>
        <div>현재 숫자={count}</div>
      </div>
    </div>
  );
}
