import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Buttons from '@/components/Buttons';
import { ProductImages } from '@/constants/Images';
import { router } from 'expo-router';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

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

  const clearCart = async () => {
    try {
      await AsyncStorage.removeItem('cart');
      setCart([]);
    } catch (error) {
      console.error('Failed to clear cart', error);
    }
  };

  const CartItems = ({ item }) => {
    const productImage = ProductImages[`${item.image[0]}`];
    return (
      <TouchableOpacity onPress={() => router.push(`/product/${item.id}`)}>
        <View
          className="bg-white w-full flex-row  p-2 rounded-lg mb-4"
          style={{
            shadowColor: '#000000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.012,
            shadowRadius: 6,
            // Android elevation property
            elevation: 1,
          }}
        >
          <Image
            source={productImage}
            resizeMode="cover"
            className="w-20 h-24 rounded-lg"
          />
          <View className="pl-4 flex-row">
            <View className="">
              <Text className="text-gray-500 font-medium mt-1">
                {item.title}
              </Text>
              <Text className="text-gray-500">{item.brand}</Text>
              <Text className="text-gray">Qty: {item.quantity}</Text>
              <Text className="text-gray-500 font-bold mt-3 text-xl">
                ${item.price}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const EmptyCart = () => {
    return (
      <Text className="text-gray text-center my-12 ">Your cart is empty</Text>
    );
  };
  const FooterCart = () => {
    const total = cart.reduce((a, c) => a + c.price * c.quantity, 0);
    return (
      <View className="pt-4 pb-40">
        {cart.length ? (
          <View className="flex-row justify-between">
            <View className="items-start justify-center">
              <Text className="text-lg font-medium text-gray">Total</Text>
              <Text className="text-xl text-gray-500 font-medium">
                ${total}
              </Text>
            </View>
            <Buttons
              title="Pay Now"
              handlePress={() => {
                router.push('/home');
              }}
              mainContainerStyles="w-5/12"
              containerStyles="rounded-3xl py-6"
              textStyles="text-lg"
            />
          </View>
        ) : null}
      </View>
    );
  };
  const HeaderCart = () => {
    return (
      <View className="pt-40">
        {cart.length ? (
          <Text
            onPress={() => clearCart()}
            className="text-gray text-left mb-4"
          >
            Clear cart
          </Text>
        ) : null}
      </View>
    );
  };

  return (
    <View className="h-full px-4 relative">
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={CartItems}
        ListHeaderComponent={HeaderCart}
        ListFooterComponent={FooterCart}
        ListEmptyComponent={EmptyCart}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Cart;
