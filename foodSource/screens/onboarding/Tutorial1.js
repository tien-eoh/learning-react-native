import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {BaseTutorial} from '../../components/BaseTutorial';

export const TutorialFirst = () => {
  return (
    <View style={styles.container}>
      <BaseTutorial
        photo={
          <Image
            style={styles.imageIll}
            source={require('../../images/Illustartion.png')}
          />
        }
        bigText={'Find your Comfort\nFood here'}
        smallText={
          'Here You Can find a chef or dish for every\ntaste and color. Enjoy!'
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageIll: {
    width: '100%',
    height: 434,
  },
});
