import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image, ImageSourcePropType} from 'react-native';

interface props {
    path: ImageSourcePropType;
    onPress?: () => void;
}

const ButtonWithImage = ({path, onPress}: props) => {
    const {wrapper, imageStyle} = styles;
  return (
    <TouchableOpacity style={wrapper} onPress={onPress} >
      <View style={{
        height: 30,
        width: 30
      }} >
      <Image source={path} style={imageStyle} tintColor={'#6495ED'}  />
      </View>
    </TouchableOpacity>
  );
};

export default ButtonWithImage;

const styles = StyleSheet.create({
    wrapper: {
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#FFF',
        borderColor: '#F4F4F4',
        borderWidth: 2
    },
    imageStyle: {
      height: '100%',
      width: '100%'
    }
});
