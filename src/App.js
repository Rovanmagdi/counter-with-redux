import "./App.css";
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
function App() {
  // const store = useSelector((state) => {
  //   if (state.value < 1) {
  //     return 0;
  //   } else {
  //     return state.value;
  //   }
  // });
  const globalState = useSelector((state) => state);
  const disptach = useDispatch();

  const handlecounter = (state) => {
    // (state>0)?(0):(state);
    if (state < 1) {
      return 0;
    } else {
      return state;
    }
  }
  // const increase = () => {
  //   const action = { type: "increase", payload: 4 };
  //   disptach(action);
  // };
  // const decrease = () => {
  //   const action = { type: "decrease", payload: 4 };
  //   disptach(action);
  // };
  const operater = useCallback( (type, payload) =>
  {
  disptach({type, payload});

  })
  const toggle = () => {
    const action = { type: "toggle" };
    disptach(action);

  };
  useEffect(() => {disptach({type: "increase",payload:  1} )}, [disptach])
  return (
    <div>
      {!globalState.toggle ? (
        <div className="App">
          <div className="counter">counter :{handlecounter(globalState.value)}</div>
          <button className="btn" onClick={() => operater('decrease', 4)}>
            decrease -
          </button>
          <button className="btn" onClick={() => operater("increase", 1)}>
            increase +
          </button>
          <br />
          <button onClick={toggle}>hide</button>
        </div>
      ) : (
        <div className="App">
          <button onClick={toggle}>show</button>
        </div>
      )}
    </div>
  );
}

export default App;
