import { FieldError } from "react-hook-form";
import { Text } from "react-native";

export function errorsMessage(error?: FieldError) {
  return <>{error && <Text className="text-red-500 mt-1 text-lg">{error.message}</Text>}</>;
}
