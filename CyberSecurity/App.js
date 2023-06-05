import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, Image, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Linking } from 'react-native';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Leitura" component={Leitura} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="ModoInfantil" component={ModoInfantil} />
        <Stack.Screen name="ajuda" component={ajuda}/>
        <Stack.Screen name="ferramentas" component={ferramentas}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (username === 'User@gmail.com' && password === 'admin') {
      Alert.alert('Login efetuado com sucesso');
      navigation.navigate('Menu');
    } else {
      Alert.alert('Erro', 'E-mail ou senha inválida!');
    }
  };

   const handleRegister = () => {
    navigation.navigate('Cadastro');
  };

  const handleNavigateTogoogle = () => {
    const google = 'https://accounts.google.com/signup/v2/webcreateaccount?biz=false&cc=BR&continue=https%3A%2F%2Fmail.google.com&dsh=S-284732814%3A1686001236130203&flowEntry=SignUp&flowName=GlifWebSignIn&hl=en&service=mail&authuser=0';
    Linking.openURL(google)
      .catch(() => {
        console.log('Falha ao tentar carregar o vídeo');
      });
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
        <Text style={styles.boldText}>Login</Text>

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
            <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.registrarblue}>Registre-se</Text>
            </TouchableOpacity>
          </View>
          
        </View>
        <TouchableOpacity onPress={handleNavigateTogoogle}>
        <Image
          source={require('./png/Sign_in_with_Google_Button-removebg-preview.png')}
          style={styles.image}
        />
        </TouchableOpacity>
        <Image source={require('./png/image.png')} style={styles.image2} />
      </View>

    </ImageBackground>
  );
};


const Menu = () => {

  const handleNavigateModoInfantil = () => {
    navigation.navigate('ModoInfantil');
  };

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

      <View>
        <TouchableOpacity onPress={handleNavigateLeitura}>
          <Image style={styles.atividades1}
            source={require('./png/video.png')}
          />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ferramentas')}>
          <Image style={styles.atividades2}
            source={require('./png/ferramentas.png')}
          />
          </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigateModoInfantil}>
          <Image  style={styles.atividades3}
            source={require('./png/infantil.png')}
          />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ajuda')}>
          <Image style={styles.atividades4}
            source={require('./png/ajuda.png')}
          />
          </TouchableOpacity>

        <Text style={styles.textotela2}>Quer ter acesso a nossos recursos exclusivos em primeira mão? Clique aqui</Text>
      </View>
    </ImageBackground>
  );
};


const Leitura = () => {
	const handleNavigateToVideo = () => {
    const google = 'https://www.youtube.com/watch?v=DuoCd7UEkpc';
    Linking.openURL(google)
      .catch(() => {
        console.log('Failed to open the YouTube video');
      });
  };

  return (
    
    <ImageBackground
      source={{ uri: 'https://i.ibb.co/q1nCD2s/image.png' }}
      style={styles.backgroundImage}>
    <View>
    <Image
        source={{ uri: 'https://i.ibb.co/syCmR0D/Cyber-Security-265x300.png' }}
        style={styles.logo3}
      />
      <TouchableOpacity onPress={handleNavigateToVideo}>
      <Image
        source={require('./png/felps.png')} 
        style={styles.felps} 
      />
      </TouchableOpacity>
      
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
    </View>
    </ImageBackground>
  );
};

const Cadastro = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Nome:', name);
    console.log('E-mail:', email);
    console.log('Senha:', password);

    if (name === '' || email === '' || password === '') {
      Alert.alert('Oops... Algo está faltando =(');
    } else if (password.length > 8) {
      Alert.alert('Oops... A senha deve ter no máximo 8 caracteres.');
    } else {
      Alert.alert('Cadastro concluído com sucesso.');
      navigation.navigate('Menu');
    }
  };

  const [gender, setGender] = useState('');

  const handleSelectMasculino = () => {
  setGender('Masculino');
};

  const handleSelectFeminino = () => {
  setGender('Feminino');
};

  const handleSelectOutro = () => {
  setGender('Outro');
};

const navigation = useNavigation();

  return (

    <ImageBackground
      source={{ uri: 'https://i.ibb.co/q1nCD2s/image.png' }}
      style={styles.backgroundImage}>
      
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.ibb.co/syCmR0D/Cyber-Security-265x300.png' }}
        style={styles.logo5}
      />  

      <Text style={styles.cadastrotext}>Cadastro</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#ADADAD"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#ADADAD"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#ADADAD"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

        <Text style={styles.textogenero}>Gênero</Text>
       <View style={styles.buttonContainer}>
        <TouchableOpacity
    style={[styles.genderButton, gender === 'Masculino' && styles.selectedGenderButton]}
    onPress={handleSelectMasculino}
  >
    <Text style={styles.buttonText}>Masculino</Text>
        </TouchableOpacity>
        <TouchableOpacity
    style={[styles.genderButton, gender === 'Feminino' && styles.selectedGenderButton]}
    onPress={handleSelectFeminino}
  >
    <Text style={styles.buttonText}>Feminino</Text>
       </TouchableOpacity>
       <TouchableOpacity
    style={[styles.genderButton, gender === 'Outro' && styles.selectedGenderButton]}
    onPress={handleSelectOutro}
  >
      <Text style={styles.buttonText}>Outro</Text>
       </TouchableOpacity>
      </View>
      <Text style={styles.selectedGenderText}>Gênero selecionado: {gender}</Text>
      

      <TouchableOpacity style={styles.buttonCadastro} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

    </View>
      </ImageBackground>  

  );
};

