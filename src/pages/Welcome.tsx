import React from 'react';
import {
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';
import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
export function Welcome() {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie{'\n'} suas plantas{'\n'} de forma fácil
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
            >
                <Text style={styles.buttontex}>
                    >
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-around" // between usar o around para que ele não cole nas bordas. 
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38

    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
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
    }
})