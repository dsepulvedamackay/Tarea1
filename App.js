import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ImageBackground, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}


class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
    
  };

  exit = () => {
    Alert.alert(
      'Salir',
      '¿Seguro de quieres salir?',
      [
        {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Si', onPress: () => this.props.navigation.goBack() },
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
       <ImageBackground
        style={ styles.container}
        source={require("./img/backgound.png")}>

        <Image source={require("./img/Original-Logo.png")}
           style={styles.logo}
          />

          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Usuario"
          />
          <TextInput
            secureTextEntry
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Contraseña"
          />
          <Button title="Entrar" 
            onPress={() => this.props.navigation.navigate('Home')}>
          </Button>

          <Button title="Salir" 
            onPress={() => this.exit()}>
          </Button>

        </ImageBackground>

     
    );
  }
}


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  
  render() {
    return (
      <View>
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Login: {
      screen: LoginScreen,
    },
  },
  {
    initialRouteName: 'Login',
  }
);



const styles = StyleSheet.create({
  container: {
    width: undefined,
    height: undefined,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    paddingRight: 10,
    paddingLeft: 10,
    height: '7%',
    width: '70%',
    marginTop: '5%',
    backgroundColor: 'white'
  },
  logo: {
    width: '70%',
    height: '30%',
  },
  
});
