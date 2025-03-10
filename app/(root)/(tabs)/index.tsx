import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useGlobalContext } from "@/lib/global-provider";
import { Link } from "expo-router";
import {Button, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import seed from "@/lib/seed";

export default function Index() {

  // user data
  const {user} = useGlobalContext();

  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList 
      data={[1, 2, 3, 4, 5]}
      renderItem={({item}) => <Card onPressed={() => {}} />}
      keyExtractor={(item) => item.toString()}
      numColumns={2}
      contentContainerClassName="pb-32"
      columnWrapperClassName="flex gap-5 px-5"
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View className="px-5">
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center">
            <Image source={{uri: user?.avatar}} className="size-12 rounded-full" />
            <View className="flex flex-col ml-2 items-start justify-center">
              <Text className="text-xs font-rubik text-black-100">
                Good Morning
              </Text>
              <Text>{user?.name}</Text>
            </View>
          </View>

          {/* --------------------------------- */}
          <Image source={icons.bell} className="size-6" />
        </View>

        {/* Search  ------------------------------------------------*/}
        <Search />
        {/*  Featured ------------------------------------------------  */}
        <View className="my-5">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-rubik-bold text-black-300">
              Featured
            </Text>
            <TouchableOpacity>
              <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
            </TouchableOpacity>
          </View>

          <FlatList 
            data={[1, 2, 3, 4, 5]}
            renderItem={({item}) => <FeaturedCard onPressed={() => {}} />}
            keyExtractor={(item) => item.toString()}
            horizontal
            bounces={false}
            contentContainerClassName="flex flex-row gap-5 mt-5"
            showsHorizontalScrollIndicator={false}

          />

          

          {/* <View className="flex flex-row gap-5 mt-5">  
          <FeaturedCard onPressed={() => {}} />
          <FeaturedCard onPressed={() => {}} />
          <FeaturedCard onPressed={() => {}} />
          </View> */}

          <View className="mt-5 flex flex-row items-center justify-between">
            <Text className="text-xl font-rubik-bold text-black-300">
              Our Recommendation
            </Text>
            <TouchableOpacity>
              <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
            </TouchableOpacity>
          </View>

          <Filters />

        </View>
      </View>
      }
      />  


      
    </SafeAreaView>
  );
}
