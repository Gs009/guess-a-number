import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';

export default StyleSheet.create({
    headerText: {
        fontFamily: 'Poppins_600SemiBold',
        color: "white",
        fontSize: 18,
    },
    labelText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 17
    },
    numberText: {
        borderWidth: 2,
        borderColor: Colors.border,
        color: Colors.primary,
        borderRadius: 5,
        padding: 5,
        fontSize: 20,
        textAlign: "center",
        fontWeight: 'bold',
        width: 50
    }
});