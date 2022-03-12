import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// import storageLocal from "redux-persist/lib/storage"; //로컬에 저장
import storageSession from "redux-persist/lib/storage/session"; //세션에 저장
import count from "./Count";

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["count"],
  // blacklist -> 그것만 제외합니다
};

export const rootReducer = combineReducers({
  count,
});

export default persistReducer(persistConfig, rootReducer);
