import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

//Constants libs
import Colors from '../constants/colors';

const StartButton = props => {
    return(
        <TouchableOpacity activeOpacity={0.6} onPress={props.myEvent}>
            <View style={styles.buttonContainer}>
                <Text style={styles.button}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.primary,
        borderRadius: 20,
        width: 100,
    },
    button: {
        color: "white",
        fontFamily: 'Poppins_600SemiBold',
        padding: 10,
        textAlign: "center"
    }
});

export default StartButton;