import {
  View,
  Text,
  FlatList,
  RefreshControl,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
const windowWidth = Dimensions.get('window').width;

import Data from '@/data';
import { ProductImages } from '@/constants/Images';
import SearchInput from '@/components/SearchInput';
import { router } from 'expo-router';

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState('');

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

  const onRefresh = () => {
    setRefreshing(true);
  };

  const renderOutput = ({ item }) => {
    const image = item.image[0];
    const productImage = ProductImages[`${image}`];

    return (
      <>
        <View className="relative w-[48%]">
          <TouchableOpacity onPress={() => router.push(`/product/${item.id}`)}>
            <Image
              source={productImage}
              resizeMode="cover"
              className="w-full h-72 mb-2 rounded-3xl"
            />
          </TouchableOpacity>
          <View className="px-4">
            <Text className="text-lg font-bold text-black">{item.title}</Text>
            <Text className="text-md text-gray-600">${item.price}</Text>
          </View>
        </View>
      </>
    );
  };

  const emptyOutput = () => {
    return <Text className="py-2">No data available</Text>;
  };

  const renderBannerOutput = ({ item }) => {
    const getRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const randomNumber = getRandomNumber(1, 5);
    const productImage = ProductImages[`random${randomNumber}`];

    return (
      <View className="relative">
        <Image
          source={productImage}
          resizeMode="cover"
          className="h-52 mb-2 rounded-3xl"
          style={{
            width: windowWidth * 0.9,
          }}
        />
      </View>
    );
  };

  const renderBrandsOutput = ({ item, index }) => {
    return (
      <View
        className={`relative  rounded-full mt-7 mb-4 px-1 pt-2 pb-1 ${
          index === 0 ? 'bg-secondary-500/60' : 'bg-primary'
        }`}
      >
        <Text
          className={`px-4 text-xl leading-none mb-1 ${
            index === 0 ? 'text-white' : 'text-gray-500'
          }`}
        >
          {item.brand}
        </Text>
      </View>
    );
  };

  const headerOutput = () => {
    return (
      <>
        <View className="pt-36"></View>
        <SearchInput search={search} setSearch={setSearch} />
        {search ? (
          ''
        ) : (
          <View>
            <FlatList
              horizontal
              pagingEnabled
              data={Data.products.slice(0, 3)}
              keyExtractor={(item) => item.id}
              renderItem={renderBannerOutput}
              contentContainerStyle={{ gap: 10 }}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            />
            <FlatList
              horizontal
              data={Data.products.slice(0, 5)}
              keyExtractor={(item) => item.id}
              renderItem={renderBrandsOutput}
              contentContainerStyle={{ gap: 10 }}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
      </>
    );
  };

  return (
    <View className="w-full h-full px-4 relative ">
      <FlatList
        numColumns={2}
        contentContainerStyle={{ gap: 25 }}
        columnWrapperStyle={{ gap: '10', justifyContent: 'space-between' }}
        data={shuffleArray(Data.products).filter((a) =>
          a.title.includes(search)
        )}
        keyExtractor={(item) => item.id}
        renderItem={renderOutput}
        ListHeaderComponent={headerOutput}
        ListEmptyComponent={emptyOutput}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default Home;
