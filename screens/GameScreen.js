import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

//Constants libs
import TextStyles from '../constants/text-style';

//Custom components
import StartButton from '../components/StartButton';
import ResetButton from '../components/ResetButton';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

//Generate a random number each time
const generateRdmNubr = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.ceil(max);
    const rdmNbr = Math.floor(Math.random() * (max - min)) + min;
    if (rdmNbr === exclude) {
        return generateRdmNubr(min, max, exclude);
    } else {
        return rdmNbr;
    }
};

const renderListItem = (value, nbrGuess) => (    
    <View style={styles.listItem} key={value}>
        <Text>#{nbrGuess}</Text>
        <Text>{value}</Text>
    </View>
);

const GameScreen = props => {
    
    const initialGuess = generateRdmNubr(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const currentLow = useRef(1);
    const currentGreater = useRef(100);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);
    const {userChoice, onGameOver} = props;

    useEffect(() => {
        if (currentGuess === props.userChoice) {
            props.onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuess = (direction) => {
        if (
            (direction === "LOWER" && currentGuess < props.userChoice) ||
            (direction === "GREATER" && currentGuess > props.userChoice)
        ) {
            Alert.alert(
                'You lie', 
                "You know that's wrong. ;)", 
                [{text: 'Sorry', style: 'default'}])
            return;       
        }
        if (direction === "LOWER") {
            currentGreater.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRdmNubr(currentLow.current, currentGreater.current, currentGuess);
        setCurrentGuess(nextNumber);
        setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses])
    };

    return (
        <View style={styles.screen}>
            <Card style={styles.computerGuess}>
                <Text style={TextStyles.labelText}>Computer's guess</Text>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <ResetButton myEvent={nextGuess.bind(this, 'LOWER')}>
                        <AntDesign name="minuscircleo" size={24} color="white" />
                    </ResetButton>
                    <StartButton myEvent={nextGuess.bind(this, 'GREATER')}>
                        <AntDesign name="pluscircleo" size={24} color="white" />
                    </StartButton>    
                </View>
            </Card>
            <View style={styles.listContainer}>
                <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
                </ScrollView>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        alignItems: "center"
    },
    computerGuess: {
        width: 600,
        maxWidth: "95%",
        alignItems: "center",
    },
    labelNumber: {
        fontSize: 17,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "80%",
    },
    listContainer: {
        flex: 1,
        width: '90%',
        marginTop: 10,
    },/*
    list: {
       alignItems: 'center',
    },*/
    listItem: {
        flexDirection: 'row',
        margin: 10,
        borderWidth: 1,
        padding: 10,
        justifyContent: 'space-between',
        borderRadius: 10,
    }
});

export default GameScreen;