import React from 'react';
import {StyleSheet} from 'react-native';
import {ContactDetail} from './src/screens/ContactDetail';
import {ContactList} from './src/screens/ContactList';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ContactList"
          component={ContactList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ContactDetail"
          component={ContactDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  viewSpace: {
    backgroundColor: '#F7F7FC',
    height: 32,
  },
});

export default App;
