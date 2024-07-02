import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { router, useLocalSearchParams } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const windowWidth = Dimensions.get('window').width;

import { ProductImages } from '@/constants/Images';
import Buttons from '@/components/Buttons';
import Data from '@/data';

const Product = () => {
  const { id } = useLocalSearchParams();
  const product = Data.products.find((a) => a.id === id);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const addToCart = async () => {
    try {
      const productInCart = cart.find((a) => a.id === product.id);
      let updatedCart;
      if (productInCart) {
        updatedCart = cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...cart, { ...product, quantity: 1 }];
      }
      setCart(updatedCart);
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
    } catch (error) {
      console.error('Failed to add item to cart', error);
    }
  };

  const loadCart = async () => {
    try {
      const cartData = await AsyncStorage.getItem('cart');
      if (cartData !== null) {
        setCart(JSON.parse(cartData));
      }
    } catch (error) {
      console.log('Failed to load cart', error);
    }
  };

  const RenderProduct = () => {
    const ImageSlider = ({ item }) => {
      const productImageX = ProductImages[`${item}`];
      return (
        <>
          <Image
            source={productImageX}
            resizeMode="cover"
            className="h-[500px] rounded-3xl"
            style={{
              width: windowWidth,
            }}
          />
        </>
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
            className="mt-0 mb-12 rounded-3xl"
          >
            <FlatList
              horizontal
              pagingEnabled
              data={product.image}
              renderItem={ImageSlider}
              keyExtractor={(item, index) => index}
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
        {/* {cart.length ? (
          <TouchableOpacity
            onPress={() => router.push('/cart')}
            className="bg-white rounded-full w-12 p-3 h-12 items-center justify-center absolute top-16 right-4 z-20"
          >
            <Text className="text-secondary font-medium">{cart.length}</Text>
          </TouchableOpacity>
        ) : null} */}

        <View className="flex-row py-12 justify-between items-center gap-x-1 absolute bottom-0 left-4 z-20">
          <Buttons
            title={`View Cart (${cart.length})`}
            handlePress={() => {
              router.push('/cart');
            }}
            mainContainerStyles="w-8/12"
            containerStyles="rounded-3xl py-6"
            textStyles="text-lg"
          />

          <Buttons
            handlePress={() => {
              addToCart();
            }}
            mainContainerStyles="w-2/12"
            containerStyles="rounded-full h-20 w-20 items-center justify-center p-2"
            textStyles="text-lg text-gray"
            colorOne="#FAFAFF"
            colorTwo="#FAFAFF"
            icon="add-to-list"
            iconColor="#FBB4BF"
            iconSize="30px"
          />
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
