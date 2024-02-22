import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./storeSlice/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// 从 store 本身推断出 `RootState` 类型
export type RootState = ReturnType<typeof store.getState>;

export default store;
