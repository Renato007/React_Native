import React from 'react';
import {
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    View
}
    from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core';

import wateringImg from '../assets/watering.png';

//boas praticas colocar uma pasta com as paletas de cores
import colors from '../styles/colors';

//boas praticas colocar uma pasta com as fontes
import fonts from '../styles/fonts';


export function Welcome() {
/*-----------------------------------------*/
const navigation = useNavigation();

function handleStart(){
navigation.navigate('UserIdentification');
}
/*É com esta instrução que permite navegar de uma tela para outra
precisará colocar a função no caso, denominada de  hardleStart() no
onPress ={ aqui } do TouchableOpacity */
/*-----------------------------------------*/


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie{'\n'} suas plantas de {'\n'} forma fácil
            </Text>

                <Image
                    source={wateringImg}
                    style={styles.imagen}
                    resizeMode="contain" // permite não fixar a imagem

                />

                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas. nós cuidamos de lembrar você sempre que precisar.
            </Text>

                <TouchableOpacity

                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={handleStart}
                >
                    <Feather
                        name="chevron-right"
                        style={styles.buttonIcon}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-around" // between usar o around para que ele não cole nas bordas. 
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-around",
        //isso tudo para colocar o padding
        paddingHorizontal: 20
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34

    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 18,
        height: 56,
        width: 56,
    },
    buttontex: {
        color: colors.white,
        fontSize: 24
    },
    imagen: {
        // evite trabalhar com valores fixos importe no react-native o pacote dimension
        height: Dimensions.get('window').width * 0.7
    },
    buttonIcon: {
        fontSize: 32,
        color: colors.white
    }
})