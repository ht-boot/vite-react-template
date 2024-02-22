import "./App.less";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "@/store/storeSlice/counterSlice";
import { RootState } from "@/store";

const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Home />
    </>
  );
}

export default App;
