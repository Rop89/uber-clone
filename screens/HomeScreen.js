import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { setDestination, setOrigin } from '../slices/navSlice';

import {GOOGLE_MAPS_APIKEY} from "@env";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { NavFavourites } from '../components/NavFavourites';
import NavOptions from '../components/NavOptions';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { useDispatch } from 'react-redux';

export const HomeScreen = () => {
    const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
           <Image 
           style={{
                width:100,
                height:100,
                resizeMode: 'contain',
           }}
           source={{
            uri:"https://links.papareact.com/gzs",
           }}/>
             <GooglePlacesAutocomplete
                placeholder='Where From?'
                debounce={400}
                styles={{
                    container:{
                        flex:0,
                    },
                    textInput:{
                        fontSize:18,
                    }
                }}
                fetchDetails
                returnKeyType={"search"}
                enablePoweredByContainer={false}
                minLength={2}
                onPress={(data, details = null) => {
                    console.log(data, details);
                    dispatch(
                        setOrigin({
                        location: details.geometry.location,
                        description: data.description,
                    }))
                    dispatch(setDestination(null))
                }}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'en',
                }}
                />
           <NavOptions/>
           <NavFavourites/>
        </View>
    </SafeAreaView>
  );
}
