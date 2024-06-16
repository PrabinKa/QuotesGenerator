import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface buttonInterface {
    children: string;
    onPress: () => void;
}

const CustomButton = ({children, onPress}: buttonInterface) => {
    const {wrapper, buttonText} = styles;
  return (
    <TouchableOpacity style={wrapper} onPress={onPress} >
        <Text style={buttonText} >{children}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: '#6495ED',
        borderRadius: 5
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1
    }
})