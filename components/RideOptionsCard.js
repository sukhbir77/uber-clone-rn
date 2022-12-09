import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "./../slices/navSlice";

const dataFlat = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-452",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-242",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView className="bg-white flex-grow">
      <View>
        <TouchableOpacity
          className="absolute top-3 left-5 p-3 z-50 rounded-full"
          onPress={() => navigation.navigate("NavigateCard")}
        >
          <Ionicons name="arrow-back-outline" size={25} color="black" />
        </TouchableOpacity>
        <Text className="text-center py-5 text-xl">
          Select A Ride - {travelInformation?.distance?.text}
        </Text>
      </View>
      <FlatList
        data={dataFlat}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            className={`flex-row items-center justify-between px-10 ${
              item.id === selected?.id && "bg-gray-200"
            }  `}
            onPress={() => setSelected(item)}
          >
            <Image
              style={{ width: 100, height: 100, resizeMode: "contain" }}
              source={{
                uri: item.image,
              }}
            />
            <View className="-ml-6">
              <Text className="text-xl font-semibold">{item.title}</Text>
              <Text>{travelInformation?.duration?.text} Travel Time</Text>
            </View>
            <Text className="text-xl">
              {new Intl.NumberFormat("en-gb", {
                style: "currency",
                currency: "CAD",
              }).format(
                (travelInformation?.duration?.value *
                  SURGE_CHARGE_RATE *
                  item.multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View className="mt-auto border-t border-gray-200" >
        <TouchableOpacity
          className={`bg-black py-3 m-4 rounded-md ${
            !selected && "bg-gray-300"
          }`}
          disabled={!selected}
        >
          <Text className="text-center text-white text-xl">
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
