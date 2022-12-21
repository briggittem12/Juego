import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput } from 'react-native';

export default function CreatePlayer(){
    return (
        <TouchableOpacity 
        disabled={true}
        style={styles.container}>
            <View style={styles.modal}>
                <View style={styles.textView}>
                    <Text style={styles.text}>Agrega Jugadores</Text>
                    <TextInput placeholder='Escribir nombre'></TextInput>
                </View>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        height: 50,
        width: '100px',
        paddingTop: 10,
        borderRadius: 10,
        backgroundColor:'#ffef'
    },
    textView: {
        flex: 1,
        alignItems: 'center'
    },
    text: {
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold'
    }
})