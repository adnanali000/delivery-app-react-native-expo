import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'
import Currency from 'react-currency-formatter'

const BasketIcon = () => {
    const items = useSelector(selectBasketItems)
    const basketToal = useSelector(selectBasketTotal)
    const navigation = useNavigation();

    if(!items.length) return;

    return (
        <View className="absolute bottom-10 z-50 w-full">
            <TouchableOpacity onPress={()=>navigation.navigate("Basket")} className="bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1 mx-5">
                <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">{items.length}</Text>
                <Text className="flex-1 text-center text-white text-lg font-extrabold">View Basket</Text>
                <Text className="text-white font-extrabold">
                            <Currency quantity={basketToal} currency="PKR" />
                        </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon