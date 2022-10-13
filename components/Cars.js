// import statements 
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React from "react";

// define component 

export default class Cars extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            stateBool: true,
            buttonTitle: "Click Me!",
            buttonColor: this.props.buttonColor, 
            make: "", 
            model: "", 
            year: "", 
            odometer: ""
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
        
        console.log(this.props.buttonColor, "Button Pressed: ", this.state.stateBool)
    }

    render(){
        console.log("make state value:", this.state.make)
        return(
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.title}> New Cars Submission Form</Text>

                    <Text> Make</Text>
                    <TextInput 
                        style={styles.textinput}
                        defaultValue={this.state.make}
                        onChangeText={(e) => this.setState({make: e})}
                    ></TextInput>


                    <Text> Model</Text>
                    <TextInput style={styles.textinput}></TextInput>


                    <Text> Year</Text>
                    <TextInput style={styles.textinput}></TextInput>


                    <Text> Odometer</Text>
                    <TextInput style={styles.textinput}></TextInput>

                    <Button title="Create"></Button>
                </View>
            {/* <Button title={this.state.buttonTitle} onPress={this.doSomething} color={this.state.buttonColor}></Button> */}
            </View>
        )
    }
}


// styling 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: "5px",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    form: {
        padding: "5px",
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        fontSize: "25px",
        margin: "10px"
      },
      textinput:{
        backgroundColor: "white",
        padding: "2px",
        margin: "15px"
      }
})