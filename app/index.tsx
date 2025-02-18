import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Link } from "expo-router";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/authContext";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { loginFormSchema, LoginSchema } from "@/schemas/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
export default function Login() {
  const { handleAuthLogin } = useContext(AuthContext);
  const [eyeOpen, setEyeOpen] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      senha: "",
    },
  });

  const handleValues = async (data: FieldValues) => {
    await handleAuthLogin(data.email, data.senha);
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="bg-black flex-[0.3] items-center justify-center">
        <Text className="bg-white w-15 h-15 p-6 rounded-tl-3xl rounded-b-3xl">
          <FontAwesomeIcon icon={faUser} size={64} />
        </Text>
      </View>
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
        {errors.email && (
          <Text className="text-red-500">{errors.email.message}</Text>
        )}
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
          {errors.senha && (
            <Text className="text-red-500">{errors.senha.message}</Text>
          )}
        </View>
        <TouchableOpacity
          className="mt-12 w-[80%] rounded-tl-3xl rounded-b-3xl p-4 bg-black"
          onPress={handleSubmit(handleValues)}
        >
          <Text className="text-center text-white">Acessar</Text>
        </TouchableOpacity>
        <Link href="/register" className="mt-16 font-bold">
          Não tem conta? registre-se
        </Link>
      </View>
    </SafeAreaView>
  );
}
