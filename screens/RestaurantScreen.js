import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { urlFor } from '../sanity'
import { AntDesign, Entypo } from '@expo/vector-icons';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';


const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {
    params: {
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
    },
  } = useRoute();



  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])


  return (
    <>
      
      <BasketIcon />

      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imgUrl).url()
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />

          <TouchableOpacity className="absolute top-10 left-5 p-2 bg-gray-100 rounded-full"
            onPress={navigation.goBack}
          >
            <AntDesign name="arrowleft" size={24} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">

              <View className="flex-row items-center space-x-1">
                <AntDesign name="star" size={22} color="#FF9529" />
                <Text className="text-gray-500">
                  <Text className="text-[#FF9529]">{rating}</Text> ~ {genre}
                </Text>
              </View>

              <View className="flex-row items-center space-x-0.5">
                <Entypo name="location-pin" size={22} color="gray" />
                <Text className="text-gray-500 w-[230px]" numberOfLines={1}>
                  <Text className="text-gray">Nearby ~ {address}</Text>
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <AntDesign name="questioncircleo" size={20} color="gray" />
            <Text className="pl-2 flex-1 text-md font-bold">Have a food allergy?</Text>
            <AntDesign name="arrowright" size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="pb-36">
          <Text className="pt-6 px-4 mb-3 font-bold text-xl">Menu</Text>

          {/* dish row  */}
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>

      </ScrollView>
    </>
  )
}

export default RestaurantScreen