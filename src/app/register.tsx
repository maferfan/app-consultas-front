import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Link, router } from "expo-router";

export default function Register() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <Pressable
        className="bg-black flex-[0.2] justify-center flex-row items-center "
        onPress={() => router.back()}
      >
        <View className="mt-2 flex-[0.15] items-center">
          <FontAwesomeIcon icon={faArrowLeft} size={30} color="white" />
        </View>
        <Text className="flex-1 text-center font-bold text-[40px] text-white ">
          Login
        </Text>
      </Pressable>
      <View className="bg-white flex-1 rounded-tl-[150px] items-center">
          <ScrollView showsVerticalScrollIndicator={false} className="mt-12 max-h-[500px] p-2 w-[70%]" >
        <View className="bg-white flex-[0.8] rounded-tl-[150px] w-[100%]">
            <TextInput
              className="mt-24 flex items-center bg-gray-200 rounded-xl  h-15 border-1 p-5"
              value={""}
              placeholder="Nome"
            />
            <TextInput
              className=" mt-8 flex items-center bg-gray-200 rounded-xl  h-15 border-1 p-5"
              value={""}
              placeholder="Sobrenome"
            />
            <TextInput
              className=" mt-8 flex items-center bg-gray-200 rounded-xl  h-15 border-1 p-5"
              value={""}
              placeholder="Email"
            />
            <TextInput
              className=" mt-8 flex items-center bg-gray-200 rounded-xl  h-15 border-1 p-5"
              value={""}
              placeholder="Senha"
            />
            <TextInput
              className=" mt-8 flex items-center bg-gray-200 rounded-xl  h-15 border-1 p-5"
              value={""}
              placeholder="Confirmar senha"
            />
            <TextInput
              className=" mt-8 flex items-center bg-gray-200 rounded-xl  h-15 border-1 p-5"
              value={""}
              placeholder="Tipo"
            />
            <TextInput
              className=" mt-8 flex items-center bg-gray-200 rounded-xl  h-15 border-1 p-5"
              value={""}
              placeholder="Especialidade"
            />
            <TextInput
              className=" mt-8 flex items-center bg-gray-200 rounded-xl  h-15 border-1 p-5"
              value={""}
              placeholder="CRM"
            />
            <TextInput
              className=" mt-8 flex items-center bg-gray-200 rounded-xl  h-15 border-1 p-5"
              value={""}
              placeholder="Descrição"
            />
            <Text className="mt-6  text-center rounded-tl-3xl rounded-b-3xl p-4 bg-black text-white">
              Registrar
            </Text>
            <Pressable className="mt-6" onPress={() => router.back()}>
              <Text className="font-bold text-center">
                Já tem conta? Faça o login
              </Text>
            </Pressable>
        </View>
          </ScrollView>
      </View>
    </SafeAreaView>
  );
}
