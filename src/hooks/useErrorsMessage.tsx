import { FieldError } from "react-hook-form";
import { Text } from "react-native";

export function errorsMessage(error?: FieldError) {
  return <>{error && <Text className=" mt-2 text-lg font-bold text-red-700">{error.message}</Text>}</>;
}
