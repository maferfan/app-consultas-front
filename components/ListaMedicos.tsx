import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
export function ListaMedicos() {
  return (
    <LinearGradient
      colors={["#d9d9d9", "#737373"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 10,
        width: "80%",
        borderTopLeftRadius: 20,
        borderBottomEndRadius: 20,
        borderBottomLeftRadius: 20,
      }}
    >
      <View className="items-center">
        <Text className="font-bold">Dr(a) Matheus</Text>
        <Text className="text-gray-600 italic">Cardiologista</Text>
        <Text className="mt-2 text-red-500 p-10 bg-black rounded-full text-center">
          MF
        </Text>
      </View>
      <View>
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
