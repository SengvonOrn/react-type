import { useReducer } from "react";
type CounterState = {
  count: number;
};
type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};
type ResetAction = {
  type: "reset";
};
type CounterAction = UpdateAction | ResetAction;

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

// Styles ---------------------------------------->
const buttonStyle = {
  backgroundColor: "blue",
  color: "white",
  padding: "5px 10px",
  fontSize: "18px",
  border: "none",
  borderRadius: "5px",
  margin: "5px",
  cursor: "pointer",
};

const containerStyle = {
  display: "flex",
  flexDirection: "column" as "column",
  justifyContent: "center",
  textAlign: "center" as "center",
  alignItems: "center" as "center",
  gap: "10px 0px",
};

// Counter Component ----------------------------->
export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={containerStyle}>
      <p>Count: {state.count}</p>
      <button
        style={buttonStyle}
        onClick={() => dispatch({ type: "increment", payload: 10 })}
      >
        Increment 10
      </button>
      <button
        style={buttonStyle}
        onClick={() => dispatch({ type: "decrement", payload: 10 })}
      >
        Decrement 10
      </button>
      <button style={buttonStyle} onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
};
