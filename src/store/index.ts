import { configureStore } from "@reduxjs/toolkit";
// 仓库碎片（模块）
import counterReducer from "./storeSlice/counterSlice";

// 合并组合碎片（模块）
import { combineReducers } from "redux";

// 数据持久化
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";

/**
 * @description 缓存数据配置
 * @param key  标识存储在本地存储中的数据
 * @param storage 持久化存储引擎，默认是localStorage
 * @param blacklist  黑名单，不持久化指定reducer的状态
 * @param whitelist // 白名单，只持久化指定reducer的状态
 * @param transforms: [myTransform], // 转换器，可以自定义转换函数来改变持久化存储的数据格式
 */
const persistConfig = {
  key: "root",
  storage,
  blacklist: [], // 写在这块的数据不会存在storage
  //   whitelist: ["counterReducer"],
  // transforms: [],
};

// 仓库碎片合并
const reducers = combineReducers({
  counterReducer,
});

// 用于将一个或多个 Redux 状态机 reducer 持久化。
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      //关闭序列化状态检测中间件
      serializableCheck: false,
    }),
});

// 数据持久化存储
export const persist = persistStore(store);

// 从 store 本身推断出 `RootState` 类型
export type RootState = ReturnType<typeof store.getState>;

export default store;
