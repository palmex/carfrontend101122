// import statements 
import { StyleSheet, Text, View, Button } from 'react-native';
import React from "react";

// define component 

export default class Cars extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            stateBool: true,
            buttonTitle: "Click Me!"
        }
    }

    doSomething = () => {
        if(this.state.stateBool){
            this.setState({buttonTitle: "Clicked"})
        }
        else{
            this.setState({buttonTitle: "Click Me!"})
        }
        this.setState({stateBool: !this.state.stateBool})
        

        console.log("Button Pressed: ", this.state.stateBool)
    }

    render(){
        console.log("render")
        return(
            <View style={styles.container}>
            <Text> This is our Cars Component</Text>
            <Button title={this.state.buttonTitle} onPress={this.doSomething}></Button>
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