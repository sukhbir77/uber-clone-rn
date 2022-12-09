import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { HomeIcon, BriefcaseIcon } from "react-native-heroicons/solid";

const dataFlat = [
  {
    id: "234",
    icon: "home",
    location: "Home",
    destination: "128 street, Surrey, BC",
  },
  {
    id: "787",
    icon: "briefcase",
    location: "Work",
    destination: "Vancouver, BC, Canada",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={dataFlat}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View className="bg-gray-500" style={{ height: 0.5 }} />
      )}
      renderItem={({ item }) => (
        <TouchableOpacity className="flex-row items-center p-5">
          {item.icon == "home" ? (
            <>
              <View className="mr-4 rounded-full bg-gray-300 p-3">
                <HomeIcon size={18} color="white" />
              </View>
              <View>
                <Text className="font-semibold text-lg">{item.location}</Text>
                <Text className="text-gray-500">{item.destination}</Text>
              </View>
            </>
          ) : (
            <>
              <View className="mr-4 rounded-full bg-gray-300 p-3">
                <BriefcaseIcon size={18} color="white" />
              </View>
              <View>
                <Text className="font-semibold text-lg">{item.location}</Text>
                <Text className="text-gray-500">{item.destination}</Text>
              </View>
            </>
          )}
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
