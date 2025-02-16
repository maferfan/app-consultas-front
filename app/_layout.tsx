import { Stack } from "expo-router";


export default function RootLayout(){
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index"/>
            <Stack.Screen name="register"/>
<<<<<<< HEAD
=======
            <Stack.Screen name="(user)"/>
>>>>>>> a345682 (feat: front data)
        </Stack>
    )
}