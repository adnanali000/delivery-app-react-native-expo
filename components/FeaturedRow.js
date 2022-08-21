import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import RestaurantCard from './RestaurantCard';


const FeaturedRow = ({id,title,description}) => {
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
                paddingHorizontal:15
            }}
            showsHorizontalScrollIndicator={false}
            className="pt-4"
        >
            {/* Restaurant Cards */}
            <RestaurantCard
              id={12}
              title="Yo! Sushi"
              imgUrl="https://links.papareact.com/gn7"
              genre="Japnese"
              rating={4.5}
              address="32/2 Main St"
              dishes={[]}
              lat={45}
              long={10}
              short_description="This dish is so tasty"
            
            />
             <RestaurantCard
              id={12}
              title="Yo! Sushi"
              imgUrl="https://links.papareact.com/gn7"
              genre="Japnese"
              rating={4.5}
              address="32/2 Main St"
              dishes={[]}
              lat={45}
              long={10}
              short_description="This dish is so tasty"
            
            />
             <RestaurantCard
              id={12}
              title="Yo! Sushi"
              imgUrl="https://links.papareact.com/gn7"
              genre="Japnese"
              rating={4.5}
              address="32/2 Main St"
              dishes={[]}
              lat={45}
              long={10}
              short_description="This dish is so tasty"
            
            />

        </ScrollView>
    
    </View>
  )
}

export default FeaturedRow