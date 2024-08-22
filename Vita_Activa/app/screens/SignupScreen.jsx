import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <Text style={styles.label}>Nome Completo</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu nome completo"
        value={name}
        onChangeText={setName}
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

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="example@example.com"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Confirmar Email</Text>
      <TextInput
        style={styles.input}
        placeholder="example@example.com"
        value={confirmEmail}
        onChangeText={setConfirmEmail}
      />

      <Text style={styles.label}>Data De Nascimento</Text>
      <TextInput
        style={styles.input}
        placeholder="DD/MM/YYYY"
        value={birthDate}
        onChangeText={setBirthDate}
      />

      <TouchableOpacity style={styles.signupButton} onPress={() => { /* lógica de cadastro */ }}>
        <Text style={styles.signupButtonText}>Inscreva-Se</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Ou inscreva-se com terceiros</Text>
      
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
        <Text style={styles.signupText}>Já possui uma conta? 
          <Text style={styles.signupLink} onPress={() => navigation.navigate('Login')}> Login</Text>
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
  welcomeText: {
    fontSize: 12,
    color: '#070707',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    padding: 10,
    alignSelf: 'flex-start',
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
  signupButton: {
    backgroundColor: '#2260FF',
    padding: 15,
    borderRadius: 30,
    width: 207,
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  signupButtonText: {
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
    marginTop: 10,
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