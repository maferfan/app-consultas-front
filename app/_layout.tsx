import { Stack } from "expo-router";
import "../global.css";
import { AuthProvider } from "@/context/authContext";
import { toastConfig } from "@/components/toastConfig";
import Toast from "react-native-toast-message";
export default function RootLayout() {
  
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="register" />
        <Stack.Screen name="(user)" />
      </Stack>
      <Toast config={toastConfig}/>
    </AuthProvider>
  );
}
