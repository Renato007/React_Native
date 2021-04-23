import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView, //para fazer com que o bloco se mova para cima quando aparecer o teclado.Elementos não podem estar soltos.Boa pratica colocar dentro de uma View
    Platform
} from 'react-native';



import { useNavigation } from '@react-navigation/native';
import { Button } from '../components/Button';


import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function UserIdentification() {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<String>();

    const navigation = useNavigation();
    
    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(value);

    }


function handleSubmit(){
navigation.navigate('Confirmation');
}

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.content}>
                    <View style={styles.form}>
                        <View style={styles.header}>
                            <Text style={styles.emoji}>
                                {isFilled ? "emotion": "emotion2"}
                    </Text>
                            <Text style={styles.title}>
                                Como podemos{'\n'} chamar você ?
                    </Text>
                        </View>
                        <TextInput
                            style={[
                                styles.input,
                                (isFocused || isFilled) &&
                                { borderColor: colors.green }

                            ]}
                            placeholder="Digite um nome"
                            onBlur={handleInputBlur}//quando ele sai do textimput,
                            onFocus={handleInputFocus}// coca no textimput
                            onChangeText={handleInputChange}
                        />
                        <View style={styles.footer}>

                            <Button
                            title="Confirmar"
                            onPress={handleSubmit}
                            />

                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    content: {
        flex: 1,
        width: '100%'
    },
    form: {

        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center'

    },
    header: {
        alignItems: "center"
    },
    emoji: {

        fontSize: 44,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        padding: 10,
        textAlign: 'center'
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 32,
        marginTop: 20

    },
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20

    }
});