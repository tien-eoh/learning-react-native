import React from 'react';
<<<<<<< Updated upstream:AwesomeProject/FoodApp.js
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
=======
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
>>>>>>> Stashed changes:foodSource/components/BaseTutorial.js
import LinearGradient from 'react-native-linear-gradient';

import {Colors} from './source/configs/colors';
// import {SplashSCreen} from './source/components/splashScreen';

<<<<<<< Updated upstream:AwesomeProject/FoodApp.js
const FoodApp = () => {
  return (
    <View style={styles.container}>
      <TutorialFirst />
    </View>
  );
};

const TutorialFirst = () => {
  const onPressNext = () => {
    Alert.alert('hihi');
  };
  return (
    <View style={styles.items}>
      <Image
        style={styles.image}
        source={require('./source/images/Illustartion.png')}
      />
      <Image source={require('./source/images/Text.png')} />
      <TouchableOpacity onPress={onPressNext}>
=======
export const BaseTutorial = props => {
  return (
    <View style={styles.items}>
      {props.photo}
      <Text style={styles.bigText}>{props.bigText}</Text>
      <Text style={styles.smallText}>{props.smallText}</Text>
      <TouchableOpacity onPress={props.onPressNext}>
>>>>>>> Stashed changes:foodSource/components/BaseTutorial.js
        <LinearGradient
          start={{x: 0.0, y: 0.0}}
          end={{x: 1.0, y: 0.0}}
          colors={[Colors.PrimaryLight, Colors.Primary]}
          style={styles.button}>
          <Text style={styles.next}>Next</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  items: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 434,
  },
  button: {
    width: 157,
    height: 57,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  next: {
    fontWeight: '400',
    fontSize: 16,
    color: Colors.White,
  },
});

export default FoodApp;
