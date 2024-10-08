import { View, Text, StyleSheet, Pressable } from 'react-native';

const GoalItem = ({ itemData, onDeleteItem, id }) => {
  // const onPressFun = () => {
  //   onDeleteItem(itemData.item.id);
  // }
  return (
    <View style={styles.goalItem} >
      <Pressable style={({ pressed }) => pressed && styles.pressedItem} android_ripple={{ color: "red" }} onPress={onDeleteItem.bind(this, id)}>
        {/* onDeleteItem.bind(this,props.id) */}

        {/*  key={itemData.item.key} the other way to add key */}
        <Text style={styles.goalText}>{itemData.item.text}</Text>

      </Pressable>
    </View>


  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,// we need to add text in view to show borderRadius
    backgroundColor: '#5e0acc',


  },
  pressedItem: {
    opacity: 0.5,

  },
  goalText: {
    color: '#fff',
    padding: 8,
  }
})
