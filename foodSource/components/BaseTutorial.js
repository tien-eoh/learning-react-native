import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Colors} from '../configs/colors';
import {Fonts} from '../configs/fonts';

export const BaseTutorial = props => {
  const onPressNext = () => {
    Alert.alert('hihi');
  };
  return (
    <View style={styles.items}>
      {props.photo}
      <Text style={styles.bigText}>{props.bigText}</Text>
      <Text style={styles.smallText}>{props.smallText}</Text>
      <TouchableOpacity onPress={onPressNext}>
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
  items: {
    alignItems: 'center',
  },
  button: {
    width: 157,
    height: 57,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  next: {
    fontFamily: Fonts.BenBold,
    fontSize: 16,
    color: Colors.White,
  },
  bigText: {
    fontFamily: Fonts.BenBold,
    fontSize: 22,
    textAlign: 'center',
    lineHeight: 29,
    marginBottom: 20,
  },
  smallText: {
    fontFamily: Fonts.BenBook,
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
  },
});
