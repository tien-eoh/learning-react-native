import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
<<<<<<< Updated upstream
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Colors} from './source/configs/colors';
// import {SplashSCreen} from './source/components/splashScreen';
=======
import {NavigationContainer} from '@react-navigation/native';

import {SplashScreen} from './foodSource/screens/onboarding/SplashScreen';
import {TutorialFirst} from './foodSource/screens/onboarding/Tutorial1';
import {TutorialSecond} from './foodSource/screens/onboarding/Tutorial2';
>>>>>>> Stashed changes

const Stack = createNativeStackNavigator();

const FoodApp = () => {
  return (
<<<<<<< Updated upstream
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

=======
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TutorialFirst"
          component={TutorialFirst}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TutorialSecond"
          component={TutorialSecond}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

>>>>>>> Stashed changes
export default FoodApp;
