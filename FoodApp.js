import React from 'react';
import {StyleSheet, View} from 'react-native';

import {TutorialSecond} from './foodSource/screens/onboarding/Tutorial2';

const FoodApp = () => {
  return (
    <View style={styles.container}>
      <TutorialSecond />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FoodApp;
