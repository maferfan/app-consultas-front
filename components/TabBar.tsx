import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity, View } from "react-native";
import { faAdjust, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const fontIcons = (name: string) => {
    switch(name){
        case "home":
            return <FontAwesomeIcon icon={faHome} size={25}/>
        case "perfil":
            return <FontAwesomeIcon icon={faUser} size={25}/>
        case "sair":
            return <FontAwesomeIcon icon={faAdjust} size={25}/>
    }
  }
  return (
    <View className="absolute flex-row justify-center items-center mx-20 bottom-16 bg-gray-300 p-5 rounded-3xl">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            className="flex justify-center items-center gap-2"
          >
            {fontIcons(route.name)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
