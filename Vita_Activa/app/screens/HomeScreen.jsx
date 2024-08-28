import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {

  const doctors = [
    { id: '1', name: 'Dra. Olivia', specialty: 'Endocrinologista', rating: 5, reviews: 60 },
    { id: '2', name: 'Dr. Alexandre', specialty: 'Neurologista', rating: 4.5, reviews: 40 },
    { id: '3', name: 'Dr. Sophia', specialty: 'Cardiologista', rating: 5, reviews: 150 },
    { id: '4', name: 'Dr. Daniel', specialty: 'Dermatologista', rating: 4.8, reviews: 90 },
  ];

  const renderDoctor = ({ item }) => (
    <View style={styles.doctorCard}>
      <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.doctorImage} />
      <View style={styles.doctorInfo}>
        <Text style={styles.doctorName}>{item.name}</Text>
        <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{item.rating} </Text>
          <FontAwesome5 name="star" size={14} color="#007bff" />
          <Text style={styles.reviews}>  {item.reviews}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.likeButton}>
        <Ionicons name="heart-outline" size={24} color="#007bff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/40' }} // Placeholder para imagem do usuário
          style={styles.profileImage}
        />
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Olá, Seja Bem Vindo</Text>
          <Text style={styles.userName}>John Doe</Text>
        </View>
        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={24} color="#007bff" />
          <MaterialIcons name="settings" size={24} color="#007bff" style={styles.settingsIcon} />
        </View>
      </View>

      {/* Menu de Navegação */}
      <View style={styles.navigationMenu}>
        <TouchableOpacity style={styles.menuButton}>
          <FontAwesome5 name="stethoscope" size={24} color="#007bff" />
          <Text style={styles.menuButtonText}>Médicos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="heart-outline" size={24} color="#007bff" />
          <Text style={styles.menuButtonText}>Favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="pricetag-outline" size={24} color="#007bff" />
          <Text style={styles.menuButtonText}>Descontos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="calendar-outline" size={24} color="#007bff" />
          <Text style={styles.menuButtonText}>Agendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="gift-outline" size={24} color="#007bff" />
          <Text style={styles.menuButtonText}>Bônus</Text>
        </TouchableOpacity>
      </View>

      {/* Calendário e Horários */}
      <View style={styles.calendarContainer}>
        <View style={styles.calendar}>
          {['9 SEG', '10 TER', '11 QUA', '12 QUI', '13 SEX', '14 SAB'].map((day, index) => (
            <View key={index} style={styles.calendarDay}>
              <Text style={styles.calendarText}>{day}</Text>
            </View>
          ))}
        </View>
        <View style={styles.schedule}>
          <Text style={styles.scheduleTime}>10 AM</Text>
          <View style={styles.appointmentCard}>
            <Text style={styles.appointmentDoctor}>Dr. Olivia</Text>
            <Text style={styles.appointmentSpecialty}>Endocrinologista</Text>
            <Ionicons name="checkmark-circle" size={24} color="#007bff" />
          </View>
        </View>
      </View>

      {/* Lista de Médicos */}
      <FlatList
        data={doctors}
        renderItem={renderDoctor}
        keyExtractor={item => item.id}
        style={styles.doctorList}
      />

      {/* Barra de Navegação Inferior */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="home-outline" size={28} color="#007bff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="chatbubble-outline" size={28} color="#007bff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="calendar-outline" size={28} color="#007bff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="person-outline" size={28} color="#007bff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  welcomeContainer: {
    flex: 1,
    marginLeft: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: '#6c757d',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsIcon: {
    marginLeft: 15,
  },
  navigationMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  menuButton: {
    alignItems: 'center',
  },
  menuButtonText: {
    marginTop: 5,
    color: '#007bff',
    fontSize: 12,
  },
  calendarContainer: {
    backgroundColor: '#e7f1ff',
    padding: 15,
    borderRadius: 10,
  },
  calendar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  calendarDay: {
    alignItems: 'center',
  },
  calendarText: {
    color: '#007bff',
    fontSize: 12,
  },
  schedule: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  scheduleTime: {
    fontSize: 14,
    color: '#6c757d',
  },
  appointmentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    padding: 10,
    backgroundColor: '#f0f4ff',
    borderRadius: 10,
  },
  appointmentDoctor: {
    fontSize: 16,
    color: '#007bff',
  },
  appointmentSpecialty: {
    fontSize: 14,
    color: '#6c757d',
  },
  doctorList: {
    marginTop: 20,
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f4ff',
    borderRadius: 10,
    marginBottom: 10,
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  doctorInfo: {
    flex: 1,
    marginLeft: 10,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#6c757d',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    fontSize: 14,
    color: '#007bff',
  },
  reviews: {
    fontSize: 12,
    color: '#6c757d',
  },
  likeButton: {
    padding: 5,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#e7f1ff',
    padding: 10,
    borderRadius: 20,
    marginVertical: 10,
  },
  navButton: {
    alignItems: 'center',
  },
});

