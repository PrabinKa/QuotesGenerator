import React, {useEffect, useState, useCallback} from 'react';
import {StyleSheet, Text, View, Share, Alert} from 'react-native';
import {CustomButton, FooterWithButtons, ScreenHeader} from '../../components';
import {fetchDailyQuotes} from '../../api/Quotes';
import Tts from 'react-native-tts';

Tts.setDefaultRate(0.5);
Tts.setDefaultPitch(1.0);

const MainScreen = () => {
  const {container, quotesTextStyle, authorText} = styles;
  const [author, setAuthor] = useState('');
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  //fetch quotes from api
  const fetchData = async () => {
    fetchDailyQuotes().then(data => {
      setQuote(data.content);
      setAuthor(data.author);
    });
  };

  //convert text quotes to voice
  const convertTextToSpeech = () => {
    Tts.speak(quote);
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: quote,
      });
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <FooterWithButtons textToSpeech={convertTextToSpeech} onShare={onShare}>
      <ScreenHeader>
        <View style={container}>
          <Text style={quotesTextStyle}>{quote}</Text>
          <Text style={authorText}>- {author}</Text>
          <CustomButton
            onPress={() => {
              fetchData();
            }}>
            Next Quote
          </CustomButton>
        </View>
      </ScreenHeader>
    </FooterWithButtons>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  quotesTextStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    lineHeight: 60,
    marginVertical: 20,
  },
  authorText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#888',
    textAlign: 'left',
  },
});
