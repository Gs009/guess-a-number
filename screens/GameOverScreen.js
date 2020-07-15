import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

//Custom components
import Card from '../components/Card';
import StartButton from '../components/StartButton';

const GameOverScreen = props => {
    return(
        <ScrollView style={styles.screen}>
            <View style={styles.screenContainer}>
                <Image style={styles.img} source={require('../assets/game_over.png')} resizeMode="contain"/>
                <Card style={styles.msgContainer}>
                    <Text style={styles.msg}>
                        The number was <Text style={styles.msgVar}>{props.userNumber}</Text>.{"\n"} 
                        The computer finds the solution in <Text style={styles.msgVar}>{props.numberGuess}</Text> rounds.
                    </Text>
                </Card>
                <StartButton myEvent={props.restartGame}>
                    Restart ?
                </StartButton>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    screenContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        width: '80%',
        height: 300
    },
    msgContainer: {
        marginVertical: 20,
        marginHorizontal: 20,
    },
    msg: {
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Poppins_400Regular"
    },
    msgVar: {
        fontFamily: "Poppins_600SemiBold",
    }
});

export default GameOverScreen;