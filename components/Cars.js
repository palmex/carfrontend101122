// import statements 
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React from "react";

// define component 

export default class Cars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stateBool: true,
            buttonTitle: "Click Me!",
            buttonColor: this.props.buttonColor,
            make: "",
            model: "",
            year: "",
            odometer: "",
            data:[]
        }
        this.getCars = this.getCars.bind(this);
    }

    doSomething = () => {
        if (this.state.stateBool) {
            this.setState({ buttonTitle: "Clicked" })
        }
        else {
            this.setState({ buttonTitle: "Click Me!" })
        }
        this.setState({ stateBool: !this.state.stateBool })
        console.log(this.props.buttonColor, "Button Pressed: ", this.state.stateBool)
    }

    onFormSubmit = () =>{
        console.log("user input:", this.state)
        // send data to our backend

        if (this.state.model === ""){
            alert('Please enter Model Type')
            return
        }

        if (isNaN(this.state.year)){
            alert('Please enter valid year')
            return
        }

        let carBody = {
            "make":this.state.make,
            "model":this.state.model,
            "year":this.state.year,
            "odometer":this.state.odometer
        }

        createNewCar(carBody)

    }

    // async componentDidMount(){
    //     const response =  await fetchCars();
    //     this.setState({data:response})
    // }

   async getCars(){

        const response =  await fetchCars()
        console.log(response)
        this.setState({data:response})
        return
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.title}> New Cars Submission Form</Text>

                    <Text> Make</Text>
                    <TextInput
                        style={styles.textinput}
                        defaultValue={this.state.make}
                        onChangeText={(e) => this.setState({ make: e })}
                    ></TextInput>


                    <Text> Model</Text>
                    <TextInput
                        style={styles.textinput}
                        defaultValue={this.state.model}
                        onChangeText={(e) => this.setState({ model: e })}
                    ></TextInput>


                    <Text> Year</Text>
                    <TextInput
                        style={styles.textinput}
                        defaultValue={this.state.year}
                        onChangeText={(e) => this.setState({ year: e })}
                    ></TextInput>


                    <Text> Odometer</Text>
                    <TextInput 
                        style={styles.textinput}
                        defaultValue={this.state.odometer}
                        onChangeText={(e) => this.setState({ odometer: e })}
                    ></TextInput>

                    <Button title="Create" onPress={this.onFormSubmit}></Button>
                </View>
                <Button title="Get All" onPress={this.getCars} ></Button>

                {this.state.data.map((car) => <Text key={car.car_id}>{car.make} {car.model} -  {car.year} with {car.odometer} miles on it. CarId({car.car_id})  </Text> )}
          
                {/* <Button title={this.state.buttonTitle} onPress={this.doSomething} color={this.state.buttonColor}></Button> */}
            </View>
        )
    }
}


async function fetchCars() {
    // dispatch(companiesLoading(true));
  
    let headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': 'http://localhost:3000/*',
      'Accept': "application/json",
      'admin': "true"
    }
    // const headers = 
    return fetch('http://localhost:3000/' + 'cars/all',{
      method: 'GET',
      // mode: 'cors',
      withCredentials: true,
      // mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': 'http://localhost:3000/*',
        'Accept': "application/json",
        'admin':'true'
      }
    })
        .then(response => {
            if (response.ok) {
                
                return response.json();
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
  }


async function createNewCar(carDetails){
    let reqBody = JSON.stringify(carDetails)
    console.log(reqBody)

    return fetch('http://localhost:3000/' + 'cars/new', {
        method: 'POST',
        withCredentials: true,
        headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",
                "Access-Control-Allow-Headers":"*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Origin": "http://localhost:3000/*"
        },
        body: JSON.stringify(carDetails)

    }).then( response => {
        if (response.ok){
            const newCar = response.json()
            console.log(newCar)
            return newCar
        }
        else {
            var error = new Error('Error ' + response.status + ':' + response.statusText)
            error.response = response
            return error 
        }
    },
    error => {
        var errmess = new Error(error.message)
        throw errmess
    }
    )
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
    textinput: {
        backgroundColor: "white",
        padding: "2px",
        margin: "15px"
    }
})