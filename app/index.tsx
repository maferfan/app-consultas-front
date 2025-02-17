import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

import { Link } from "expo-router";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { authService } from "@/services/auth";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/authContext";
export default function Login() {
  const { handleAuthLogin } = useContext(AuthContext);
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  // const {handleSubmit, control, } = useForm({
  
  // })
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="bg-black flex-[0.3] items-center justify-center">
        <Text className="bg-white w-15 h-15 p-6 rounded-tl-3xl rounded-b-3xl">
          <FontAwesomeIcon icon={faUser} size={64} />
        </Text>
      </View>
      <View className="bg-white flex-[0.8] rounded-tl-[150px] items-center">
        <Text className="text-center mt-20 font-bold text-[40px]">Login</Text>
        <TextInput
          className="mt-24 flex items-center bg-gray-200 rounded-xl w-[80%] h-15 border-1 p-5"
          value={login}
          placeholder="Email"
          onChangeText={(text) => setLogin(text)}
        />
        <TextInput
          className="mt-8 flex items-center bg-gray-200 rounded-xl w-[80%] h-15 border-1 p-5"
          value={pass}
          placeholder="Senha"
          onChangeText={(text) => setPass(text)}
        />
        <Pressable
          className="mt-12 w-[80%] rounded-tl-3xl rounded-b-3xl p-4 bg-black"
          onPress={() => handleAuthLogin(login, pass)}
        >
          <Text className="text-center text-white">Acessar</Text>
        </Pressable>
        <Link href="/register" className="mt-16 font-bold">
          Não tem conta? registre-se
        </Link>
      </View>
    </SafeAreaView>
  );
}
