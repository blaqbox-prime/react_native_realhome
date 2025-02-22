import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'

const SignIn = () => {

  const handleLogin = () => {
    // Login logic goes here
  }

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
          <Image source={images.onboarding} className='w-full h-4/6 resze' resizeMode='contain'/>
          <View className='px-10'>
            <Text className='text-base text-center uppercase font-rubik text-black-200'>Welcome to RealHome</Text>
            <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>Let's Get You Closer to {"\n"} 
            <Text className='text-primary-300'>Your Ideal Home</Text>
            </Text>
            <Text className='text-center text-lg font-rubik text-black-200 mt-12'>Login to RealHome with Google</Text>
            <TouchableOpacity onPress={handleLogin} className='bg-white shadow-md shadow-zinc-300 w-full rounded-full py-4 mt-5 flex flex-row items-center justify-center gap-4'>
                <Image source={icons.google} resizeMode='contain' className='w-5 h-5' />
                <Text className='text-lg font-rubik-medium text-black-300'>Continue with Google</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn