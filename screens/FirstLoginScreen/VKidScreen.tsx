import React, { useCallback } from "react";

import {
  Text,
  StyleSheet,
  Pressable,
  View,
  TouchableHighlight,
  StatusBar,
} from "react-native";
import { User } from "@/app/Backend/User";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, Border } from "./GlobalStyles";
import { AuthRequest, AuthSessionResult, CodeChallengeMethod } from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { useAuthRequest, ResponseType } from 'expo-auth-session';
import { useState, useEffect } from 'react';
import * as Crypto from 'expo-crypto';
import { encode as b64encode, decode as base64decode } from 'base-64';
import * as Random from 'expo-random';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Linking from 'expo-linking';
import RegistrationAge from "./RegistrationAge";
import { createOrUpdateUser } from '@/app/Backend/api'; // Убедитесь, что путь к api.ts правильный
import * as FileSystem from 'expo-file-system';// Импорт функции для записи в файл
import { join } from 'path';

// Инициализация редиректа для AuthSession
WebBrowser.maybeCompleteAuthSession();
// Конфигурация для VK
const VK_APP_SECRET = 'qBFkEipUvTTZvcFKP381'; // Замените на ваш секретный ключ приложения VK
const VK_APP_ID = '51950862'; // Замените на ваш ID приложения VK
const device_id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
const redirectUri =  encodeURI(`vk${VK_APP_ID}://vk.com/blank.html`);
const redirectUri1 =  encodeURI(`http://localhost`);

const redirectUri2 = encodeURI(`vk${VK_APP_ID}://` + Linking.createURL(`RegistrationAge`, {
  })+ 'vk.com/blank.html');

console.log(redirectUri)

async function generateRandomString(length: number): Promise<string> {
    const validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    const randomBytes = await Crypto.getRandomBytesAsync(length);
    let randomString = '';
    for (let i = 0; i < randomBytes.byteLength; i++) {
      randomString += validChars.charAt(randomBytes[i] % validChars.length);
    }
    return randomString;
  }
  
  // Функция для кодирования в base64 URL
  const base64URLEncode = (str: ArrayBuffer): string => {
    let output = '';
    const bytes = new Uint8Array(str);
    for (let i = 0; i < bytes.byteLength; i++) {
      output += String.fromCharCode(bytes[i]);
    }
    return btoa(output)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');
  };
  
  // Функция для создания SHA256 хеша
  async function sha256(buffer: string): Promise<ArrayBuffer> {
    try {
      const digest = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        buffer,
        { encoding: Crypto.CryptoEncoding.BASE64 }
      );
      const raw = atob(digest);
      const result = new Uint8Array(raw.length);
      for (let i = 0; i < raw.length; i++) {
        result[i] = raw.charCodeAt(i);
      }
      return result.buffer;
    } catch (error) {
      console.error('Ошибка при создании SHA256:', error);
      throw error; // Перебрасываем ошибку для последующей обработки
    }
  }
  
  // Функция для генерации code_challenge из code_verifier
  const generateCodeChallenge = async (verifier: string): Promise<string> => {
    try {
      const hashed = await sha256(verifier);
      const challenge = base64URLEncode(hashed);
      console.log('codeChallenge сгенерирован:', challenge);
      return challenge;
    } catch (error) {
      console.error('Ошибка при генерации codeChallenge:', error);
      return ''; // Возвращаем пустую строку в случае ошибки
    }
  };


