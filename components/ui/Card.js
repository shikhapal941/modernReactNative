import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const Card = ({children}) => {
  return (
    <View style={styles.inputContainer}>
     {children}
    </View>
  );
}

export default Card;
const styles = StyleSheet.create({
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
  })
