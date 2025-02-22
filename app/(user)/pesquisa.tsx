import { Button, FlatList, Pressable, TextInput, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch, faList } from "@fortawesome/free-solid-svg-icons";
import { Select } from "@/components/Select";
import { MedicoInfo } from "@/components/MedicoInfo";
import { useCallback, useEffect } from "react";
import { useMedicosStore } from "@/store/useMedicosStore";

export default function Pesquisa() {
  const {
    medicos,
    filtroActive,
    especialidade,
    fetchMedicos,
    setName,
    setFiltroActive,
    setEspecialidade,
  } = useMedicosStore();

  const handleFetchMedicos = useCallback(() => {
    fetchMedicos();
  }, [filtroActive, especialidade]);

  useEffect(() => {
    handleFetchMedicos();
  }, [handleFetchMedicos]);

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
          onPress={fetchMedicos}
        >
          <FontAwesomeIcon icon={faSearch} size={20} color="gray" />
        </Pressable>
      </View>
      <View className=" w-[80%] h-16 mt-24 flex-row justify-between items-center ">
        <View className="relative  bg-gray-200  rounded-3xl mt-2 w-28 ">
          <View className="mt-[2px] ml-3">
            <Button
              title="Filtro"
              color={filtroActive ? "blue" : "black"}
              onPress={() => setFiltroActive(!filtroActive)}
            />
          </View>
          <View className="absolute left-2 top-6 -translate-y-1/2 px-2">
            <FontAwesomeIcon
              icon={faList}
              size={15}
              color={filtroActive ? "blue" : "black"}
            />
          </View>
        </View>
        {filtroActive && (
          <Select setValue={setEspecialidade} value={especialidade} />
        )}
      </View>
      <View className="mt-5">
        <FlatList
          data={medicos}
          renderItem={({ item }) => <MedicoInfo medico={item} />}
          keyExtractor={(item) => item._id}
          contentContainerClassName="items-center justify-between"
          className="max-h-[60vh]"
        />
      </View>
    </View>
  );
}
