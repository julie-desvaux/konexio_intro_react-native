
import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Image, 
  ActivityIndicator, 
  Button, 
  Alert, 
  Vibration } from 'react-native';
import { WebView } from 'react-native-webview';

class App extends Component {
  buttonAlert = () =>{
    Vibration.vibrate(600);
    Alert.alert(
      "Button Alert",
      "You're click",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Exo 1</Text>
        <Text style={styles.text1}>Galla patre Constantini e Massa quadriennio Tuscos quoque quoque cum.</Text>
        <Text style={styles.text2}>Ferri respondeat quisque quasi quisque in facit amicum nullam alteram.</Text>
        <Text style={styles.text3}>Bella adsimulata ut iactitant profecto primo severitate a multiplicantes in.</Text>
        <Image 
          source={require('./assets/konexio-logo_1.png')} 
        />
        <Image
          source={{ uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png' }}
          style={{ height: 100 }} 
        />
        <Button 
          title={"Click here"} 
          onPress={this.buttonAlert} 
        />

        <WebView source={{ uri: 'https://www.konexio.eu/' }} style={styles.webviewLink}/>
        <ActivityIndicator size="small" color="#0000ff" />
        
                
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  title: {
    paddingTop: 30,
    fontSize: 50,
    textDecorationLine: "underline",
    textAlign: "center"
  },
  text1: {
    fontSize: 30,
    paddingVertical: 80,
  },
  text2: {
    textAlign: 'center',
    paddingVertical: 80,
  },
  text3: {
    fontWeight: 'bold',
    paddingVertical: 80,
  },
  webviewLink: {
    width: 400,
    height: 600
  }
});

export default App;