import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";
import { Text, TextInput, View } from "react-native";

type InputFieldController = {
  placeholder?: string;
  name: string;
  control: Control<FieldValues>;
  error: FieldErrors<FieldValues>;
};

export const InputField = ({
  name,
  placeholder,
  control,
  error,
}: InputFieldController) => (
  <View>
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <TextInput
          className="mt-8 flex items-center bg-gray-200 rounded-xl w-[80%] h-15 border-1 p-5"
          value={value}
          placeholder={placeholder}
          onChangeText={onChange}
        />
      )}
    />
    {error && <Text className="text-red-500">{error.root?.message}</Text>}
  </View>
);
