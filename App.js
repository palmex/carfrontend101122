import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Cars from './components/Cars'

export default function App() {
  console.log('Hello!')
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Car Maintentance Portal</Text>
      <Cars></Cars>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white', 
    fontSize: '36px',
    backgroundColor: '#00f',
    alignItems: 'center',
    padding: '30px',
    margin: '30px',
    justifyContent: 'center',
  },
  button: {
    color: 'white', 
    fontSize: '36px',
    backgroundColor: '#00f',
    alignItems: 'center',
    padding: '30px',
    margin: '30px',
    justifyContent: 'center',
  },
});
