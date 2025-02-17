import { Tabs } from "expo-router";
import { TabBar } from "@/components/TabBar";

export default function UserLayout() {

  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen name="home" options={{headerShown: false}}/>
      <Tabs.Screen name="perfil" />
      <Tabs.Screen name="sair" />
    </Tabs>
  );
}
