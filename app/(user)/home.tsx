import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Button, Pressable, Text, TextInput, View } from "react-native";
import { faSearch, faList } from "@fortawesome/free-solid-svg-icons";
import { Select } from "@/components/Select";
import { useContext } from "react";
import { AuthContext } from "@/context/authContext";

export default function Home() {
  const {auth, handleAuthLogout} = useContext(AuthContext)
  console.log(auth)
  return (
    <View className="bg-black flex-1 items-center ">
      <View className="relative w-[80%] top-20">
        <TextInput
          className="bg-gray-200 rounded-xl h-15 border p-5 pl-12 w-full"
          placeholder="Pesquisar médico"
        />
        <View className="absolute right-4 top-1/2 -translate-y-1/2">
          <FontAwesomeIcon icon={faSearch} size={20} color="gray" />
        </View>
      </View>
      <View className="top-20 right-32 bg-gray-200  rounded-3xl mt-2 w-28 ">
        <View className="mt-[2px] ml-3">
          <Button title="Filtro" color="black" />
        </View>
        <View className="absolute left-2 top-6 -translate-y-1/2 px-2">
          <FontAwesomeIcon icon={faList} size={15} color="gray" />
        </View>
      </View>
      <View className="w-[50%] left-24 top-16 -translate-y-1/2 mr-5">
        <Select />
      </View>
      <Pressable className="mt-12 w-[80%] rounded-tl-3xl rounded-b-3xl p-4 bg-black" onPress={handleAuthLogout}>
                  <Text className="text-center text-white">Sair</Text>
              </Pressable>
    </View>
  );
}
