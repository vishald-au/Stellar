import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  return (
    <SafeAreaView className="w-full h-full py-2 px-8 relative">
      <View>
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
