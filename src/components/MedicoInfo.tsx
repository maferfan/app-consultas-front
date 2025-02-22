import { Image, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Medico } from "@/src/types/medicos.types";
type ListaMedicos = {
  medico: Medico;
};

export function MedicoInfo({ medico }: ListaMedicos) {
  const imgUrl = medico.fotoPerfil?.slice(1);
  return (
    <LinearGradient
      colors={["#d9d9d9", "#737373"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        width: "90%",
        borderTopLeftRadius: 20,
        borderBottomEndRadius: 20,
        borderBottomLeftRadius: 20,
      }}
    >
      <View className="items-center flex-1">
        <Text className="font-bold">Dr(a) {medico.nome}</Text>

        <Image
          source={{
            uri: `http://localhost:8082/uploads/${imgUrl ?? "1739584017883-images.jpeg"}`,
          }}
          style={{ width: 80, height: 80, borderRadius: 50, marginTop: 10 }}
        />
          <Text className="text-gray-600 italic mt-2">{medico.especialidade}</Text>
      </View>
      <View className="pr-5">
        <View className="items-center flex-row gap-3">
          <FontAwesomeIcon icon={faLocation} size={15} />
          <Text className="text-gray-600 italic">Joinville - SC</Text>
        </View>
        <View className="mt-2 items-center flex-row gap-3">
          <FontAwesomeIcon icon={faWhatsapp} size={15} />
          <Text className="text-gray-600 italic">47-99999-9999</Text>
        </View>
        <View className="mt-2 items-center flex-row gap-3">
          <FontAwesomeIcon icon={faInstagram} size={15} />
          <Text className="text-gray-600 italic">@Ferrazzam</Text>
        </View>
        <View className="items-end mt-5">
          <LinearGradient
            colors={["#d9d9d9", "#737373"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Text className=" italic rounded-lg">Descrição</Text>
          </LinearGradient>
        </View>
      </View>
    </LinearGradient>
  );
}
