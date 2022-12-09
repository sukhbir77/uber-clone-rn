import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Map from "../components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Bars3Icon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";

const Stack = createNativeStackNavigator();

const MapScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        className="absolute top-16 left-8 bg-gray-100 z-50 p-3 rounded-full shadow-lg"
        onPress={() => navigation.navigate("Home")}
      >
        <Bars3Icon size={25} color="black" />
      </TouchableOpacity>
      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2 ">
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
