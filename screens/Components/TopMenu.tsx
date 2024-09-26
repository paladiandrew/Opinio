import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Color, Border, FontSize } from './GlobalStyles'; 

const TopMenu = () => {
  const [activeButton, setActiveButton] = useState('friends');

  const handleButtonPress = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <View style={styles.button}>
      <View style={[styles.topbuttonsbg, styles.bgBorder]} />
      <Pressable
        style={[
          styles.friendsbutton,
          styles.friendsbuttonLayout,
          activeButton === 'friends' && styles.activeButton,
        ]}
        onPress={() => handleButtonPress('friends')}
      >
        <Text
          style={[
            activeButton === 'friends' ? styles.activeButtonText : styles.inactiveButtonText, // Apply conditional styling for text color
          ]}
        >
          Подписки
        </Text>
      </Pressable>
      <Pressable
        style={[
          styles.popularbutton,
          styles.friendsbuttonLayout,
          activeButton === 'popular' && styles.activeButton,
        ]}
        onPress={() => handleButtonPress('popular')}
      >
        <Text
          style={[
            activeButton === 'popular' ? styles.activeButtonText : styles.inactiveButtonText, // Apply conditional styling for text color
          ]}
        >
          Популярное
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    top: 99,
    height: 48,
    width: 345,
    left: 440,
    position: 'absolute',
  },
  topbuttonsbg: {
    backgroundColor: Color.white,
    borderRadius: Border.br_31xl,
    borderColor: Color.colorLightgray,
    borderStyle: 'solid',
    height: 48,
    width: 345,
  },
  bgBorder: {
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: 'solid',
    left: 0,
    top: 0,
    position: 'absolute',
  },
  friendsbuttonLayout: {
    width: 177,
    backgroundColor: 'transparent',
    borderRadius: Border.br_31xl,
    top: 0,
    height: 48,
    position: 'absolute',
  },
  friendsbutton: {
    left: 0,
  },
  popularbutton: {
    left: 168,
  },
  activeButton: {
    backgroundColor: Color.black,
  },
  activeButtonText: {
    color: Color.white,
    position: 'absolute',
    left: '30%',
    top: '30%',
  },
  inactiveButtonText: { // Added style for inactive text
    color: Color.black, // Default text color
    position: 'absolute',
    left: '30%',
    top: '30%',
  },
});

export default TopMenu;