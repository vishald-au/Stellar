import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const Buttons = ({
  title,
  handlePress,
  mainContainerStyles,
  containerStyles,
  textStyles,
}) => {
  return (
    <TouchableOpacity
      className={`w-full ${mainContainerStyles}`}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <LinearGradient
        colors={['#fbb4bf', '#da6264']}
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1.0, y: 1.0 }}
        className={`px-6 py-4 ${containerStyles}`}
      >
        <Text
          className={`text-white font-medium text-center leading-none ${textStyles}`}
        >
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Buttons;
