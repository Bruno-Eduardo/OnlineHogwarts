import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './Login';
import Home from './Home';
import Details from './Details';
import GreatHall from './GreatHall';
import CommonRoom from './CommonRoom';
import Spells from './Spells';
import HeaderWithSpell from '../components/HeaderWithSpell';

const Stack = createNativeStackNavigator();

const HeaderWithSpells = () => {
  return (
    <View style={{height: 8}}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: '#7711AA'}}>
        Spells
      </Text>
    </View>
  );
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerTitle: props => <HeaderWithSpell />}}
        />
        <Stack.Screen
          name="GreatHall"
          component={GreatHall}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CommonRoom"
          component={CommonRoom}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Spells"
          component={Spells}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
