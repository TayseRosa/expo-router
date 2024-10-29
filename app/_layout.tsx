import { Stack } from "expo-router";
import { Button, Text } from "react-native";

export default function RootLayout(){
    const handleAddButton = () => {
        <Text>Button Right</Text>
    }

    return(
        <Stack screenOptions={{ headerShown:false }}>
            <Stack.Screen name="(tabs)" />
        </Stack>
    )
}