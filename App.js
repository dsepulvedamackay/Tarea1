import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ImageBackground, Image, Vibration } from 'react-native';
import { StackNavigator } from 'react-navigation';

//Usar navegador como pantalla inicial

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

// Pantalla de Login

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
    
  };

  constructor(props) {
    super(props);
    this.state = { user: ''};
  } 

  exit = () => {
    const DURATION = 1000
    Alert.alert(
      'Salir',
      '¿Seguro que quieres salir?',
      [
        {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Si', onPress: () => Vibration.vibrate(DURATION) },
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
            onChangeText={user => this.setState({ user })}
            value={this.state.user}
            placeholder="Usuario"
          />
          <TextInput
            secureTextEntry
            style={styles.textInput}
            placeholder="Contraseña"
          />

          <View style={styles.button1}>
          <Button title="Entrar" 
            color='#F06292'
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Home', {user: this.state.user})}>
          </Button>
          </View>

          <View style={styles.button2}>
          <Button title="Salir" 
            onPress={() => this.exit()}>
          </Button>

          </View>
        </ImageBackground>

     
    );
  }
}

// Pantalla home 

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Hola!',
  };
  
  render() {
    const { params } = this.props.navigation.state;
    const user = params ? params.user : null;
    return (
      <View>
        <Text style={{marginTop: '25%',fontSize: 40, justifyContent: 'center', alignSelf: 'center',}}>{JSON.stringify(user)}</Text>
      </View>
    );
  }
}

//Manejo de paginas con el navegador

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

//Estilos

const styles = StyleSheet.create({
  container: {
    width: undefined,
    height: undefined,
    flex: 1,

  },
  textInput: {
    paddingRight: 10,
    paddingLeft: 10,
    height: '7%',
    width: '70%',
    marginBottom: '5%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  logo: {
    marginTop: '15%',
    width: '70%',
    height: '30%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
 
  button1: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: '12%',
    width: '70%',
    marginBottom: '5%',
  },
  
  button2: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: '12%',
    width: '40%',
    marginTop: '20%',
  },
  
});
