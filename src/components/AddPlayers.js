import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, SafeAreaView, Pressable, TextInput, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CreatePlayer  from './CreatePlayer';
import { addUserName } from '../globalState/playerSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

export default function AddPlayers() {

    const [ modalActive, setModalActive ] = useState(false);
    const [ capInput, setCapInput ] = useState('')
    const listUsers = useSelector(state => state.userName.userName)
    const dispatch = useDispatch();

    const addMoreUser = async() => {
        const newUser = {
            id: uuid.v4(),
            text: userName,
        }
        try {
            await AsyncStorage.setItem('@UserName', JSON.stringify([... listUsers, newUser]));
            dispatch(addUserName(newUser));
            
        } catch (e){
            console.log(e)
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Jugadores</Text>
            <View style={styles.backConatiner}>
                {/* { modalActive ? <Text>Agregar jugadors </Text> : <CreatePlayer/> } */}
                
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
                            onPress={addMoreUser}
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
        padding: 14,
        overflow: 'hidden'
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
