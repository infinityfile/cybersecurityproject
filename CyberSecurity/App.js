import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, Image, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Leitura" component={Leitura} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      Alert.alert('Login efetuado com sucesso');
      navigation.navigate('Inicio');
    } else {
      Alert.alert('Erro', 'E-mail ou senha inválida!');
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.ibb.co/q1nCD2s/image.png' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://i.ibb.co/syCmR0D/Cyber-Security-265x300.png' }}
          style={styles.logo}
        />
        <Text style={styles.boldText}>Faça seu login na plataforma</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#ADADAD"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#ADADAD"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        
        <Text style={styles.senha}>Esqueci a senha ou e-mail</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.bottomContainer}>
          <View style={styles.registrarContainer}>
            <Text style={styles.registrar}>Não tem uma conta?</Text>
            <Text style={styles.registrarblue}>Registre-se</Text>
          </View>
        </View>

        <Image
          source={require('./png/Sign_in_with_Google_Button-removebg-preview.png')}
          style={styles.image}
        />
        <Image source={require('./png/image.png')} style={styles.image2} />
      </View>
    </ImageBackground>
  );
};

const Inicio = () => {
  const navigation = useNavigation();

  const handleNavigateLeitura = () => {
    navigation.navigate('Leitura');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.ibb.co/q1nCD2s/image.png' }}
      style={styles.backgroundImage}
    >
      <Image
        source={{ uri: 'https://i.ibb.co/syCmR0D/Cyber-Security-265x300.png' }}
        style={styles.logo2}
      />

      <Text style={styles.bemvindo}>Bem vindo {'\n'}de Volta!</Text>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateLeitura}>
          <Image
            source={require('./png/MOBILE_PROJETO___1_-removebg-preview.png')}
            style={styles.atividades}
          />
        </TouchableOpacity>

        <Text style={styles.textotela2}>Quer ter acesso a nossos recursos exclusivos em primeira mão? Clique aqui</Text>
      </View>
    </ImageBackground>
  );
};

const Leitura = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://i.ibb.co/q1nCD2s/image.png' }}
      style={styles.backgroundImage}>
    <View>
    <Image
        source={{ uri: 'https://i.ibb.co/syCmR0D/Cyber-Security-265x300.png' }}
        style={styles.logo3}
      />
      <Image
        source={require('./png/MOBILE_PROJETO___2_-removebg-preview.png')}
        style={styles.felps}
      />
      <Text style={styles.textocomentarios}>Fundamentos da {'\n'}
      Cibersegurança #001
      </Text>
      <Text style={styles.textocomentarios2}>Cibersegurança é a prática proteger ativos de informação tais
      sistemas, computadores e servidores entre outros contra
      ameaças cibernéticas ou ataques maliciosos.
      </Text>
      <Image
        source={require('./png/MOBILE_PROJETO___5_-removebg-preview.png')}
        style={styles.comentarios}
      />
      <View styles={styles.comentarios2}>
      <Image
        source={require('./png/MOBILE_PROJETO___4_-removebg-preview.png')}
        style= {styles.comentarios2}
      />
      </View>

      <View styles={styles.playbutton}>
      <Image
        source={require('./png/play-icon-play-button-with-transparent-background-free-png.png')}
        style= {styles.playbutton}
      />
      </View>

    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({

  playbutton: {
    width: 200,
    height: 150,
    marginTop: -540,
    marginLeft: -10,
    tintColor: 'white',
    alignItems: 'center',
    alignSelf: 'center',
  },

  felps: {
    width: 380,
    height: 180,
    marginTop: 20,
    marginLeft: 0,
  },

  textocomentarios: {
    fontFamily: 'UbuntuMedium',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    marginTop: 15,
    marginLeft: 30,
  },

  textocomentarios2: {
    fontFamily: 'UbuntuMedium',
    color: 'white',
    fontSize: 15,
    marginTop: 15,
    marginLeft: 30,
  },

  comentarios: {
    width: 320,
    height: 200,
    marginTop: -5,
    marginLeft: 25,
  },

  comentarios2: {
    width: 440,
    height: 190,
    marginTop: -192,
    marginLeft: 100,
    tintColor: 'white',
    alignItems: 'center',
    alignSelf: 'center',
  },

  textotela2: {
  fontFamily: 'UbuntuMedium',
  color: 'white',
  fontSize: 15,
  textAlign: 'center',
  },

  atividades: {
    width: 420,
    height: 400,
    marginLeft: 80,
    marginTop: 30,
    tintColor: 'white',
    alignItems: 'center',
    alignSelf: 'center',
    
  },

  logo2: {
    width: 80,
    height: 110,
    marginBottom: 30,
    marginRight: 0,
    marginLeft: 30,
    marginTop: 20,

  },

  logo3: {
    width: 80,
    height: 110,
    marginBottom: -5,
    marginRight: 0,
    marginLeft: 30,
    marginTop: -30,

  },

  bemvindo: {
    fontFamily: 'UbuntuMedium',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 35,
    marginRight: 0,
    marginLeft: 30,
    marginTop: -20,
    marginBottom: 30,

  },

  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 120,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 30,
  },

  boldText: {
    fontFamily: 'UbuntuMedium',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 35,
    alignSelf: 'center',
    marginBottom: 30,
    marginRight: 60,
  },

  inputContainer: {
    marginBottom: 10,
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#343434',
    borderRadius: 40,
    color: 'white',
  },

  button: {
    backgroundColor: '#4287f5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
    marginBottom: 10,
    marginTop: -20,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },

  bottomContainer: {
    marginTop: 20,
    alignItems: 'center',
  },

  senha: {
    fontFamily: 'UbuntuMedium',
    color: 'white',
    fontSize: 15,
    marginBottom: 30,
    marginTop: 0,
    marginRight: 170,
  },

  registrarContainer: {
    flexDirection: 'row',
  },

  registrar: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
    marginTop: -15,
  },

  registrarblue: {
    color: '#12B1D5',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: -15,
   
  },

  image: {
    width: 320,
    height: 50,
    alignSelf: 'center',
    marginTop: 20,
  },

  image2: {
    width: 150,
    height: 100,
    alignSelf: 'center',
    marginBottom: -150,
  },

});

export default App;

