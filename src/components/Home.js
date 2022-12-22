import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function Home() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Hello Player</Text>
            <Button 
                title='Go to List' 
                onPress={() => navigation.navigate('AddPlayers')}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

