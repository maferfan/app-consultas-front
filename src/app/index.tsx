import { SafeAreaView, Text, View } from "react-native";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useForm } from "react-hook-form";
import { loginFormSchema, LoginSchema } from "@/src/schemas/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormLogin } from "@/src/hooks/useFormLogin";
import { Link } from "expo-router";


export default function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="bg-black flex-[0.3] items-center justify-center">
        <Text className="bg-white w-15 h-15 p-6 rounded-tl-3xl rounded-b-3xl">
          <FontAwesomeIcon icon={faUser} size={64} />
        </Text>
      </View>
      <UseFormLogin
        control={control}
        errors={errors}
        handleSubmit={handleSubmit}
      />
      <View className="text-black bg-white flex-[0.2] items-center ">
        <Link href="/register" className="text-lg font-bold">
          Não tem conta? Registre-se!
        </Link>
      </View>
    </SafeAreaView>
  );
}
