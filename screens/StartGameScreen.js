import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

//Constants libs
import Colors from '../constants/colors';
import TextStyles from '../constants/text-style';

//Custom components
import Card from '../components/Card';
import StartButton from '../components/StartButton';
import ResetButton from '../components/ResetButton';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props =>{

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedValue, setSelectedValue] = useState();
    
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetIput = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInput = () => {
        const chosenNumber = parseInt(enteredValue);
        if ( isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number', 
                "The number isn't between 1 and 99.\n Choose a different number to continue.", 
                [{text: 'Try Again', style: 'default', onPress: resetIput}])
            return;
        }
        setConfirmed(true);
        setSelectedValue(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput = 
        <Card style={styles.inputContainer}>
            <Text style={TextStyles.labelText}>Select a Number</Text>
            <Input 
                style={styles.input}
                blurOnSubmit 
                autoCorrect={false}
                maxLength={2}
                keyboardType="number-pad"
                onChangeText={numberInputHandler}//Send value when text change
                value={enteredValue}//Add the value to the input
            />
            <View style={styles.buttonContainer}>
                <ResetButton myEvent={resetIput}>
                    Reset
                </ResetButton>
                <StartButton myEvent={confirmInput}>
                    Confirm
                </StartButton>
            </View>
        </Card>;

    if(confirmed) {
        confirmedOutput = 
        <Card style={styles.inputContainer}>
            <Text style={TextStyles.labelText}>You choose the number</Text>
            <NumberContainer>{selectedValue}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <ResetButton myEvent={() => setConfirmed(false)}>
                        Reset Number
                    </ResetButton>
                    <StartButton myEvent={() => props.onStartGame(selectedValue)}>
                        Start Game !
                    </StartButton>
                </View>
        </Card>
    }

    return(
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <View style={styles.screen}>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        alignItems: "center",
    }, 
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 600,
        maxWidth: "95%",
        alignItems: "center",
    },
    input: {
        width: 50,
        textAlign: "center",
        margin: 10,
        color: Colors.primary,
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15
    }
});

export default StartGameScreen;