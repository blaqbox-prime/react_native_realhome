import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { settings } from "@/constants/data";
import { useGlobalContext } from "@/lib/global-provider";
import { logout } from "@/lib/appwrite";

interface SettingsItemProps {
  icon: any;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}

const SettingsItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingsItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex flex-row items-center justify-between"
  >
    <View className="flex flex-row items-center gap-3">
      <Image source={icon} className="size-6" />
      <Text className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}>
        {title}
      </Text>
    </View>
    {/* Right */}
    {showArrow && (
      <View>
        <Image source={icons.rightArrow} className="size-6" />
      </View>
    )}
  </TouchableOpacity>
);

const profile = () => {
  const { user, refetch } = useGlobalContext();

  const handleLogout = async () => {
    const result = await logout();
    if (result) {
      Alert.alert("success", "You have successfully logged out");
      refetch();
    } else {
      Alert.alert("error", "Failed to log out");
    }
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex flex-row items-center justify-between mt-5">
          <Text className="font-rubik-bold text-xl">Profile</Text>
          <Image source={icons.bell} className="size-5" />
        </View>

        <View className="flex-row flex justify-center mt-5">
          <View className="flex flex-col mt-5 relative items-center">
            <Image
              source={{ uri: user?.avatar }}
              className="size-44 relative rounded-full"
            />
            <TouchableOpacity className="absolute bottom-11 right-2">
              <Image source={icons.edit} className="size-9" />
            </TouchableOpacity>
            <Text className="text-2xl font-rubik-bold mt-3">{user?.name}</Text>
          </View>
        </View>

        <View className="flex flex-col mt-10 gap-6">
          <SettingsItem
            icon={icons.calendar}
            title="My Bookings"
            onPress={() => {}}
          />
          <SettingsItem
            icon={icons.wallet}
            title="Payments"
            onPress={() => {}}
          />
        </View>

        <View className=" mt-5 flex flex-col border-t pt-5 border-primary-200 gap-6">
          {settings.slice(2).map((item, index) => (
            <SettingsItem key={index} {...item} />
          ))}
        </View>

        <View className=" mt-5 flex flex-col border-t pt-5 border-primary-200 gap-6">
          <SettingsItem
            icon={icons.logout}
            title="Logout"
            textStyle="text-danger"
            onPress={handleLogout}
            showArrow={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;
