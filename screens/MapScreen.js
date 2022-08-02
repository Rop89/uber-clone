import { Text, View } from 'react-native'

import {Icon} from "react-native-elements/dist/icons/Icon"
import { Map } from '../components/Map';
import { NavigateCard } from '../components/NavigateCard';
import React from 'react'
import { RideOptionsCard } from '../components/RideOptionsCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

export const MapScreen  = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')} style={tw`bg-red-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}>
        <Icon name="menu"/>
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map/>
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown:false,
            }}
          />
           <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown:false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}
