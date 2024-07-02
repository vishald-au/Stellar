import {
  View,
  Text,
  FlatList,
  Dimensions,
  RefreshControl,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import Data from '@/data';
const windowWidth = Dimensions.get('window').width;

import { ProductImages } from '@/constants/Images';
import { router } from 'expo-router';

const list = () => {
  const [refreshing, setRefreshing] = useState(false);

  const NewData = [];

  const onRefresh = () => {
    setRefreshing(true);
  };

  const shuffleArray = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const headerList = () => {
    return <Text className="-mt-4"></Text>;
  };

  const listOutput = ({ item }) => {
    const image = item.image[0];
    const productImage = ProductImages[`${image}`];

    return (
      <TouchableOpacity onPress={() => router.push(`/product/${item.id}`)}>
        <Image
          source={productImage}
          resizeMode="cover"
          className="aspect-square"
          style={{
            height: windowWidth / 2,
            width: windowWidth / 2,
          }}
        />
      </TouchableOpacity>
    );
  };

  const footerList = () => {
    return <Text className="-mb-4"></Text>;
  };

  const emptyList = () => {
    return (
      <Text className="text-gray text-center my-12">No records found</Text>
    );
  };

  return (
    <View className="w-full h-full relative">
      <FlatList
        numColumns={2}
        contentContainerStyle={{ gap: 0 }}
        columnWrapperStyle={{ gap: '0', justifyContent: 'space-between' }}
        data={shuffleArray(Data.products)}
        keyExtractor={(item) => item.id}
        renderItem={listOutput}
        ListHeaderComponent={headerList}
        ListFooterComponent={footerList}
        ListEmptyComponent={emptyList}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default list;
