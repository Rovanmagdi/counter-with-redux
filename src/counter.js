
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "./storeToolkit";
function Counter() {

    const globalState = useSelector((state) => state);
    const disptach = useDispatch();
    const { increase, decrease } = counterAction;

    const toggle = () => {
        const action = { type: "toggle" };
        disptach(action);

    };
    useEffect(() => { disptach({ type: "increase", payload: 1 }) }, [disptach])
    return (
        <div>
            {!globalState.toggle ? (
                <div className="App">
                    <h1>ToolKit</h1>
                    <div className="counter">counter :{globalState.value}</div>
                    <button className="btn" onClick={() => disptach(increase(5))}>
                        increase +
                    </button>
                    <button className="btn" onClick={() => disptach(decrease(1))}>
                        decrease -
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

export default Counter;
