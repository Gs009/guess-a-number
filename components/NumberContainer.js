import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors';
import TextStyles from '../constants/text-style';
 
const NumberContainer = props => {
    return(
        <View style={styles.numberContainer}>
            <Text style={TextStyles.numberText}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    numberContainer: {
        margin: 10,
        alignItems: "center",
    },
});

export default NumberContainer;