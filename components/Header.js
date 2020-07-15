import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Constants libs
import Colors from '../constants/colors';
import TextStyles from '../constants/text-style';

const Header = props =>{
    return(
        <View style={styles.header}>
            <Text style={TextStyles.headerText}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        justifyContent: "center", 
        alignItems: "center"
    },
});

export default Header;