// Компонент VKidScreen
const VKidScreen = () => {
  StatusBar.setBackgroundColor('#ECE5D8');
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [VKId, setVKId] = useState(generateRandomString(6));
  const [userId, setUserId] = useState(generateRandomString(6));
  const [codeChallenge, setCodeChallenge] = useState<string>('');
  const [codeVerifier, setCodeVerifier] = useState<string>('');
  const [stateValue, setStateValue] = useState<string>('');
  //const [response, setResponse] = useState<AuthSessionResult | null>(null);
  const [authUrl, setAuthUrl] = useState('');


  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Code,
      clientId: VK_APP_ID,
      scopes: ['email', 'phone'], // Указываем необходимые права доступа
      redirectUri: redirectUri,
      state: stateValue,
      codeChallenge: codeChallenge,
      codeChallengeMethod: "s256", // Используйте 'S256' для PKCE
    },
    { authorizationEndpoint: 'https://id.vk.com/authorize' }
  );
  
  const setupAuth = useCallback(async () => {
    const newCodeVerifier = await generateRandomString(55);
    const newStateValue = await generateRandomString(32);
    setCodeVerifier(newCodeVerifier);
    setStateValue(newStateValue);
    const newCodeChallenge = await generateCodeChallenge(newCodeVerifier);
    setCodeChallenge(newCodeChallenge);
    // Обновляем URL с учетом новых параметров
    const newAuthUrl = `https://id.vk.com/authorize?response_type=code&client_id=${VK_APP_ID}&scope=email%20phone&redirect_uri=${redirectUri}&state=${newStateValue}&code_challenge=${newCodeChallenge}&code_challenge_method=s256`;
    setAuthUrl(newAuthUrl);
  }, []);
  
  useEffect(() => {
    setupAuth();
    const handleRedirect = async (event: { url: string }) => {
      let { queryParams } = Linking.parse(event.url);
      if (queryParams?.state !== stateValue) {
        throw new Error('Invalid state value');
      }
      if (queryParams?.code && typeof queryParams.code === 'string') {
        await fetchAccessToken(queryParams.code);
      }
    };
  
    const subscription = Linking.addEventListener('url', handleRedirect);
  
    return () => {
      subscription?.remove();
    };
  }, [setupAuth]);
  
  // Получение Access Token
  const fetchAccessToken = async (code: string) => {
    try {
      const response = await fetch('https://id.vk.com/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          client_id: VK_APP_ID,
          code_verifier: codeVerifier,
          device_id: device_id, // Убедитесь, что device_id сохранен в вашем приложении
          code: code,
          redirect_uri: redirectUri,
        }).toString(),
      });
      const data = await response.json();
      if (data.access_token) {
        await AsyncStorage.setItem('userToken', data.access_token);
      } else {
        console.error('Ошибка при получении токена:', data.error_description || 'Неизвестная ошибка');
      }
    } catch (error) {
      console.error('Ошибка при обмене кода на токен:', error);
    }
  };
  
  const handlePress = async () => {
    if (!authUrl) {
        console.error('Ошибка: URL для аутентификации не загружен');
        return;
    }

    console.log(stateValue);
    promptAsync();

    // Данные пользователя
    const userData = {
        userId: '1',
        VKId: 'andrew.paladi',
        firstName: 'Андрей',
        lastName: 'Палади',
        age: 20,
        city: 'Москва',
        profilePhoto: "https://cs.pikabu.ru/post_img/2013-01_2/1357482852_1814017829.jpg",
        profileDescription: '',
        friendsList: [],
        myReviews: [],
        subscriptionStatus: false,
    };

    try {
        // Создаем или обновляем пользователя на сервере
        const response = await createOrUpdateUser(userData);
        console.log('Пользователь успешно создан или обновлен:', response);

        // Путь к файлу user.json
        const userFilePath = `${FileSystem.documentDirectory}data/user.json`;

        // Создаем директорию, если она не существует
        await FileSystem.makeDirectoryAsync(`${FileSystem.documentDirectory}data`, { intermediates: true });

        // Сохраняем данные пользователя локально
        await FileSystem.writeAsStringAsync(userFilePath, JSON.stringify(userData, null, 2));
        console.log('Данные пользователя сохранены локально в', userFilePath);
    } catch (error) {
        console.error('Ошибка при создании или обновлении пользователя:', error);
    }

    navigation.navigate('RegistrationAge');
};
  
  useEffect(() => {
    if (response?.type === 'success' && response.params?.code) {
      fetchAccessToken(response.params.code);
    }
  }, [response]);


  //Отображение визуальной части приложения ->


  return (
    <View style={styles.startScreen}>
      <Image
        source={require('@/assets/images/bg.png')}
        style={styles.bgIcon}
      />
      <Text style={styles.text}>{`Присоединитесь 
и делитесь анонимными отзывами`}</Text>
      
      <TouchableHighlight
        style={[styles.button, styles.buttonFlexBox]}
        underlayColor="#fff"
        onPress={() =>
            handlePress()
            //promptAsync({ url: authUrl })
            }
      >
        <View style={[styles.buttonLabel, styles.buttonFlexBox]}>
          <Image
            style={styles.newVkLogoColor48Icon}
            contentFit="cover"
            source={require("./VKLogo.png")}
          />
          <Text style={styles.buttonLabel1}>Войти с VK ID</Text>
        </View>
      </TouchableHighlight>


      
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  bgIcon: {
    width: "100%",
    height: "100%",
  },
  text: {
    marginLeft: -172.5,
    top: 150,
    left: "50%",
    fontSize: FontSize.mobileH1_size,
    letterSpacing: -0.8,
    lineHeight: 39,
    fontWeight: "900",
    //fontFamily: 'NanitoSans',
    color: Color.black,
    textAlign: "left",
    width: 341,
    position: "absolute",
  },
  newVkLogoColor48Icon: {
    width: 24,
    height: 24,
  },
  buttonLabel1: {
    fontSize: FontSize.systemFontHeadline1_size,
    letterSpacing: 0,
    lineHeight: 21,
    fontWeight: "500",
    color: Color.white,
    textAlign: "center",
    marginLeft: 83,
  },
  buttonLabel: {
    paddingHorizontal: 4,
    paddingVertical: 0,
  },
  button: {
    marginTop: 212,
    width: "92%",
    top: "50%",
    right: "4%",
    left: "4%",
    borderRadius: 8,
    backgroundColor: "#2688eb",
    justifyContent: "space-between",
    padding: 10,
    position: "absolute",
  },
  startScreen: {
    backgroundColor: Color.background,
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});

export default VKidScreen;
