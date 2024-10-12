import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [totalGuess, setTotalGuess] = useState(1);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }
  function handleGuess() {
    setTotalGuess(totalGuess + 1);
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler() {
    setGameIsOver(true);
  }

  function handleStartNewGame() {
    setUserNumber();
    setGameIsOver(true);
    setTotalGuess(1);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} handleGuess={handleGuess} totalGuess={totalGuess} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen totalGuess={totalGuess} userNumber={userNumber} onPress={handleStartNewGame} />
  }



  return (
    <LinearGradient
      colors={['#4e0329', '#ddb52f']}
      style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        resizeMode="cover"
        style={styles.mainScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.mainScreen}>
          {screen}
        </SafeAreaView>

      </ImageBackground>
      <StatusBar style='light' />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: '#ddb52f',
  },
  mainScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25
  }
});
