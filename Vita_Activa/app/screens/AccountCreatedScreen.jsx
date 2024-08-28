import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AccountCreatedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Botão de Voltar */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={30} color="blue" />
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>Conta Criada Com Sucesso</Text>

      {/* Imagem */}
      <Image
        source={require('../../assets/images/bendy-men-shake-hands-to-agree-on-a-partnership.gif')}  // Coloque a imagem correspondente na pasta assets/images
        style={styles.image}
        resizeMode="contain"
      />

      {/* Botão para ir para a Tela de Início */}
      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.homeButtonText}>Tela De Início</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007bff',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 400,
    marginBottom: 40,
  },
  homeButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
