import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors';

const ResetButton = props => {
    return(
        <TouchableOpacity onPress={props.myEvent}>
            <View style={styles.buttonContainer}>
                <Text style={styles.button}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.secondary,
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

export default ResetButton;