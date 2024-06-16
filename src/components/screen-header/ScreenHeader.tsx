import React, {ReactNode} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

interface ScreenHeaderIterface {
  children: ReactNode;
}

const ScreenHeader = ({children}: ScreenHeaderIterface) => {
  const {container, headerWrapper, headerText} = styles;
  return (
    <SafeAreaView style={container}>
      <View style={headerWrapper}>
        <Text style={headerText}>Random</Text>
      </View>
      {children}
    </SafeAreaView>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerWrapper: {
    paddingVertical: 15,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
});
