import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { errorsMessage } from "./useErrorsMessage";
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
} from "react-hook-form";
import { LoginSchema } from "@/schemas/login";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useContext, useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "@/context/authContext";
type UseFormController = {
  control: Control<LoginSchema>;
  errors: FieldErrors<LoginSchema>;
  handleSubmit: UseFormHandleSubmit<LoginSchema>;
};

export const UseFormLogin = ({
  control,
  errors,
  handleSubmit,
}: UseFormController) => {
  const [eyeOpen, setEyeOpen] = useState(false);
const { handleAuthLogin } = useContext(AuthContext);
  const handleValues = async (data: FieldValues) => {
      await handleAuthLogin(data.email, data.senha);
    };
  return (
    <View className="bg-white flex-[0.8] rounded-tl-[150px] items-center">
      <Text className="text-center mt-20 font-bold text-[40px]">Login</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            className="mt-24 flex items-center bg-gray-200 rounded-xl w-[80%] h-15 border-1 p-5"
            value={value}
            placeholder="Email"
            onChangeText={onChange}
          />
        )}
      />
      {errorsMessage(errors.email)}
      <View className="relative items-center w-[100%]">
        <Controller
          control={control}
          name="senha"
          render={({ field: { onChange, value } }) => (
            <TextInput
              className="mt-8 flex items-center bg-gray-200 rounded-xl w-[80%] h-15 border-1 p-5"
              value={value}
              placeholder="Senha"
              onChangeText={onChange}
              secureTextEntry={!eyeOpen ? true : false}
            />
          )}
        />
        <View className="bottom-3 left-40">
          <Pressable
            className="absolute bottom-1 right-1 -translate-y-1"
            onPress={() => setEyeOpen((prev) => (!prev ? true : false))}
          >
            <FontAwesomeIcon
              icon={eyeOpen ? faEye : faEyeSlash}
              size={20}
              color="gray"
            />
          </Pressable>
        </View>
        {errorsMessage(errors.senha)}
      </View>
      <TouchableOpacity
        className="mt-12 w-[80%] rounded-tl-3xl rounded-b-3xl p-4 bg-black"
        onPress={handleSubmit(handleValues)}
      >
        <Text className="text-center text-white">Acessar</Text>
      </TouchableOpacity>
     
    </View>
  );
};
