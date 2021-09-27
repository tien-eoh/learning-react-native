import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export const SplashSCreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        source={require('../images/Pattern.png')}
      />
      <View style={[styles.background, styles.view]}>
        <Image style={styles.logo} source={require('../images/Logo.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 188,
    height: 203,
  },
});
