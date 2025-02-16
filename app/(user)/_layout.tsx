import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Tabs } from "expo-router";



export default  function UserLayout(){
    return(
        <Tabs>
            <Tabs.Screen name="home" options={{
                tabBarIcon: () => <FontAwesomeIcon icon="home" size={20}/>
            }}/>
            <Tabs.Screen name="perfil" options={{
                tabBarIcon: () => <FontAwesomeIcon icon="home"/>
            }}/>
        </Tabs>
    )
}