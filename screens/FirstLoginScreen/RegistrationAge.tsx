import * as React from "react";
import {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  StatusBar,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, Border } from "./GlobalStyles";
import { createOrUpdateUser } from '@/app/Backend/api'; // Убедитесь, что путь правильный
import * as FileSystem from 'expo-file-system';
import { join } from 'path';
import { Stack } from "expo-router";



//navigation.navigate("VKidScreen")
//navigation.navigate("RegistrationGeolocation")
//navigation.goBack()
const RegistrationAge = () => {
    StatusBar.setBackgroundColor('#ECE5D8');

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [age, setAge] = useState(0);
  const [textInputValue, setTextInputValue] =useState('');
  const [buttonStyle, setButtonStyle] = useState(styles.button);
  const [textStyle, setTextStyle] = useState(styles.textDisabled);
  const [borderStyle, setBorderStyle] = useState(styles.inputOff);

  const handleInputChange = (text: string) => {
    setTextInputValue(text);
    if (!isNaN(Number(text)) && Number(text) > 11 && Number(text) < 81) {
      setButtonStyle(styles.buttonActive);
      setBorderStyle(styles.inputOn);
      setTextStyle(styles.text2);
    } else {
    setBorderStyle(styles.inputOff);
      setButtonStyle(styles.button);
      setTextStyle(styles.textDisabled);
    }
  };


  const handleButtonPress = async () => {
    if (buttonStyle === styles.buttonActive) {
        try {
            // Путь к файлу user.json (глобальный путь)
            const userFilePath = `${FileSystem.documentDirectory}data/user.json`;

            // Читаем данные пользователя из файла
            const userDataString = await FileSystem.readAsStringAsync(userFilePath);
            const userData = JSON.parse(userDataString);

            // Обновляем параметр age
            userData.age = textInputValue;

            // Отправляем обновленные данные на сервер
            const response = await createOrUpdateUser(userData);
            console.log('Пользователь успешно обновлен на сервере:', response);

            // Сохраняем обновленные данные локально
            await FileSystem.writeAsStringAsync(userFilePath, JSON.stringify(userData, null, 2));
            console.log('Данные пользователя обновлены локально в', userFilePath);

            // Переходим на следующий экран
            navigation.navigate("RegistrationGeolocation");
        } catch (error) {
            console.error('Ошибка при обработке данных пользователя:', error);
        }
    }
};

  const clearTextInput = () => {
    setButtonStyle(styles.button);
    setTextStyle(styles.textDisabled);
    setTextInputValue('');
  };

  return (
    <View style={styles.registrationage}>
      <View style={[styles.frame, styles.frameLayout]}>
        <View style={[styles.frame1, styles.framePosition]}>
          <View style={[styles.frame2, styles.framePosition]}>
            <Pressable
              style={styles.close}
              onPress={() => 
                navigation.goBack()
                
            }
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("./close.svg")}
              />
            </Pressable>
            <Text style={[styles.text, styles.textPosition]}>Регистрация</Text>
          </View>
        </View>
        <View style={[styles.frame3, styles.frameLayout]}>
          <Text style={[styles.text1, styles.textPosition]}>
            Укажите ваш возраст
          </Text>
        </View>
      </View>
      <View style={[styles.frame4, styles.frameLayout]}>
        
        <TouchableHighlight
          
          style={[buttonStyle, styles.inputLayout]}
          
          underlayColor="#fff"
          onPress={handleButtonPress}
        >
          <Text style={[textStyle, styles.textTypo3]}>Далее</Text>
        </TouchableHighlight>
        <View style={[styles.frame5, styles.frameLayout]}>
          <View style={[styles.frame6, styles.frameLayout]}>
            <Text style={[styles.text3, styles.textPosition]}>
              Для создания профиля вам должно быть не менее 12 лет
            </Text>
          </View>
          <View style={[styles.input, styles.inputLayout]}>
            <TextInput
              style={[borderStyle, styles.inputLayout, styles.textinputpadd]}
              placeholder="Введите ваш возраст"
              autoCapitalize="none"
              placeholderTextColor="#292A24"
              value={textInputValue}
              onChangeText={handleInputChange}
              keyboardType="numeric"
            />
            {textInputValue !== '' && (
            <Pressable style={styles.like} onPress={clearTextInput}>
              <Image
                style={styles.likeChild}
                contentFit="cover"
                source={require("./like.svg")}
              />
            </Pressable>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    width: 345,
    position: "absolute",
    overflow: "hidden",
  },
  framePosition: {
    height: 30,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  textPosition: {
    textAlign: "left",
    color: Color.black,
    top: 0,
    position: "absolute",
  },
  inputLayout: {
    height: 48,
    left: 0,
    width: "100%",
    position: "absolute",
  },
  textTypo3: {
    fontSize: FontSize.mobileT3_size,
    left: "50%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  close: {
    left: -22,
    top: -17,
    width: 51,
    height: 51,
    position: "absolute",
  },
  text: {
    marginLeft: 8,
    fontWeight: "600",
    lineHeight: 18,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.mobileT3_size,
    left: "50%",
  },
  frame2: {
    width: 186,
    left: 0,
  },
  frame1: {
    left: 22,
    width: 301,
  },
  text1: {
    marginLeft: -172.5,
    fontSize: FontSize.mobileH1_size,
    letterSpacing: -0.8,
    lineHeight: 36,
    fontWeight: "900",
    width: 253,
    textAlign: "left",
    color: Color.black,
    left: "50%",
  },
  frame3: {
    top: 79,
    height: 72,
    left: 0,
  },
  frame: {
    top: 71,
    height: 151,
    left: 15,
    width: 345,
  },
  text2: {
    marginLeft: -21.5,
    top: "29.17%",
    fontWeight: "700",
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  textDisabled: {
    marginLeft: -21.5,
    top: "29.17%",
    fontWeight: "700",
    color: Color.black,
    textAlign: "center",
    position: "absolute",
  },
  button: {
    top: 367,
    backgroundColor: Color.darkbeige,
    borderRadius: Border.br_31xl,
    height: 48,
  },
  buttonActive: {
    top: 367,
    backgroundColor: Color.black,
    borderRadius: Border.br_31xl,
    height: 48,
  },
  text3: {
    fontSize: FontSize.systemFontHeadline1_size,
    letterSpacing: -0.1,
    width: 239,
    fontWeight: "600",
    lineHeight: 18,
    textAlign: "left",
    color: Color.black,
    left: 0,
  },
  frame6: {
    height: 36,
    left: 0,
    top: 0,
  },
  inputOn: {
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.black,
    borderWidth: 1,
    borderRadius: Border.br_31xl,
    height: 48,
    top: 0,
  },
  inputOff: {
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.darkbeige,
    borderWidth: 1,
    borderRadius: Border.br_31xl,
    height: 48,
    top: 0,
  },
  likeChild: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  like: {
    top: 12,
    left: 313,
    borderRadius: 114,
    backgroundColor: Color.lightBeige,
    flexDirection: "row",
    alignItems: "center",
    padding: 7,
    position: "absolute",
  },
  input: {
    top: 61,
  },
  frame5: {
    height: 109,
    left: 0,
    top: 0,
  },
  frame4: {
    top: 247,
    height: 415,
    left: 15,
    width: 345,
  },
  registrationage: {
    backgroundColor: Color.background,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
  textinputpadd: {
    padding: 17,
  },
});

export default RegistrationAge;
