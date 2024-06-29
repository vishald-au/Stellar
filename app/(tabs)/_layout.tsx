import { Tabs, router } from 'expo-router';
import React from 'react';
import { Image, StatusBar, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { ProductImages } from '@/constants/Images';

export default function TabLayout() {
  return (
    <View className="w-full h-full relative">
      <TouchableOpacity
        onPress={() => router.push('/list')}
        className="bg-white rounded-full w-fit p-3 absolute top-16 left-4 z-10"
      >
        <AntDesign name="appstore1" color="#FBB4BF" size="24px" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push('/profile')}
        className="bg-white rounded-full w-fit p-1 absolute top-16 right-4 z-10"
      >
        <Image
          source={ProductImages.random30}
          resizeMode="cover"
          className="w-12 h-12 rounded-full"
        />
      </TouchableOpacity>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FBB4BF',
          tabBarInactiveTintColor: '#aaaaaa',
          tabBarStyle: {
            backgroundColor: 'rgba(255,255,255,.95)',
            height: 75,
            width: '90%',
            margin: 0,
            borderRadius: '40px',
            position: 'absolute',
            top: '85%',
            left: '5%',
            right: '10%',
            paddingVertical: 10,
            paddingBottom: 10,
            paddingHorizontal: 0,
            justifyContent: 'space-between',
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="home-variant"
                color={color}
                size="24px"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="list"
          options={{
            title: 'list',
            tabBarIcon: ({ color, focused }) => (
              <Octicons name="note" color={color} size="23px" />
            ),
          }}
        />

        <Tabs.Screen
          name="cart"
          options={{
            title: 'cart',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="cart-outline"
                color={color}
                size="23px"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'profile',
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome6 name="user" color={color} size="20px" />
            ),
          }}
        />
      </Tabs>
      <StatusBar style="dark" />
    </View>
  );
}
