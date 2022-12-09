import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch,useSelector } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";

import { setDestination, selectDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const destination = useSelector(selectDestination)

  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-center py-5 text-xl">Good Morning, Sukhbir</Text>
      <View className="border-t border-gray-200 flex-shrink">
        <View>
          <GooglePlacesAutocomplete
            styles={{
              container: {
                flex: 0,
                paddingTop: 20,
                backgroundColor: "white",
              },
              textInput: {
                backgroundColor: "#DDDDDF",
                borderRadius: 0,
                fontSize: 18,
              },
              textInputContainer: {
                paddingHorizontal: 20,
                paddingBottom: 0,
              },
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            minLength={2}
            fetchDetails={true}
            enablePoweredByContainer={false}
            returnKeyType={"search"}
            placeholder="Where to?"
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: "en",
            }}
          />
        </View>
        <NavFavourites />
      </View>
      <View className="flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100">
        <TouchableOpacity
          className="flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full items-center"
          onPress={() => navigation.navigate("RideOptionsCard")}
          disabled={!destination}
        >
          <Ionicons name="car-outline" size={25} color="white" />
          <Text className="text-white text-center">Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row flex w-24 px-4 py-3 rounded-full items-center space-x-1">
          <Ionicons name="fast-food-outline" size={25} color="black" />
          <Text className="text-black text-center">Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;
