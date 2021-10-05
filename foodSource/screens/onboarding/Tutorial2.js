import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {BaseTutorial} from '../../components/BaseTutorial';

export const TutorialSecond = () => {
  return (
    <View style={styles.container}>
      <BaseTutorial
        photo={
          <Image
            style={styles.imageIll}
            source={require('../../images/Ill2.png')}
          />
        }
        bigText={'Food Ninja is Where Your\nComfort Food Lives'}
        smallText={'Enjoy a fast and smooth food delivery at\nyour doorstep'}
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
