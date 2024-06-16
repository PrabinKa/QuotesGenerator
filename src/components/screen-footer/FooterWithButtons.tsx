import React, {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonWithImage from '../button-image/ButtonWithImage';
import {IMAGE_PATH} from '../../constants/ImagePath';

interface FooterInterface {
  children: ReactNode;
  textToSpeech: () => void;
  onShare: () => void;
}

const FooterWithButtons = ({children, textToSpeech, onShare}: FooterInterface) => {
  const {container, wrapper} = styles;
  return (
    <View style={container}>
      {children}
      <View style={wrapper}>
        <ButtonWithImage path={IMAGE_PATH.SPEAKER} onPress={textToSpeech} />
        <ButtonWithImage path={IMAGE_PATH.SHARE} onPress={onShare} />
      </View>
    </View>
  );
};

export default FooterWithButtons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  wrapper: {
    height: 120,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
