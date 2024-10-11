import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";


function GameOverScreen({ totalGuess, userNumber, onPress }) {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/success.png')}
                />
            </View>
            <Text style={styles.countText}>Your Phone needed <Text style={styles.mainCountValue}>{totalGuess}</Text> rounds to guess the number <Text style={styles.mainCountValue}>{userNumber}</Text>
            </Text>

            <View style={styles.newGameBtnContainer}>
                <PrimaryButton onPress={onPress}>Start New Game</PrimaryButton>
            </View>

        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginTop: 20
    },
    image: {
        width: '100%',
        height: '100%'
    },
    countText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        paddingHorizontal: 15,
        marginTop: 15
    },
    mainCountValue: {
        color: '#4e0329',
        fontSize: 20,
        fontWeight: 'Bold'
    },
    newGameBtnContainer: {
        marginTop: 25
    }
});