import { AxiosError } from "axios";
import Toast from "react-native-toast-message";

export function Errors(error: unknown) {
  const axiosError = error as AxiosError<{ error: string }>;
  if (axiosError) {
    Toast.show({
      type: "error",
      text1: "Falha",
      text2: `${axiosError.response?.data.error}`,
      position: "bottom",
    });
  }
}
