import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function InitialScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/images/svgviewer-png-output.png')} style={styles.logo} />
      </View>
      <View style={styles.subtitle}>
        <Image source={require('../../assets/images/vita_activa_name.png')} style={styles.sub} />
      </View>
      <Text style={styles.description}>
        "Revolucione o cuidado com a saúde, tome decisões informadas, personalize seus cuidados e viva de maneira mais saudável."
      </Text>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupButtonText}>Inscreva-Se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    marginBottom: 30,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  subtitle: {
    marginBottom: 30,
  },
  sub: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 50,
  },
  description: {
    textAlign: 'center',
    color: '#000',
    fontSize: 14,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#2260FF',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 15,
    width: 207,
    height: 45,

  },
  loginButtonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: "center"
  },
  signupButton: {
    backgroundColor: '#A0C4FF',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: 207,
    height: 45,
  },
  signupButtonText: {
    color: '#2260FF',
    fontSize: 20,
    textAlign: "center",
  },
});
