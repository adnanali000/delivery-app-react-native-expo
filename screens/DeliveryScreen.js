import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const DeliveryScreen = () => {
    const navigation = useNavigation()
  return (
    <View>
      <Text>DeliveryScreen</Text>
    </View>
  )
}

export default DeliveryScreen