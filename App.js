import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from "expo-linear-gradient"
import { useFonts } from 'expo-font';
import GameScreen from "./screens/GameScreen";
import { useState } from 'react';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import AppLoading from "expo-app-loading";
export default function App() {
  const [userNumber, setUserNumber] = useState(0); 
  const [guessRounds,setGuessRounds] = useState(0);
  const [gameIsOver,setGameIsOver] = useState(true);
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  };
  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };
 const [fontsLoaded,] =  useFonts({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  });
  if(!fontsLoaded){
    return <AppLoading/>;
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  const gameOverHandler = (numberOfRounds) => {
   setGameIsOver(true);
   setGuessRounds(numberOfRounds);
  };
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }
  if(gameIsOver  && userNumber)
  {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>;
  }
 
  return (

    <LinearGradient colors={[Colors.primary700,Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        imageStyle={styles.backgroundImage}
        style={styles.rootScreen}
        source={require("./assets/images/background.jpg")}
        resizeMode='cover'
      >
        <SafeAreaView
          style={styles.rootScreen}
        >{screen}</SafeAreaView>

      </ImageBackground>

    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center'
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});
