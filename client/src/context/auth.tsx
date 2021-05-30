import { createContext, useContext, useReducer } from "react";
import { User } from "../types";

interface State {
  authenticated: boolean;
  user: User | undefined;
}

interface Action {
  type: string;
  payload: any;
}

//used to give children access to the current state
const StateContext = createContext<State>({
  authenticated: false,
  user: null,
});

const DispatchContext = createContext(null); //used to give children access to the dispatch so they can update the state

const reducer = (state: State, { type, payload }: Action) => {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        authenticated: true,
        user: payload,
      };
    case "LOGOUT":
      return {
        ...state,
        authenticated: false,
        user: null,
      };
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    //dispatch is used by the components that will change the state
    user: null,
    authenticated: false,
  });
  //every context object created with createContext, has .Provider component
  //value is whatever gets passed down to the childen, intresting that we have
  // two contexts and one takes the dispatch and the other takes the state; seperates concerns and saves us from nested deconstructuring: const {state:{authenticated}} = useContext(dd)
  //good practice to split this up intead of value={dispatch, state}
  //in children that want to change state:
  //1. const context = useContext(whatever was returned from createContext)
  //2. context.dispatch("LOGIN")
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

// use useContext in the children that want access to the value= part
// two function that return what is returned from useContext
export const useAuthState = () => useContext(StateContext); //gives access just to the current state
export const useAuthDispatch = () => useContext(DispatchContext); // gives access just to the dispatch
