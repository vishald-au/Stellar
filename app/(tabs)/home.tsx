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
    const image = item.image[0];
    const productImage = ProductImages[`${image}`];

    return (
      <TouchableOpacity
        className="relative"
        onPress={() => router.push(`/product/${item.id}`)}
      >
        <View className="absolute z-10 flex items-center justify-center w-full h-full">
          <Text className="text-5xl font-black text-white/50">
            {item.brand}
          </Text>
        </View>
        <Image
          source={productImage}
          resizeMode="cover"
          className="h-52 mb-2 rounded-3xl"
          style={{
            width: windowWidth * 0.9,
          }}
        />
      </TouchableOpacity>
    );
  };

  const renderBrandsOutput = ({ item, index }) => {
    return (
      <TouchableOpacity
        className={`relative  rounded-full mt-7 mb-4 px-1 pt-2 pb-1 ${
          index === 0 ? 'bg-secondary-500/60' : 'bg-primary'
        }`}
        onPress={() => setSearch(item)}
      >
        <Text
          className={`px-4 text-xl leading-none mb-1 ${
            index === 0 ? 'text-white' : 'text-gray-500'
          }`}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const headerOutput = () => {
    const getBrands = (products) => {
      const uniqueBrands = new Set();
      products.forEach((product) => {
        uniqueBrands.add(product.brand);
      });
      const UniqueBrandsArray = Array.from(uniqueBrands);
      return UniqueBrandsArray;
    };

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
              data={shuffleArray(Data.products).slice(0, 3)}
              keyExtractor={(item) => item.id}
              renderItem={renderBannerOutput}
              contentContainerStyle={{ gap: 10 }}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            />
            <FlatList
              horizontal
              data={getBrands(Data.products)}
              keyExtractor={(item, index) => index}
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
        data={shuffleArray(Data.products).filter(
          (a) =>
            a.title.toLowerCase().includes(search.toLowerCase()) ||
            a.category.toLowerCase().includes(search.toLowerCase()) ||
            (a.price &&
              a.price
                .toString()
                .toLowerCase()
                .includes(search.toLowerCase())) ||
            a.brand.toLowerCase().includes(search.toLowerCase()) ||
            a.description.toLowerCase().includes(search.toLowerCase())
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
