import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import { Ionicons, AntDesign } from "@expo/vector-icons"

function generateRandomNumber(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver, handleGuess }) {
    const initialGuess = generateRandomNumber(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);


    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])


    function nextGuessHandler(direction) {
        handleGuess();
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [
                { text: "Sorry", style: 'cancel' }
            ])
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <View style={styles.boxContainer}>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.btnMain}>
                    <Text style={styles.btnMainText}>Higher or lower?</Text>
                    <View style={styles.btnContainers}>
                        <View style={styles.btnContainer}><PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="add-circle" size={24} color="white" />
                        </PrimaryButton></View>
                        <View style={styles.btnContainer}><PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <AntDesign name="minuscircle" size={20} color="white" />
                        </PrimaryButton></View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
        marginTop: 100
    },
    boxContainer: {
        backgroundColor: '#4e0329',
        padding: 10,
        marginTop: 19,
        borderRadius: 8,
        elevation: 10
    },
    btnContainers: {
        // flex: 1,
        flexDirection: 'row'
    },
    btnContainer: {
        flex: 1
    },
    btnMain: {
        alignItems: 'center'
    },
    btnMainText: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        paddingVertical: 10
    }
})