import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';

const GoalInput = ({
    addGoalHandler,
    visible,
    endGoalHandler
}) => {
    const [goalText, setGoalTextVal] = useState("");
    function goalInputHandler(enteredText) {
        setGoalTextVal(enteredText);
    };
    function addGoalHandlerFun() {
        console.log("sdfsdfsdfsdfsdf");
        addGoalHandler(goalText);
        setGoalTextVal("");
    };
    function cancelGoalHandlerFun() {
        endGoalHandler();
    };
    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>
            <Image style={styles.image} source={require("../assets/images/goal.png")}/> 
            {/* we can use import also to import images  */}
                <TextInput value={goalText} style={styles.textInput} placeholder='Your course goal!'
                    onChangeText={goalInputHandler} // if we use goalInputHandler() then it will call at the time of render which is wrong
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button color={"#b180f0"} disabled={goalText===""} title='Add Goal' onPress={addGoalHandlerFun} /></View>

                    <View style={styles.button}><Button color="#f31282" title='Cancel' onPress={cancelGoalHandlerFun} /></View>
                </View>

            </View>
        </Modal>
    );
}
export default GoalInput;
const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor:'#311b6b',
        justifyContent: 'center',
        alignItems: 'center',
       // marginBottom: 24,
        padding:16,
        //borderBottomWidth: 1,
        // borderBottomColor: '#cccccc',
        flex: 1
    },
    image:{
        width:100,
        height:100,
        margin:20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor:"#e4d0ff",
        width: "100%",
        color:"#120438",
        borderRadius:6,
        //marginRight: 8,
        padding: 16,

    },
    buttonContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop:18
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
})
