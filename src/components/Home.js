import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function Home() {

    const navigation = useNavigation();

    return (
        <View>
            <Text>Hello Player</Text>
            <Button 
                title='Go to List' 
                onPress={() => navigation.navigate('AddPlayers')}
            />
        </View>
    )
}

