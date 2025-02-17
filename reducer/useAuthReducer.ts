import { AuthAction, AuthState } from "@/types/auth.types";
import { useReducer } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

const useAuth = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "SET-USER-ON":
      const data = JSON.stringify(action.payload.value)
      AsyncStorage.setItem('token', data)
      return { ...state, value: action.payload.value };
    case "SET-USER-OFF":
      AsyncStorage.removeItem('token')
      return { ...state, value: null };
    default:
      return state;
  }
};

const initialStateAuth: AuthState = {
  value: null,
};


export const useAuthReducer = () => {
  const [auth, dispatch] = useReducer(useAuth, initialStateAuth);

  return {
    auth,
    dispatch,
  }
}