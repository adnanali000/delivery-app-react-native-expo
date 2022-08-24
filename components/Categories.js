import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import client from '../sanity'

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    client.fetch(`
      *[_type == "category"]
    `).then((data)=>{
      setCategories(data)
    })
  },[])


  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop:10
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
        {/* Category card  */}
        {categories?.map((category)=>(
          <CategoryCard imgUrl={category.image} title= {category.name} key={category._id} />
        ))}
      
    </ScrollView>
  )
}

export default Categories