import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import {GOOGLE_MAPS_APIKEY} from "@env";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {Icon} from "react-native-elements"
import { NavFavourites } from './NavFavourites';
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { setDestination } from '../slices/navSlice';
import tw from 'tailwind-react-native-classnames';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`bg-gray-100 text-center py-5 text-xl`}>Good Morning,Pi</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <GooglePlacesAutocomplete
        placeholder='Where to?'
        styles={toInputBoxStyles}
        debounce={400}
        returnKeyType={"search"}
        minLength={2}
        enablePoweredByContainer={false}
        query={{
            key:GOOGLE_MAPS_APIKEY,
            language:"en",
        }}
        fetchDetails
        onPress={(data, details = null) => {
            dispatch(
                setDestination({
                location: details.geometry.location,
                description: data.description,
            }))
            navigation.navigate('RideOptionsCard');
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        />
        <NavFavourites/>
      </View>
      <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity onPress={()=>navigation.navigate('RideOptionsCard')}style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
          <Icon name="car" type="font-awesome" color="white" size={16}></Icon>
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
          <Icon name="fast-food-outline" type="ionicon" color="black" size={16}></Icon>
          <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        paddingTop: 20,
        flex:0,
    },
    textIput:{
        backgroundColor:"#DDDDDF",
        borderRadius: 0,
        fontSize:18,
    },
    textInputContainer:{
        paddingHorizontal: 20,
        paddingBotto:0,
    }
})

