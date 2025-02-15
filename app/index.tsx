import { SafeAreaView, Text, TextInput, View } from "react-native";
import "../global.css";
import { Link } from "expo-router";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
export default function Login() {
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
          value={""}
          placeholder="Email"
        />
        <TextInput
          className="mt-8 flex items-center bg-gray-200 rounded-xl w-[80%] h-15 border-1 p-5"
          value={""}
          placeholder="Senha"
        />

        <Text className="mt-12 w-[80%] text-center rounded-tl-3xl rounded-b-3xl p-4 bg-black text-white">
          Acessar
        </Text>
        <Link href="/register" className="mt-16 font-bold">
          Não tem conta? registre-se
        </Link>
      </View>
    </SafeAreaView>
  );
}
