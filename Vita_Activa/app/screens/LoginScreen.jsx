// app/LoginScreen/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Bem Vindo</Text>
      <Text style={styles.welcomeText}>Seja bem-vindo à Medicina Preditiva</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="example@example.com"
        value={email}
        onChangeText={setEmail}
      />

<Text style={styles.label}>Senha</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="************"
          value={password}
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.eyeButton} onPress={() => setShowPassword(!showPassword)}>
        <Icon 
            name={showPassword ? 'eye' : 'eye-off'} 
            size={24} 
            color="#000" 
            style={styles.eyeIcon} 
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => { /* lógica de recuperação de senha */ }}>
        <Text style={styles.forgotPassword}>Esqueceu a Senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={() => { /* lógica de login */ }}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Ou faça login com terceiros</Text>
      
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../../assets/images/google.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../../assets/images/facebook.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../../assets/images/lock.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

       <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Não possui uma conta? 
          <Text style={styles.signupLink} onPress={() => navigation.navigate('Signup')}> Inscreva-se</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'semibold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#2260FF',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'semibold',
    color: '#2260FF',
    textDecorationStyle: 'solid',
    marginBottom: 5,
  },
  welcomeText: {
    fontSize: 12,
    color: '#070707',
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ECF1FF',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    width: 320,
    height: 45,
    fontSize: 16,
    textDecorationColor: '#809CFF',
    backgroundColor: '#ECF1FF',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ECF1FF',
    borderRadius: 15,
    marginBottom: 10,
    width: 320,
    height: 45,
    backgroundColor: '#ECF1FF',
  },
  passwordInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  eyeButton: {
    padding: 10,
  },
  eyeIcon: {
    fontSize: 24,
    color: '#000',
  },
  forgotPassword: {
    color: '#2260FF',
    textAlign: 'right',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#2260FF',
    padding: 15,
    borderRadius: 30,
    width: 207,
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
   socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    alignItems: 'center',
  },
  socialButton: {
    marginHorizontal: 5,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  signupText: {
    textAlign: 'center',
    fontSize: 16,
  },
  signupLink: {
    color: '#2260FF',
    marginLeft: 5,
  },
});
