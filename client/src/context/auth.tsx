import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { User } from "../types";

interface State {
  authenticated: boolean;
  user: User | undefined;
}

interface Action {
  type: string;
  payload: any;
}

// Context object for retrieving the state
const StateContext = createContext<State>({
  authenticated: false,
  user: null,
});

// Context object for updating the state
const DispatchContext = createContext(null);

// Reducer function for useReducer hook
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

// Used in _app.tsx to pass authentication state down to all children in this web app
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    authenticated: false,
  });

  // If the user is already login in, load the user in
  useEffect(() => {
    const loadUser = async () => {
      const token: string | undefined = localStorage.getItem("accessToken");
      try {
        const res = await axios.post("/auth/me", { accessToken: token });
        dispatch({ type: "LOGIN", payload: res.data.username });
      } catch (error) {
        console.log(error);
      }
    };
    loadUser();
  }, []);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

// Custom hook for retrieving the state
export const useAuthState = () => useContext(StateContext);
//Custom hook for updating the state
export const useAuthDispatch = () => useContext(DispatchContext);
