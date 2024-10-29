import { Stack } from "expo-router";
import { Button, Text } from "react-native";

export default function RootLayout(){

    return(
        <Stack screenOptions={{ headerShown:false }}>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="tela2" />
        </Stack>
    )
}