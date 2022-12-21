import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, SafeAreaView, Pressable, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';




export default function AddPlayers() {

    const [ modalActive, setModalActive ] = useState(false);
    const [ capInput, setCapInput ] = useState('')

    const names = useSelector(state => state.userName);
    const dispatch = useDispatch();



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Jugadores</Text>
            <View style={styles.backConatiner}>
                <Text>No hay jugadores aun </Text>
                <Pressable 
                    onPress={() => setModalActive(true)} 
                    style={styles.button}
                >
                    <Text style={{color: '#3b7197'}}> + Agregar Jugador</Text>
                </Pressable>

                    <Modal
                    transparent={true}
                    animationType='fade'
                    visible={modalActive}
                    onRequestClose={() => {setModalActive(!modalActive)}}
                    >
                    <View style={styles.viewModal}>
                        <View style={styles.modal}>
                            <Text onPress={() => setModalActive(!modalActive)}>X</Text>
                            <Text style={styles.textView}>Agrega Jugadores</Text>
                            <TextInput 
                            onChangeText={(text) => setCapInput(text)}
                            placeholder='Escribe un nombre'></TextInput>
                            <Pressable
                            onPress={() => setModalActive(!modalActive)}
                            >
                            <Text>Continuar</Text> 
                            </Pressable>
                        </View>
                    </View>
                    </Modal>

                <TouchableOpacity>
                    <Text>Historial</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3b7197',
        alignItems: 'center',
        padding: 14
    },
    title: {
        color: '#fff',
        fontSize: 30,
        paddingTop: 6,
        paddingBottom: 12
    },
    backConatiner: {
        backgroundColor: '#fff',
        borderRadius: 5,
        width: '100%',
        padding: 10,
        height: '80%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        textAlign: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    modal: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    viewModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    }
})
