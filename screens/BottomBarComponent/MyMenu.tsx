import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Image } from "expo-image";
import { Border, Color } from "./GlobalStyles";
import Lenta from '../News/Lenta';

interface MyMenuProps {
    activeButton: string; // Пропс для передачи активного состояния кнопки
  }
  
const MyMenu: React.FC<MyMenuProps> = ({ activeButton }) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [activebutton, setActiveButton] = useState<string | null>("Lenta");

  // Состояние для хранения активной кнопки
  // Обработчик нажатия на кнопку
  const handlePress = (buttonName: string) => {
    

    // Переход на соответствующую страницу
    switch (buttonName) {
      case 'News': 
        navigation.navigate('Lenta');
        break;
      case 'Search':
        navigation.navigate('FindProfile');
        break;
      case 'Menu':
        navigation.navigate('MenuMain');
        break;
      case 'MyProfile':
        navigation.navigate('MyProfile');
        break;
    }
  };

  // Определение активного состояния кнопки
  const isActive = (buttonName: string) => {
    return activeButton === buttonName;
  };

  return (
    <View style={styles.mymenu}>
      <View style={styles.buttonContainer}>
        {/* Кнопка News */}
        <Pressable
          style={styles.button}
          onPress={() => handlePress('News')}
        >
          <Image
            style={isActive('News') ? styles.buttonImage : styles.inactiveNewsImage} 
            contentFit="contain" // Сохранить пропорции изображения
            source={isActive('News') ? require("./ActiveNews.png") : require("./News.png")}
          />
        </Pressable>

        {/* Кнопка Search */}
        <Pressable
          style={styles.button}
          onPress={() => handlePress('Search')}
        >
          <Image
            style={isActive('Search') ? styles.buttonImage : styles.inactiveSearchImage} 
            contentFit="contain" // Сохранить пропорции изображения
            source={isActive('Search') ? require("./ActiveSearch.png") : require("./Search.png")}
          />
        </Pressable>

        {/* Кнопка Menu */}
        <Pressable
          style={styles.button}
          onPress={() => handlePress('Menu')}
        >
          <Image
            style={isActive('Menu') ? styles.buttonImage : styles.inactiveMenuImage} 
            contentFit="contain" // Сохранить пропорции изображения
            source={isActive('Menu') ? require("./ActiveMenu.png") : require("./Menu.png")}
          />
        </Pressable>

        {/* Кнопка MyProfile */}
        <Pressable
          style={styles.button}
          onPress={() => handlePress('MyProfile')}
        >
          <Image
            style={isActive('MyProfile') ? styles.buttonImage : styles.inactiveMyProfileImage} 
            contentFit="contain" // Сохранить пропорции изображения
            source={isActive('MyProfile') ? require("./ActiveMyProfile.png") : require("./MyProfile.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row', // Горизонтальное выравнивание
    justifyContent: 'space-between', // Распределение с равными отступами
    alignItems: 'center', // Вертикальное центрирование
    paddingHorizontal: 10, // Отступ от краев
    paddingTop: 10, // Отступ сверху
  },
  button: {
    width: 47, // Ширина кнопки
    height: 47, // Высота кнопки
    borderRadius: 10, // Скругление углов (настройте по желанию)
    justifyContent: 'center', // Выравнивание содержимого по центру
    alignItems: 'center', // Выравнивание содержимого по центру
  },
  buttonImage: {
    width: 47, //  Установите желаемую ширину изображения 
    height: 47, //  Установите желаемую высоту изображения
  },
  mymenu: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.black,
    width: 228,
    height: 67,
    position: 'absolute', 
    bottom: 10, 
    left: "19%", 
    elevation: 10,
  },
  inactiveNewsImage: {
    width: 17,
    height: 17,
  },
  inactiveSearchImage: {
    width: 15,
    height: 15,
  },
  inactiveMenuImage: {
    width: 17,
    height: 9,
  },
  inactiveMyProfileImage: {
    width: 13,
    height: 18,
  },
});

export default MyMenu;