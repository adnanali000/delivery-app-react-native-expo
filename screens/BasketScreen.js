import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { selectRestaurant } from '../features/restaurantSlice'
import { Entypo } from '@expo/vector-icons';
import { urlFor } from '../sanity'
import Currency from 'react-currency-formatter'


const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant)
  const dispatch = useDispatch()
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const items = useSelector(selectBasketItems)
  const basketTotal = useSelector(selectBasketTotal)
  const delievryFee = 100;

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {})

    setGroupedItemsInBasket(groupedItems)
  }, [items])


  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">

        <View className="p-5 bg-white border-b border-[#00CCBB] shadow-xs">
          <View>
            <Text className="text-lg text-center font-bold">Basket</Text>
            <Text className="text-gray-400 text-center">{restaurant.title}</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.goBack()} className="rounded-full bg-gray-100 absolute top-3 right-5">
            <Entypo name="circle-with-cross" size={40} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image source={{
            uri: "https://links.papareact.com/wru"
          }}
            className="h-7 w-7 bg-gray-300 rounded-full p-4"
          />

          <Text className="flex-1">Deliver in 20-30 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-[#00CCBB]">{items.length} x</Text>
              <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-600">
                <Currency quantity={items[0]?.price} currency="PKR" />
              </Text>

              <TouchableOpacity>
                <Text
                  className="text-[#00CCBB] text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
                
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={basketTotal} currency="PKR" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">
              <Currency quantity={delievryFee} currency="PKR" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="font-extrabold">
              <Currency quantity={basketTotal + delievryFee} currency="PKR" />
            </Text>
          </View>

          <TouchableOpacity className="bg-[#00CCBB] rounded-lg p-4" onPress={() => navigation.navigate('PreparingOrderScreen')}>
            <Text className="text-lg text-white text-center font-bold">Place Order</Text>
          </TouchableOpacity>

        </View>

      </View>
    </SafeAreaView>
  )
}

export default BasketScreen