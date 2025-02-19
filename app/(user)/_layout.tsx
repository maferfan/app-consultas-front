import { Tabs } from "expo-router";
import { TabBar } from "@/components/TabBar";
import { TooltipInfoExit } from "@/components/Tooltip";

export default function UserLayout() {

  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen name="pesquisa" options={{headerShown: false}}/>
      <Tabs.Screen name="perfil" />
      <Tabs.Screen name="sair" options={{
        tabBarButton: () => void 0
      }}/>
    </Tabs>
  );
}
