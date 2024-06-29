import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

import { SplashImages } from '@/constants/Images';
import Buttons from '@/components/Buttons';
import { router } from 'expo-router';

const Index = () => {
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomNumber = getRandomNumber(1, 5);
  const splashImage = SplashImages[`splash${randomNumber}`];

  return (
    <>
      <View class="bg-secondary-500 w-full h-full items-center justify-center flex-1">
        <Image
          source={splashImage}
          resizeMode="cover"
          className="w-full h-full absolute inset-0 object-center"
        />

        <View className="w-full h-full items-center justify-end pb-24">
          <Buttons
            title="Continue as guest"
            handlePress={() => router.push('/home')}
            mainContainerStyles="w-10/12"
            containerStyles="rounded-3xl"
            textStyles="text-lg"
          />
        </View>

        <StatusBar style="dark" />
      </View>
    </>
  );
};

export default Index;
