import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../styles/colors';

import userImg from '../assets/retrato.png';
import fonts from '../styles/fonts';


export function Header() {
    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.greeting}>olá</Text>
                <Text style={styles.userName}>Renato</Text>
            </View>
            <Image source={userImg} style={styles.image} />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
       paddingVertical: 20,
        //backgroundColor: colors.red,
        marginTop: getStatusBarHeight(),
       

    },

    image: {
        width: 70,
        height: 80,
        borderRadius: 35,
    },

    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    userName: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 40
    }

})