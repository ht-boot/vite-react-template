import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "@/store/storeSlice/counterSlice";
import { getUserListThunk } from "@/store/storeSlice/counterSlice";
import { RootState } from "@/store";

const Home = () => {
  const count = useSelector((state: RootState) => state.counterReducer.value);

  // 获取异步请求的返回数据
  const userList = useSelector(
    (state: RootState) => state.counterReducer.userList
  );

  const dispatch = useDispatch();

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => dispatch(increment({ a: "li" }))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <button onClick={() => dispatch(getUserListThunk())}>获取用户列表</button>

      <p>userList: {JSON.stringify(userList)}</p>
    </div>
  );
};

export default Home;
