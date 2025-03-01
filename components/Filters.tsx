import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { categories } from '@/constants/data';

const Filters = () => {
    const params = useLocalSearchParams<{filter?: string}>();
    const [selectedFilter, setSelectedFilter] = useState(params.filter || "All");

    const handleFilterChange = (filter: string) => {

        if(selectedFilter === filter){
            setSelectedFilter('All');
            router.setParams({ filter: "All" })
            return;
        }

        setSelectedFilter(filter)
        router.setParams({ filter })
        return;
    }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className='mt-3 mb-2'>
      {categories.map((item, index) => (
        <TouchableOpacity key={item.title} onPress={() => handleFilterChange(item.category)} className={`flex flex-col items-start mr-4 px-4 py-2 rounded-full ${item.category === selectedFilter ? "bg-primary-300 text-white" : "bg-primary-100 border border-primary-200"}` }>
            <Text className={`text-sm ${selectedFilter === item.category ? "text-white font-rubik-bold mt-0.5" : "text-black-300 font-rubik"}`}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default Filters