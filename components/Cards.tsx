import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";

interface Props {
  onPressed: () => void;
}

export const FeaturedCard = ({ onPressed }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPressed}
      className="flex flex-col items-start w-60 h-80 relative"
    >
        {/* BG Images */}
      <Image source={images.japan} className="size-full rounded-2xl" />
      <Image
        source={images.cardGradient}
        className="size-full rounded-2xl absolute bottom-0"
      />
      {/* Rating */}
      <View className="absolute top-5 right-5 flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full">
        <Image source={icons.star} className="size-3.5" />
        <Text className="text-primary-300 text-xs font-rubik-bold ml-1 ">
          4.4
        </Text>
      </View>

      {/* Content */}
      <View className="flex flex-col items-start absolute bottom-5 inset-x-5">
        <Text className="text-xl font-rubik-extrabold text-white" numberOfLines={1}>Modern Apartment</Text>
        <Text className="text-base text-white font-rubik">
            22 W 15th Street NY
        </Text>

      <View className="flex flex-row items-center justify-between w-full">
        <Text className="text-xl font-extrabold text-white">R5 000.00</Text>
        <Image source={icons.heart} className="size-5" />
      </View>
      
      </View>
    </TouchableOpacity>
  );
};

export const Card = ({onPressed} : Props) => {
  return (
    <TouchableOpacity onPress={onPressed} className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative">


        {/* Rating */}
      <View className="flex flex-row items-center px-2 absolute top-5 right-5 bg-white/90 p-1 rounded-full z-50">
        <Image source={icons.star} className="size-2.5" />
        <Text className="text-primary-300 text-xs font-rubik-bold ml-0.5 ">
          4.4
        </Text>
      </View>

      <Image source={images.newYork} className="w-full h-40 rounded-lg"/>

      {/* Content */}
      <View className="flex flex-col mt-2">
        <Text className="text-base font-rubik-bold text-black-300">Cozy Studio</Text>
        <Text className="text-xs text-black-200 font-rubik">
            22 W 15th Street NY
        </Text>

      <View className="flex flex-row mt-2 items-center justify-between">
        <Text className="text-base font-rubik-bold text-primary-300">R5 000.00</Text>
        <Image source={icons.heart} className="size-5 mr-2" tintColor="#191d31" />
      </View>
      
      </View>

    </TouchableOpacity>
  );
};
