import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store/CounterSlice";
import { toggleAction } from "../store/ToggleSlice";
function Counter() {
  const globalState = useSelector((state) => state);
  const disptach = useDispatch();
  const { increase, decrease } = counterAction;
  const { toggleSwitchOn, toggleSwitchOff } = toggleAction;

  useEffect(() => {
    disptach({ type: "increase", payload: 1 });
    console.log(globalState);
  }, [disptach]);

  const handlerEvent = (type, payload) => {
    if (type === "increase") {
      disptach(increase(payload));
    } else {
      if (globalState.counter.value > 0) {
        disptach(decrease(payload));
      } else {
        return 0;
      }
    }
  };
  return (
    <div>
      {globalState.toggle.value ? (
        <div className="App">
          <h1>ToolKit</h1>
          <div className="counter">counter :{globalState.counter.value}</div>
          <button className="btn" onClick={() => handlerEvent("increase", 2)}>
            increase +
          </button>
          <button className="btn" onClick={() => handlerEvent("decrease", 2)}>
            decrease -
          </button>
          <br />
          <button onClick={() => disptach(toggleSwitchOff())}>hide</button>
        </div>
      ) : (
        <div className="App">
          <h1>ToolKit</h1>
          <button onClick={() => disptach(toggleSwitchOn())}>show</button>
        </div>
      )}
    </div>
  );
}

export default Counter;
