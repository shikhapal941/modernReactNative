import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

const StartGameScreen = ({onPickNumber}) => {
  const [enteredNumber,setEnteredNumber] = useState(0);
  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };
  const resetInputHandler = () => {
    setEnteredNumber("");
  }
  const confirmInputHandler = () => {
    console.log("valid number1");
    
    const chosenNumber = parseInt(enteredNumber);
    if(isNaN(chosenNumber) || chosenNumber <=0  || chosenNumber > 99)
    {
      console.log("valid number2");
      Alert.alert("Invalid Number!","Numbre has to be number between 1 and 99.",[
        {text:"Okay",style:"destructive",onPress:resetInputHandler}
      ])
      return;
    }
    onPickNumber(chosenNumber);
    console.log("valid number3");
  };
  return (
    <View style={styles.rootContainer}>
    <Title>Guess My Number</Title>
    <Card >
    <InstructionText>Enter a Number</InstructionText>
      <TextInput style={styles.numberInput} maxLength={2}  
      value={enteredNumber}
      autoCapitalize='none'//not auto capatilized
       keyboardType='number-pad' // only show number one keyboard
       autoCorrect={false} // getting autoCorrect false
       onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
      <View style={styles.buttonContainer}>
      <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
      </View>
     <View style={styles.buttonContainer}>
     <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
     </View>
    
      </View>
  
    </Card>
    </View>
  );
}

export default StartGameScreen;
const styles = StyleSheet.create({
 instructionText:{
  color:Colors.accent500,
  fontSize:24
 },
  rootContainer:{flex:1,
    marginTop:100,
    alignItems:"center"
  },
  inputContainer: { 
    marginHorizontal:24,
    padding:16,
    marginTop:100,
    backgroundColor:Colors.primary800,
    borderRadius:8,
    elevation:4,//only works in android
    shadowColor:'black',
    shadowOffset:{width:0,height:2},
    shadowRadius:6,
    shadowOpacity:0.25,
    justifyContent:'center',
    alignItems:'center'
   },
   numberInput:{
    height:50,
    width:50,
    fontSize:32,
    borderBottomColor:"#ddb52f",
    borderBottomWidth:2,
    color:'#ddb52f',
    marginVertical:8,
    fontWeight:"bold",
    textAlign:'center'
   },
   buttonsContainer:{
    flexDirection:"row"
   },
   buttonContainer:{
    flex:1
   }
})
