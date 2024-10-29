import { Stack } from "expo-router";
import { Button, Text } from "react-native";

export default function RootLayout(){
    const handleAddButton = () => {
        <Text>Button Right</Text>
    }

    return(
        <Stack screenOptions={{
            headerShown:true,
            headerStyle:{
                backgroundColor:'#610479'
            },
            headerTintColor:"#000",
            headerTitleStyle:{
                fontSize:30,
                fontWeight:'bold'
            }
            
        }}>
            <Stack.Screen name="index" options={{ title:'Home' }}/>
            <Stack.Screen name="about" options={{ title:'About' }}/>

            <Stack.Screen name="(aux)/termos" options={{ title:'Termos de uso2' }}/>
            <Stack.Screen name="auth/login" options={{ title:'Login' }}/>
            <Stack.Screen name="profile/[id]" />
        </Stack>
    )
}