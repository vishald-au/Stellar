import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchInput = ({ search, setSearch }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    setQuery(search);
  }, [search]);

  const handleSearch = () => {
    setSearch(query);
  };

  return (
    <View className="pb-8 w-full flex-row gap-2 justify-between items-center">
      <View
        className=" bg-white w-[80%] rounded-xl pl-2 pr-4  flex-row justify-start items-center"
        style={{
          shadowColor: '#cccccc',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.5,
          shadowRadius: 20,
          // Android elevation property
          elevation: 1,
        }}
      >
        <TextInput
          className="ml-2 text-gray-500 text-xl py-4 w-56"
          placeholder="Search"
          placeholderTextColor="#aaaaaa"
          value={query}
          onChangeText={(e) => setQuery(e)}
          onSubmitEditing={handleSearch}
        />
      </View>
      <TouchableOpacity
        className=""
        onPress={() => setSearch(query)}
        activeOpacity={0.7}
        style={{
          shadowColor: '#cccccc',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.5,
          shadowRadius: 20,
          // Android elevation property
          elevation: 1,
        }}
      >
        <View className=" bg-secondary drop-shadow-[0_25px_27px_rgba(0,0,0,1))] rounded-xl w-16 py-4 items-center justify-center overflow-hidden flex-row">
          <EvilIcons name="search" color="#fff" size="32px" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
