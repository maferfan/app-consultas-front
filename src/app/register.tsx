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
import { UseFormRegister } from "@/src/hooks/useFormRegister";
import { useForm } from "react-hook-form";
import { registerFormSchema, RegisterSchema } from "../schemas/register";
import { zodResolver } from "@hookform/resolvers/zod";
export default function Register() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    watch
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerFormSchema),
  });
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="mt-12 max-h-[500px] p-2 w-[70%]"
        >
          <UseFormRegister
            control={control}
            handleSubmit={handleSubmit}
            errors={errors}
            watch={watch}
          />
        </ScrollView>
        
        <Pressable className="mt-16" onPress={() => router.back()}>
          <Text className="font-bold text-center">
            Já tem conta? Faça o login
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
