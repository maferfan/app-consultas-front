import { Button, FlatList, Pressable, TextInput, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch, faList } from "@fortawesome/free-solid-svg-icons";
import { Select } from "@/components/Select";
import { ListaMedicos } from "@/components/ListaMedicos";
import { medicoService } from "@/services/medicos";
import { useState } from "react";
import { Medico } from "@/types/medicos.types";

export default function Pesquisa() {
  const [name, setName] = useState("");
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const handleMedicos = async () => {
    const data = await medicoService.medicos({
      nome: name,
    });
    setMedicos(data);
  };
  console.log(medicos);
  return (
    <View className="bg-black flex-1 items-center ">
      <View className="relative w-[80%] top-20">
        <TextInput
          className="bg-gray-200 rounded-xl h-15 border p-5 pl-12 w-full"
          placeholder="Pesquisar médico"
          onChangeText={(text) => setName(text)}
        />
        <Pressable
          className="absolute right-4 top-1/2 -translate-y-1/2"
          onPress={handleMedicos}
        >
          <FontAwesomeIcon icon={faSearch} size={20} color="gray" />
        </Pressable>
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
      {/* <ListaMedicos medico={medicos}/> */}
      <FlatList
        data={medicos}
        renderItem={({ item }) => <ListaMedicos medico={item} />}
        keyExtractor={(item) => item._id}
        contentContainerClassName="items-center mt-5" 
        className="max-h-[550]"
      />
    </View>
  );
}
