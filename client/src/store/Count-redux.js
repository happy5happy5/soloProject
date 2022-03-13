function count(state = 0, action) {
  //action 이라는곳에 state가 변화하는 모든 경우를 정의해둔다.
  if (action.type === "증가") {
    state++;
    return state;
  } else if (action.type === "감소") {
    state--;
    return state;
  } else if (action.type === "곱하기2") {
    state *= 2;
    return state;
  } else if (action.type === "나누기2") {
    state /= 2;
    return state;
  } else if (action.type === "리셋") {
    state = 0;
    return state;
  } else return state;
}
export default count;
