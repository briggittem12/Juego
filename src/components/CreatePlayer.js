import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, FlatList } from 'react-native';
import { addUserName } from '../globalState/playerSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUserNames } from '../globalState/playerSlice';



export default function CreatePlayer(){

    const userNames = useSelector(state => state.userName.userName);

    return (
        <View>
        <FlatList
            data={userNames}
            renderItem={({item}) => <Text>{item.key}</Text>}
        />
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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