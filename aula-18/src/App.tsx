import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "./redux/store";
import { Action } from "./redux/reducers/types";

function App() {
  const dispatch: Dispatch<Action> = useDispatch();
  const { numero } = useSelector((state: RootState) => state.counter);

  return (
    <>
      <h1>Hello World - {numero}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        INCREMENTAR
      </button>
    </>
  );
}

export default App;
