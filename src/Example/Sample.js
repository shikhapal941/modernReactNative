import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import GoalItem from '../../components/GoalItem';
import GoalInput from '../../components/GoalInput';

export default function Sample() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  function startAddGoalHandler() {
    setModalIsVisible(!modalIsVisible);
  }

  function deleteGoalHandler(id) {
    console.log("DELETE", id)
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };
  const endGoalHandler = () => {
    setModalIsVisible(false);
  };

  function addGoalHandler(goalText) {
    console.log("gettetext", goalText);
    //setCourseGoals([...courseGoals,goalText]);
    setCourseGoals((preCourse) => [...preCourse, { text: goalText, id: Math.random().toString() }]);
    endGoalHandler();
  };

  return (
    <>
      <StatusBar style={"light"} />

      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#a065ec" onPress={startAddGoalHandler} />

        {modalIsVisible && <GoalInput
          visible={modalIsVisible}
          addGoalHandler={addGoalHandler}
          endGoalHandler={endGoalHandler}
          courseGoals={courseGoals}

        />}
        <View style={styles.goalsContainer}>
          {/* alwaysBounceVertical is using in ios to stop bouning in ios when list is empty */}
          {/* <ScrollView alwaysBounceVertical={false} >
          {courseGoals?.map((goal) =>
            <View style={styles.goalItem}>
              <Text style={styles.goalText} key={goal}>{goal}</Text>
            </View>

          )}
        </ScrollView> */}
          <FlatList
            keyExtractor={(item, index) => {
              return item.id;//the other way to add key
            }}
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem itemData={itemData}
                  onDeleteItem={deleteGoalHandler}
                  id={itemData.item.id}
                />
              )
            }}
            alwaysBounceVertical={false} />






        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,

  },

  goalsContainer: {
    flex: 5,
    flexDirection: 'column'
  },
});
