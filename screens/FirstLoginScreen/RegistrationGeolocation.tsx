import * as React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect  } from 'react';
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize } from "./GlobalStyles";
import buttonTitlesData from './Cities.json';
import { createOrUpdateUser } from '@/app/Backend/api'; // Убедитесь, что путь правильный
import * as FileSystem from 'expo-file-system';// Импорт функций для чтения и записи в файл
import { join } from 'path'; // Импорт функции для работы с путями

const RegistrationGeolocation = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [city, setCity] = useState('');
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [cities, setButtonTitles] = useState<string[]>([]);
  useEffect(() => {
    setButtonTitles(buttonTitlesData.cities);
  }, []);


  const [isScrollViewVisible, setIsScrollViewVisible] = useState(false);
  const [imageUri, setImageUri] = useState<string>(require('./buttonOff.svg'));
  const handleButtonPress = () => {
    // При нажатии на кнопку меняем состояние на противоположное
    setIsScrollViewVisible(!isScrollViewVisible);
    setImageUri(prevUri => prevUri === require('./buttonOff.svg') ? require('./buttonOn.svg') : require('./buttonOff.svg'));
  };


  const [regButtonTextStyle, setRegButtonTextStyle] = useState(styles.textRegistrationInActive);
  const [regButtonStyle, setRegButtonStyle] = useState(styles.buttonRegUnActive);
  const [regButtonBorderStyle, setRegButtonBorderStyle] = useState(styles.borderRegUnActive);
  const [cityText, setInputText] = useState('');
  const setTetxInputText = (title: string) => {
    // Обновляем состояние buttonText новым значением
    if(title.length > 0) {
        setRegButtonTextStyle(styles.textRegistrationActive);
        setRegButtonStyle(styles.buttonRegActive)
        setRegButtonBorderStyle(styles.borderRegActive)
    } else {
        setRegButtonTextStyle(styles.textRegistrationInActive);
        setRegButtonStyle(styles.buttonRegUnActive)
        setRegButtonBorderStyle(styles.borderRegUnActive)
    }
    setInputText(title);
    setSelectedButton(title);
  };


  const navigationHandle = async () => {
    if (cityText.length > 0) {
        try {
            // Путь к файлу user.json (глобальный путь)
            const userFilePath = `${FileSystem.documentDirectory}data/user.json`;

            // Читаем данные пользователя из файла
            const userDataString = await FileSystem.readAsStringAsync(userFilePath);
            const userData = JSON.parse(userDataString);

            // Обновляем параметр city
            userData.city = cityText;

            // Отправляем обновленные данные на сервер
            const response = await createOrUpdateUser(userData);
            console.log('Пользователь успешно обновлен на сервере:', response);

            // Сохраняем обновленные данные локально
            await FileSystem.writeAsStringAsync(userFilePath, JSON.stringify(userData, null, 2));
            console.log('Данные пользователя обновлены локально в', userFilePath);

            // Переходим на следующий экран
            navigation.navigate("Lenta");
        } catch (error) {
            console.error('Ошибка при обработке данных пользователя:', error);
        }
    }
};

  return (
    <View style={styles.registrationgeolocation}>
      <View style={[styles.frame, styles.framePosition1]}>
        <View style={[styles.frame1, styles.framePosition]}>
          <View style={[styles.frame2, styles.framePosition]}>
            <Pressable
              style={[styles.close, styles.framePosition]}
              onPress={() => navigation.navigate("RegistrationAge")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("./close.svg")}
              />
            </Pressable>
            <Text style={[styles.text, styles.textFlexBox]}>Регистрация</Text>
          </View>
        </View>
        <View style={styles.frame3}>
          <Text style={[styles.text1, styles.bgPosition]} numberOfLines={2}>
            Укажите ваш город
          </Text>
        </View>
      </View>
      <View style={[styles.frame4, styles.framePosition1]}>
        <View style={styles.input}>
          <TextInput
            style={[regButtonBorderStyle, styles.inputChild, styles.TextInputBg]}
            placeholder="Москва"
            autoCapitalize="none"
            value={cityText}
            onChangeText={setTetxInputText}

          />
          <Pressable style={styles.button} onPress={() => handleButtonPress()}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={imageUri}
            />
          </Pressable>
        </View>


        <View>
        {isScrollViewVisible && (
        <ScrollView style={styles.SVstyle}>
      {cities.map((title) => (
        <TouchableOpacity
          key={title}
          style={[
            styles.SVbutton,
            selectedButton === title && styles.selectedButton
          ]}
          onPress={() => setTetxInputText(title)}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
        )}
    </View>


        <View style={styles.frame5}>
          <Text style={[styles.text2, styles.textPosition]} numberOfLines={3}>
            <Text
              style={styles.text3}
            >{`Нажимая на кнопку «Далее», вы принимаете `}</Text>
            <Text style={styles.text4}>Условия использования</Text>
            <Text style={styles.text3}>{` и `}</Text>
            <Text style={styles.text4}>Политику конфиденциальности</Text>
          </Text>
        </View>
        <TouchableHighlight
          style={[regButtonStyle, styles.button1Layout]}
          underlayColor="#fff"
          onPress={() => navigationHandle()}
        >
          <Text style={[regButtonTextStyle, styles.textPosition]}>
            Зарегистрироваться
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};
//borderRadius: Border.br_31xl,
const styles = StyleSheet.create({
  SVstyle: {
    flex: 1,
    borderRadius: Border.br_11xl,
    backgroundColor: 'white',
    width: 345,
    position: 'absolute',
    top: 58,
    height: 210,
    marginLeft: -172.5,
    left: '50%',
    overflow: 'hidden',

  },
  SVcontainer: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center', // Центрирование кнопок по горизонтали
  },

  SVbutton: {
    borderRadius: Border.br_11xl,
    //borderWidth: 0.05,
    height: 40,
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center', // Центрирование текста по вертикали
    
  },

  selectedButton: {
    backgroundColor: '#F2EDE4',
  },
  buttonText: {
    color: 'black', // Черный цвет текста
    textAlign: 'left', // Выравнивание текста слева
    marginLeft: 20, // Отступ текста слева
    // Добавьте другие стили для текста, если необходимо
  },
  TextInputBg: {
    backgroundColor: Color.white,
    width: 345,
    padding: 16,
    position: "absolute",
  },
  framePosition1: {
    left: 15,
    width: 345,
    position: "absolute",
    overflow: "hidden",
  },
  framePosition: {
    height: 51,
    left: 0,
    top: 0,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  bgPosition: {
    marginLeft: -172.5,
    left: "50%",
  },


 
  textPosition: {
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  button1Layout: {
    borderRadius: Border.br_31xl,
    height: 48,
    left: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  close: {
    width: 51,
  },
  text: {
    marginLeft: 19,
    top: 17,
    lineHeight: 18,
    fontWeight: "600",
    fontSize: FontSize.mobileT3_size,
    left: "50%",
    textAlign: "left",
  },
  frame2: {
    width: 208,
    overflow: "hidden",
  },
  frame1: {
    width: 345,
    overflow: "hidden",
  },
  text1: {
    fontSize: FontSize.mobileH1_size,
    letterSpacing: -0.8,
    lineHeight: 36,
    fontWeight: "800",

    width: 253,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
    top: 0,
  },
  frame3: {
    top: 96,
    height: 72,
    left: 0,
    width: 345,
    position: "absolute",
    overflow: "hidden",
  },
  frame: {
    top: 54,
    height: 168,
    width: 345,
  },
  inputChild: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: Border.br_31xl,
    height: 48,
    left: 0,
    top: 0,
  },
  borderRegActive: {
    borderColor: Color.black,
  },
  borderRegUnActive: {
    borderColor: Color.darkbeige,
  },
  buttonContent: {
    borderRadius: Border.br_11xl,
    padding: 12,
    borderWidth: 0.05,
    borderColor: 'black',
    
  },
  button: {
    left: 301,
    top: 4,
    width: 40,
    height: 40,
    position: "absolute",
  },
  input: {
    height: 48,
    left: 0,
    top: 0,
    width: 345,
    position: "absolute",
  },
  text3: {
    color: Color.colorDarkgray,
  },
  text4: {
    color: Color.black,
  },
  text2: {
    marginLeft: -127.5,
    fontSize: 11,
    width: 256,

    fontWeight: "600",
    top: 0,
  },
  frame5: {
    top: 384,
    left: 44,
    width: 257,
    height: 45,
    position: "absolute",
    overflow: "hidden",
  },
  textRegistrationActive: {
    marginLeft: -70.5,
    top: "29.17%",
    fontWeight: "700",

    color: Color.white,
    fontSize: FontSize.mobileT3_size,
  },
  textRegistrationInActive: {
    marginLeft: -70.5,
    top: "29.17%",
    fontWeight: "700",

    color: Color.black,
    fontSize: FontSize.mobileT3_size,
  },
  buttonRegActive: {
    top: 306,
    backgroundColor: Color.black,
    width: 345,
    position: "absolute",
  },
  buttonRegUnActive: {
    top: 306,
    backgroundColor: Color.darkbeige,
    width: 345,
    position: "absolute",
  },
  frame4: {
    top: 308,
    height: 429,
    width: 345,
  },
  registrationgeolocation: {
    backgroundColor: Color.background,
    flex: 1,
    height: "100%",
    width: "100%",
  },
});

export default RegistrationGeolocation;