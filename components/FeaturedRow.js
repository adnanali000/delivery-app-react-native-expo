import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import RestaurantCard from './RestaurantCard';
import client from '../sanity'


const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    client.fetch(`
      *[_type == "featured" && _id == $id] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{
            name
          }
        },
      }[0]
    
      `, { id }

    ).then((data) => {
      setRestaurants(data?.restaurants)
    })
  }, [id])


  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <AntDesign name="arrowright" size={24} color="#00BBCC" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >

        {/* Restaurant Cards */}

        {restaurants?.map((restaurant) => (
        
        <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            title={restaurant.name}
            imgUrl={restaurant.image}
            genre={restaurant.type?.name}
            rating={restaurant.rating}
            address={restaurant.address}
            dishes={restaurant.dishes}
            lat={restaurant.lat}
            long={restaurant.long}
            short_description={restaurant.short_description}
          />
        ))}

      </ScrollView>

    </View>
  )
}

export default FeaturedRow