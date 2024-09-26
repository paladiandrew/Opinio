import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize } from "./GlobalStyles";

const MenuExit = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.menuexit, styles.frameLayout]}>
      <Image
        style={styles.bgIcon}
        contentFit="cover"
        source={require("./bg.png")}
      />
      <View style={[styles.frame, styles.bgPosition]}>
        <View style={[styles.review, styles.bgLayout]}>
          <View style={[styles.bg, styles.bgLayout]} />
          <Pressable style={styles.vector} onPress={() => navigation.goBack()}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("./close.png")}
            />
          </Pressable>
          <Text style={[styles.text, styles.textPosition]}>
            Ваш профиль и отзывы останутся в открытом доступе.
          </Text>
          <Pressable
            style={[styles.button, styles.buttonLayout]}
            onPress={() => navigation.goBack()}
          >
            <Pressable style={[styles.buttonChild, styles.buttonLayout]} />
            <Text style={styles.text1}>Выйти из профиля</Text>
          </Pressable>
          <Text style={[styles.text2, styles.textPosition]}>
            Вы уверены, что хотите выйти?
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 812,
    overflow: "hidden",
  },
  bgPosition: {
    left: 0,
    top: 0,
  },
  bgLayout: {
    height: 277,
    width: 345,
    position: "absolute",
  },
  textPosition: {
    textAlign: "left",
    color: Color.black,
    left: 20,
    position: "absolute",
  },
  buttonLayout: {
    height: 48,
    width: 315,
    position: "absolute",
  },
  bgIcon: {
    width: 1128,
    height: 908,
  },
  bg: {
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    left: 0,
    top: 0,
    backgroundColor: Color.background,
    borderRadius: Border.br_11xl,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: "100%",
  },
  vector: {
    left: "91.3%",
    top: "7.58%",
    right: "6.09%",
    bottom: "89.17%",
    width: "2.61%",
    height: "3.25%",
    position: "absolute",
  },
  text: {
    top: 153,
    lineHeight: 18,
    fontWeight: "600",
    width: 310,
    fontSize: FontSize.mobileT3_size,
  },
  buttonChild: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.black,
    left: 0,
    top: 0,
  },
  text1: {
    marginLeft: -64.5,
    top: "31.25%",
    left: "50%",
    fontWeight: "700",
    color: Color.white,
    textAlign: "center",
    fontSize: FontSize.mobileT3_size,
    position: "absolute",
  },
  button: {
    top: 214,
    left: 15,
  },
  text2: {
    top: 20,
    fontSize: FontSize.mobileH1_size,
    letterSpacing: -0.8,
    lineHeight: 40,
    fontWeight: "800",
    width: 269,
  },
  review: {
    top: 268,
    left: 15,
  },
  frame: {
    backgroundColor: Color.colorGray_100,
    width: "100%",
    position: "absolute",
    overflow: "hidden",
    height: "100%",
  },
  menuexit: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.background,
  },
});

export default MenuExit;
