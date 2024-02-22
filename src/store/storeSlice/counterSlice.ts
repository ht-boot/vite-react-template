import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface TCounterState {
  value: number;
  userList: any;
}

const initialState: TCounterState = {
  value: 10,
  userList: [],
};

// 模拟请求 拥有异步请求演示
const getUserList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          user_id: 1,
          name: "张三",
          age: 25,
          gender: "男",
          occupation: "学生",
          income: 5000,
        },
        {
          user_id: 2,
          name: "李四",
          age: 30,
          gender: "男",
          occupation: "工程师",
          income: 10000,
        },
      ]);
    }, 3000);
  });
};

// 异步执行
// thunk函数允许执行异步逻辑, 通常用于发出异步请求。
// createAsyncThunk 创建一个异步action，方法触发的时候会有三种状态：
// pending（进行中）、fulfilled（成功）、rejected（失败）
export const getUserListThunk = createAsyncThunk(
  "system/getUserList",
  async () => {
    const res = await getUserList();
    return res;
  }
);

export const counterSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    increment: (state, _action) => {
      // Redux Toolkit 允许我们在 reducers 写 "可变" 逻辑。它
      // 并不是真正的改变状态值，因为它使用了 Immer 库
      // 可以检测到“草稿状态“ 的变化并且基于这些变化生产全新的
      // 不可变的状态
      state.value += 1;

      console.log(_action); // redux 参数接收
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(getUserListThunk.fulfilled, (state, action) => {
        state.userList = action.payload;
      })
      .addCase(getUserListThunk.rejected, (_state, err) => {
        throw err;
      });
  },
});
// 每个 case reducer 函数会生成对应的 Action creators
export const { increment, decrement } = counterSlice.actions;

// 超出 reducer
export default counterSlice.reducer;
