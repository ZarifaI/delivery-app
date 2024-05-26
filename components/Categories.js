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
      {/* {Category card} */}
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
    </ScrollView>
  );
};

export default Categories;