import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Screen(){
    const handleClick = () => {
        router.navigate('/about')
    }

    return(
        <View>
            <Text>Opa tudo bem?</Text>

            <Link href='/about' asChild>
                <Pressable onPress={handleClick} style={styles.button}>
                    <Text>
                        Ir para SOBRE
                    </Text>
                </Pressable>
            </Link>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    button:{
        width:200,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#643a3a',
        borderRadius:6
    }
})