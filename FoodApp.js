import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {SplashScreen} from './foodSource/screens/onboarding/SplashScreen';
import {TutorialFirst} from './foodSource/screens/onboarding/Tutorial1';
import {TutorialSecond} from './foodSource/screens/onboarding/Tutorial2';

const Stack = createNativeStackNavigator();

const FoodApp = () => {
  return (
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

export default FoodApp;
