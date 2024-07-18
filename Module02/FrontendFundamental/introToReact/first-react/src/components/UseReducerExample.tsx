import { useReducer } from "react";

interface State {
  count: number;
}

type Action = { type: "increment" } | { type: "decrement" };

const initialState: State = { count: 0 };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error("Unhandled action type");
  }
};

const UseReducerExample: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="p-4">
      <p>Count: {state.count}</p>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="bg-green-500 text-white p-2 mt-2"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="bg-red-500 text-white p-2 mt-2"
      >
        Decrement
      </button>
    </div>
  );
};

export default UseReducerExample;
