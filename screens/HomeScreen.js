import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView className="bg-white pt-5">
            {/* header  */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                    source={{
                        uri: "https://links.papareact.com/wru"
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />

                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">
                        Current Location
                        <AntDesign name="down" size={18} color="#00CCBB" />
                    </Text>
                </View>

                <AntDesign name="user" size={35} color="#00CCBB" />
            </View>

            {/* search  */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
                    <AntDesign name="search1" color="gray" size={20} />
                    <TextInput
                        placeholder='Restaurants and cuisines'
                        keyboardType='default'
                    />
                </View>

                <AntDesign name="bars" size={30} color="#00CCBB" />
            </View>

            {/* Body */}

            <ScrollView
                className="bg-gray-100"
                contentContainerStyle={{
                    paddingBottom: 100
                }}
            >
                {/* Categories */}
                <Categories />

                {/* Featured Row  */}
                <FeaturedRow
                    id="1"
                    title="Featured"
                    description="Paid placements from our partners"
                />

                {/* Tasty Discount  */}
                <FeaturedRow
                    id="2"
                    title="Tasty Discounts"
                    description="Everyone's been enjoying these juicy discounts!"
                />

                {/* Offers new you  */}
                <FeaturedRow
                    id="3"
                    title="Offers near you!"
                    description="Why not support your local restaurant tonight!"
                />


            </ScrollView>


        </SafeAreaView>
    )
}

export default HomeScreen