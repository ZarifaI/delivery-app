import { View, Text, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import CategoryCard from './CategoryCard';
import sanityClient from "../sanity";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient.fetch(`
      *[_type =="category"]
    `).then((data) => {
      setCategories(data);
    });
  }, []);

  const urlFor = (source) => builder.image(source);

  return (
    <ScrollView 
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category) => {
        const imgUrl = category.image ? urlFor(category.image).width(200).url() : 'https://via.placeholder.com/200'; // Default placeholder image URL
        return (
          <CategoryCard
            key={category._id}
            imgUrl={imgUrl}
            title={category.name}
          />
        );
      })}
    </ScrollView>
  );
};

export default Categories;
