import * as React from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, Border } from "./GlobalStyles";
import MyMenu from "../BottomBarComponent/MyMenu";

const MenuMain = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.menumain]}>
      <View style={[styles.frame, styles.framePosition]}>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.buttonLayout}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("MenuReviews")}
          >
            <View style={[styles.buttonChild, styles.buttonLayout]} />
            <Text style={[styles.text, styles.textTypo]}>Мои отзывы</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button1, styles.buttonLayout]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("MenuFriends")}
          >
            <View style={[styles.buttonChild, styles.buttonLayout]} />
            <Text style={[styles.text1, styles.textTypo]}>Мои подписки</Text>
          </TouchableOpacity>
          <Pressable
            style={[styles.button1, styles.buttonLayout]}
            onPress={() => navigation.navigate("MenuAbout")}
          >
            <View style={[styles.buttonChild, styles.buttonLayout]} />
            <Text style={[styles.text2, styles.textTypo]}>О нас</Text>
          </Pressable>
          <Pressable
            style={[styles.button1, styles.buttonLayout]}
            onPress={() => navigation.navigate("MenuExit")}
          >
            <View style={[styles.buttonChild, styles.buttonLayout]} />
            <Text style={[styles.text3, styles.textTypo]}>
              Выйти из профиля
            </Text>
          </Pressable>
        </View>
      </View>
      <MyMenu activeButton={"Menu"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  buttonLayout: {
    height: 48,
    width: 345,
  },
  textTypo: {
    textAlign: "center",
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.mobileT3_size,
    left: "50%",
    top: "31.25%",
    position: "absolute",
  },
  buttonChild: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    marginLeft: -42.5,
  },
  text1: {
    marginLeft: -49.5,
  },
  button1: {
    marginTop: 5,
  },
  text2: {
    marginLeft: -19.5,
  },
  text3: {
    marginLeft: -64.5,
  },
  buttons: {
    height: 287,
  },
  frame: {
    backgroundColor: Color.colorGray_100,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 15,
    paddingVertical: 21,
    overflow: "hidden",
    height: 812,
  },
  menumain: {
    backgroundColor: Color.background,
    flex: 1,
  },
});

export default MenuMain;
