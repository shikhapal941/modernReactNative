import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert, FlatList } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/MyNum';
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import {Ionicons} from "@expo/vector-icons"
import GuessLogItem from '../components/game/GuessLogItem';
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = ({ userNumber, onGameOver }) => {
  const [gameIsOver, setGameIsOver] = useState(true);
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds,setGuessRounds] = useState([initialGuess]);
  
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);
  useEffect(()=>{
    minBoundary = 1;
    maxBoundary = 100;
  },[]);
  console.log("ceeeeeeeee", currentGuess);
  const nextGuessHandler = (direction) => {
    if ((direction == "lower" && currentGuess < userNumber) || (direction == "greater" && currentGuess > userNumber)) {
      Alert.alert("Don't lie", "you know that this is wrong .......", [{
        text: "Sorry!", style: "cancel",
      }])
     
      return;
    }
    // "lower", "greater"
    if (direction == "lower") {
      maxBoundary = currentGuess;

    } else {
      minBoundary = currentGuess + 1;

    }
    console.log(minBoundary, maxBoundary);
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevGuessRounds => [newRndNumber,...prevGuessRounds]);
  };

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title >Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      {/* GUESS */}
      <Card>
        <InstructionText style={styles.InstructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="remove" size={24} color="white"/>
          </PrimaryButton>
          </View>
       <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
          <Ionicons name="add" size={24} color="white"/>
          </PrimaryButton>
          </View>
        </View>

      </Card>
      <View style={styles.listContainer}>
       {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
       <FlatList
        data={guessRounds}
        renderItem={(itemData)=><GuessLogItem roundNumber={guessRoundsListLength - itemData.index}
         guess={itemData.item}/>}
        keyExtractor={(item) => item}
       />
      </View>
    </View>
  );
}

export default GameScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 25
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: 'center',
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 12
  },
  buttonsContainer:{
    flexDirection:"row"
   },
   buttonContainer:{
    flex:1
   },
   InstructionText:{
    marginBottom:12
   },
   listContainer:{
    flex:1,
    padding:16
  }

})
