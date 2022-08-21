import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { AntDesign,Entypo } from '@expo/vector-icons';

const RestaurantCard = ({
    id,
    title,
    imgUrl,
    genre,
    rating,
    address,
    dishes,
    lat,
    long,
    short_description
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
        <Image 
            source={{
                uri: imgUrl
            }}
            className="w-64 h-36 rounded-sm"
        />

        <View className="px-3 pb-4">

            <Text className="font-bold text-lg pt-2">{title}</Text>
            <View className="flex-row items-center space-x-1">
                <AntDesign name="star" size={18} color="#FF9529" />
                <Text className="text-gray-500"> 
                   <Text className="text-[#FF9529]">{rating}</Text> ~ {genre}
                </Text>
            </View>

            <View className="flex-row items-center space-x-1 mt-1">
                <Entypo name="location-pin" size={18} color="gray" />
                <Text className="text-xs text-gray-500">Nearby ~ {address}</Text>
            </View>
        </View>
      
    </TouchableOpacity>
  )
}

export default RestaurantCard