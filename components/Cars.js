// import statements 
import { StyleSheet, Text, View, Button } from 'react-native';
import React from "react";

// define component 

export default class Cars extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            stateBool: true,
        }
    }

    doSomething = () => {
        console.log("Button Pressed")
    }



    render(){
        return(
            <View style={styles.container}>
            <Text> This is our Cars Component</Text>
            <Button title="Click Me!" onPress={this.doSomething}></Button>
            </View>
        )
    }




}


// styling 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
})