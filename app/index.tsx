import { Link, router, Stack } from "expo-router";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function Screen(){
    const handleClick = () => {
        router.navigate('/about')
    }

    const handleAddButtonRight = () => {
        alert('Adicionado com sucesso')
    }

    return(
        <View>
            <Stack.Screen options={{
                title:'Início',
                headerRight:()=><Button title="Add" onPress={handleAddButtonRight} />
            }} />
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