const ModoInfantil = ({ navigation }) => {
  navigation.navigate('ModoInfantil');

  return (
    <ImageBackground
      source={{ uri: 'https://i.ibb.co/d4Njymg/infantilbackground.png' }}
      style={styles.infantilbackground}
    >
    <View style={styles.logo4}>
    <Image
          source={require('./png/logoinfantil.png')}
          style={styles.logo4}/>
    </View>
    <View style={styles.textInfantil}>
    <Text style={styles.textInfantil}>Área infantil</Text>
    </View>
    <Image
          source={require('./png/atividadesinfantil.png')}
          style={styles.atividadesinfantil}/>

      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>  
    <Image
          source={require('./png/home.png')}
          style={styles.home}/>
      </TouchableOpacity>
    </ImageBackground>
  
  )
};

const ajuda = () => {
  const navigation = useNavigation();

  return (
   <ImageBackground
      source={{ uri: 'https://i.ibb.co/d4Njymg/infantilbackground.png' }}
      style={styles.infantilbackground}
    >
    <View>
    
    </View>
    </ImageBackground>
  );
};

const ferramentas = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={{ uri: 'https://i.ibb.co/d4Njymg/infantilbackground.png' }}
      style={styles.infantilbackground}
    >
    <View>
    
    </View>
    </ImageBackground>
  );
};



const styles = StyleSheet.create({

    cadastrotext: {
      fontFamily: 'UbuntuMedium',
      color: 'white',
      fontSize: 50,
      alignSelf: 'center',
      marginBottom: 25,
    },

    atividades1: {
      width: 350,
      height: 200,
      flexDirection: 'row',
      paddingBottom: 10,
      marginTop: -20,
      marginBottom: -80,
      alignItems: 'center',
      alignSelf: 'center',
    },

    atividades2: {
      width: 350,
      height: 200,
      paddingBottom: 10,
      marginBottom: -80,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
    },

    atividades3: {
      width: 350,
      height: 200,
      flexDirection: 'row',
      paddingBottom: 10,
      marginBottom: -80,
      alignItems: 'center',
      alignSelf: 'center',
    },

    atividades4: {
      width: 350,
      height: 200,
      paddingBottom: 10,
      marginBottom: 280,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',

    },

  textInfantil: {
    fontSize: 50,
    fontFamily: 'ubuntu',
    color: 'white',
    flexDirection: 'row',
    marginTop: 50,
    alignSelf: 'center',

  },

  infantilbackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  genderButton: {
    backgroundColor: '#4A4548',
    borderRadius: 10,
    padding: 10,
    flex: 1,
    marginRight: 5,
  },

  selectedGenderButton: {
    backgroundColor: '#64B5F6',
  },

  selectedGenderText: {
    textDecorationColor: 'white',
    color: 'white',
    fontSize: 18,
    marginTop: 20,
    marginBottom: -10,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  textogenero: {
    fontFamily: 'UbuntuMedium',
    color: 'white',
    fontSize: 30,
    marginTop: 10,
    marginBottom: 7,
    marginLeft: 3,
    marginRight: 60,
  },

  buttonCadastro: {
    backgroundColor: '#4287f5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
    marginTop: 40,
  },

  felps: {
    width: 380,
    height: 180,
    marginTop: 20,
    marginLeft: -10,
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

  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 30,
  },

  logo2: {
    width: 80,
    height: 110,
    marginRight: 0,
    marginLeft: 30,
    marginTop: 320,
    flexDirection: 'row',

  },

  logo3: {
    width: 80,
    height: 110,
    marginBottom: -5,
    marginRight: 0,
    marginLeft: 30,
    marginTop: -30,
  },

  logo4: {
    width: 230,
    height: 250,
    alignSelf: 'center',
    marginTop: 120,
    flexDirection: 'row'
  },

  logo5: {
    width: 125,
    height: 125,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 80,
  },

  atividadesinfantil: {
    width: 420,
    height: 310,
    marginBottom: 300,
    marginTop: -20,
    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
   },

    home: {
    width: 60,
    height: 60,
    flexDirection: 'row',
    marginTop: -300,
    marginBottom: 200,
    alignItems: 'center',
    alignSelf: 'center',
 
    },

  bemvindo: {
    fontFamily: 'UbuntuMedium',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 35,
    marginRight: 0,
    marginLeft: 30,
    marginTop: 0,
    flexDirection: 'row',


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

  boldText: {
    fontFamily: 'UbuntuMedium',
    color: 'white',
    fontSize: 50,
    marginBottom: 20,
    marginLeft: 5,
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
