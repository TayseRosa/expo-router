import { Link, router, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Screen(){
    return(
        <View>
            <Text>Login</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
})