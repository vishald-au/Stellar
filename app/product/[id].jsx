import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { router, useLocalSearchParams } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ProductImages } from '@/constants/Images';
import Buttons from '@/components/Buttons';
import Data from '@/data';

const Product = () => {
  const { id } = useLocalSearchParams();
  const product = Data.products.find((a) => a.id === id);

  const RenderProduct = () => {
    const image = product.image[0];
    const productImage = ProductImages[`${image}`];
    const productImageNew = ['1', '2', '3'];

    const ImageSlider = () => {
      return (
        <Image
          source={productImage}
          resizeMode="cover"
          className="w-full h-[500px] mt-0 mb-12 rounded-3xl"
        />
      );
    };

    return (
      <>
        <View className="w-full h-full relative z-10">
          <View
            style={{
              shadowColor: '#000000',
              shadowOffset: { width: 0, height: 20 },
              shadowOpacity: 0.2,
              shadowRadius: 20,
              // Android elevation property
              elevation: 1,
            }}
          >
            {/* <FlatList
              horizontal
              data={productImageNew}
              renderItem={ImageSlider}
              keyExtractor={(item) => item.id}
            /> */}
            <Image
              source={productImage}
              resizeMode="cover"
              className="w-full h-[500px] mt-0 mb-12 rounded-3xl"
            />
          </View>
          <View className="px-4 w-full h-full relative">
            <View className="flex-row items-start justify-between">
              <View className="">
                <Text className="text-xl text-gray-900 font-medium">
                  {product.title}
                </Text>
                <Text className="text-gray">{product.brand}</Text>
              </View>
              <Text className="text-xl text-gray-900 font-medium">
                ${product.price}
              </Text>
            </View>
            <Text className="text-gray-500 mt-8 mb-40 leading-5">
              {product.description}
            </Text>
          </View>
        </View>
      </>
    );
  };

  const NoProduct = ({ product }) => {
    return (
      <>
        <View>
          <Text>No Product found</Text>
        </View>
      </>
    );
  };

  return (
    <View className="w-full h-full relative">
      <View className="w-full h-full relative">
        <View className="bg-white rounded-full w-fit p-3 absolute top-16 left-4 z-20">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" color="#FBB4BF" size="24px" />
          </TouchableOpacity>
        </View>
        <View className="flex-row py-12 justify-between items-center gap-x-1 absolute bottom-0 left-4 z-20">
          <Buttons
            title="Buy Now"
            handlePress={() => {}}
            mainContainerStyles="w-8/12"
            containerStyles="rounded-3xl py-6"
            textStyles="text-lg"
          />
          <TouchableOpacity
            onPress={() => {}}
            className="bg-gray-100 rounded-full h-20 w-20 items-center justify-center p-2"
          >
            <Entypo name="add-to-list" color="#FBB4BF" size="30px" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={product ? [product] : null}
          keyExtractor={(item) => item.id}
          renderItem={RenderProduct}
          ListEmptyComponent={NoProduct}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <StatusBar style="dark" />
    </View>
  );
};

export default Product;
