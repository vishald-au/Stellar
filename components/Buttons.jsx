import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';

const Buttons = ({
  title,
  handlePress,
  mainContainerStyles,
  containerStyles,
  textStyles,
  colorOne,
  colorTwo,
  icon,
  iconColor,
  iconSize,
}) => {
  const colorsOne = colorOne ? colorOne : '#fbb4bf';
  const colorsTwo = colorTwo ? colorTwo : '#da6264';
  const colors = [colorsOne, colorsTwo];

  return (
    <TouchableOpacity
      className={`w-full ${mainContainerStyles}`}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <LinearGradient
        colors={colors}
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1.0, y: 1.0 }}
        className={`px-6 py-4 ${containerStyles}`}
      >
        {title ? (
          <Text
            className={`text-white font-medium text-center leading-none ${textStyles}`}
          >
            {title}
          </Text>
        ) : null}
        {icon ? <Entypo name={icon} color={iconColor} size={iconSize} /> : null}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Buttons;
