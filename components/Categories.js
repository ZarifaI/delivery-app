import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView 
    horizontal
    contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10,
    }}
    showsHorizontalScrollIndicator={false}
    >

      <CategoryCard imgUrl />
      <CategoryCard />
      <CategoryCard />
      <Text>Categories</Text>
    </ScrollView>
  );
};

export default Categories;