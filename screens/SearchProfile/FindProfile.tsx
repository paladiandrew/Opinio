import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, TextInput } from "react-native";
import { Color, Border, FontSize } from "./GlobalStyles";
import Review from "../Reviews/Review";
import MyMenu from "../BottomBarComponent/MyMenu";
import { useState } from "react";
import { StatusBar } from "react-native";

const FindProfile = () => {
    StatusBar.setBackgroundColor('#ece5d8');
    const [text, setText] = useState('');
  return (
    <View style={styles.findprofile}>
      <Image
        style={styles.bgIcon}
        contentFit="cover"
        source={require("./bg1.png")}
      />
      <View style={[styles.frame, styles.frameLayout]}>
        <Image
          style={styles.frameLayout}
          contentFit="cover"
          source={require("./bg2.png")}
        />
        <View style={styles.frame1}>
    <View style={styles.bgLayout}>
        <TextInput
            style={[styles.bg, styles.bgLayout, styles.textInputStyle]}
            placeholder="Введите имя или VK ID"
            onChangeText={(newText) => setText(newText)}
            value={text}
          />
         {text.trim() !== '' && ( // Проверяем, не пустой ли текст
            <>
              <Pressable onPress={() => { setText('') }}>
                <Image
                  style={styles.likeIcon}
                  contentFit="cover"
                  source={require("./like1.png")}
                />
              </Pressable>
              <Pressable onPress={() => { /* ... ваш код для кнопки "vector" ... */ }}>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("./vector.png")}
                />
              </Pressable>
            </>
          )}
    </View>
    </View>
        <View style={styles.profiles}>
        <Review />
          <Text
            style={[styles.text1, styles.textTypo]}
          >{`Больше никого не нашли 
по вашему запросу.`}</Text>
        </View>
      </View>
      <MyMenu activeButton={"Search"}/>
    </View>
  );
};

const styles = StyleSheet.create({
    textInputStyle: {
        // ... ваши стили для TextInput 
        paddingHorizontal: 40, // Добавляем отступы для текста
        paddingVertical: 10, 
      },
  frameLayout: {
    height: 837,
    width: 1128,
  },
  bgLayout: {
    height: 48,
    width: 345,
  },
  textTypo: {
    color: Color.black,
    fontWeight: "600",
  },
  bgIcon: {
    width: 0,
    height: 0,
  },
  bg: {
    top: 0,
    left: 0,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    position: "absolute",
  },
  likeIcon: {
    top: 12,
    left: 309,
    borderRadius: 114,
    width: 24,
    height: 24,
    position: "absolute",
  },
  vectorIcon: {
    top: 17,
    left: 15,
    width: 15,
    height: 15,
    position: "absolute",
  },
  text: {
    top: "31.25%",
    left: "13.62%",
    fontSize: FontSize.mobileT2_size,
    lineHeight: 18,
    textAlign: "left",
    position: "absolute",
  },
  frame1: {
    top: 27,
    alignItems: "flex-end",
    justifyContent: "center",
    width: 345,
    left: 440,
    position: "absolute",
    overflow: "hidden",
  },
  text1: {
    fontSize: FontSize.mobileT4_size,
    textAlign: "center",
    width: 256,
    marginTop: 15,
  },
  profiles: {
    top: 91,
    height: 693,
    alignItems: "center",
    left: 440,
    position: "absolute",
  },
  frame: {
    top: 33,
    left: -424,
    position: "absolute",
    overflow: "hidden",
  },
  findprofile: {
    backgroundColor: Color.background,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default FindProfile;
