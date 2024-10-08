import React from 'react';
import { View, Text,StyleSheet } from 'react-native';



const Title = ({children}) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
    screen: {
      flex:1,
      padding:25
    },
    title: {
      fontFamily:"open-sans-bold",
      fontSize:24,
      fontWeight:"bold",
      color:"white",
      textAlign:'center',
      borderWidth:2,
      borderColor:"white",
      padding:12
    }
  })
