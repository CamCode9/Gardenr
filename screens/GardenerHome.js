import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { auth, db } from '../firebase2';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigation } from '@react-navigation/core';
import { collection, addDoc } from 'firebase/firestore';

const GardenerHome = () => {
  const navigation = useNavigation();

  const handleChat = () => {
    navigation.navigate('GardenerMessages');
  };
  return (
    <View>
      <Text>GARDENER HOME</Text>
      <TouchableOpacity onPress={handleChat} style={styles.button}>
        <Text style={styles.buttonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GardenerHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'green',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
