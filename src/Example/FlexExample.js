
import { View, Text,StyleSheet } from 'react-native';

const FlexExample = () => {
  return (
    <View style={{padding:50,flexDirection:'row',width:"80%",height:300,
    justifyContent:'space-around',alignItems:"stretch"
    }}>
      <View style={[styles.viewStyle,{backgroundColor:'red',flex:2}]}><Text>1</Text></View>
      <View style={[styles.viewStyle,{backgroundColor:'blue',flex:1}]}><Text>2</Text></View>
      <View style={[styles.viewStyle,{backgroundColor:'green',flex:1}]}><Text>3</Text></View>
    </View>
  );    
}
const styles = StyleSheet.create({
    viewStyle:{
        // width:100,
        // height:100,
        justifyContent:'center',
        alignItems: 'center',
    }
})

// main axis === if (row) then left to right else (column) top to bottom
// cross axis === if (row) then top to bottom else (column) left to right

export default FlexExample;
