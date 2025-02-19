import { useAuthReducer } from "@/reducer/useAuthReducer";
import { authService } from "@/services/auth";
import { AuthContextProps, AuthProviderProps } from "@/types/auth.types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { createContext, useEffect } from "react";
import Toast from "react-native-toast-message";

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export function AuthProvider({ children }: AuthProviderProps) {
  const { dispatch, auth } = useAuthReducer();

  useEffect(() => {
    const data = async () => {
        const token = await AsyncStorage.getItem("token");
        if (token !== null) {
          dispatch({
            type: "SET-USER-ON",
            payload: { value: JSON.parse(token as string) },
          });
          router.replace('/(user)/pesquisa')
        }
    }
    data()
  }, []);

  const handleAuthLogin = async (email: string, pass: string) => {
    const data = await authService.authUser({
      email: email,
      senha: pass,
    });
    dispatch({ type: "SET-USER-ON", payload: { value: data } });
    if(data.auth){
      router.push('/(user)/pesquisa')
      Toast.show({
        type: 'success',
        text1: 'Bem vindo, ',
        text2: `${email}`,
        position: 'bottom'
      })
    }
  };

  const handleAuthLogout = async () => {
    // const data = await authService.authUser({
    //   email: "matheusfer@gmail.com",
    //   senha: "12345",
    // });
    await AsyncStorage.removeItem('token')
    dispatch({ type: "SET-USER-OFF", payload: { value: null } });
    router.replace('/')
  };

  return (
    <AuthContext.Provider value={{ auth, handleAuthLogin, handleAuthLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
