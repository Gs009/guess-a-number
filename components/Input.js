import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import Colors from '../constants/colors';
 
const Input = props => {
    return(
        <TextInput {...props} style={{ ...styles.input, ...props.style }} />
    );
};

const styles = StyleSheet.create({
    input: {
        borderColor: Colors.border,
        borderWidth: 2,
        borderRadius: 5,
        padding: 5,
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default Input;