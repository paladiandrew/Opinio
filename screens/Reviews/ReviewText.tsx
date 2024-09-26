import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Padding } from "./GlobalStyles";

const ReviewText = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.reviewtext}>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <View style={styles.frame}>
        <Pressable style={styles.close} onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/close1.png")}
          />
        </Pressable>
        <View style={styles.functional}>
          <View style={styles.bg} />
          <View style={styles.review}>
            <View style={styles.bg1} />
            <Image
              style={styles.functionalIcon}
              contentFit="cover"
              source={require("../assets/functional.png")}
            />
            <Text style={styles.text}>
              Я обладаю уникальными способностями в анализе информации,
              генерации идей и поддержке ваших творческих устремлений.
            </Text>
            <View style={styles.date}>
              <Text style={styles.text1}>21 год</Text>
              <Text style={styles.text2}>Москва</Text>
            </View>
            <Text style={styles.text3}>Владимир Булич</Text>
            <View style={styles.tags}>
              <View style={styles.rating}>
                <Text style={styles.text4}>72 отзыва</Text>
              </View>
              <View style={styles.rating1}>
                <Text style={styles.text4}>14 подписчиков</Text>
              </View>
              <View style={styles.rating1}>
                <Text style={styles.text4}>7 отзывов оставлено</Text>
              </View>
            </View>
            <Image
              style={styles.avatarIcon}
              contentFit="cover"
              source={require("../assets/avatar.png")}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.2}
            onPress={() => {}}
          >
            <View style={styles.buttonChild} />
            <Text style={styles.text7}>Оставить отзыв</Text>
          </TouchableOpacity>
          <View style={styles.review1}>
            <TextInput
              style={styles.bg2}
              placeholder="Начните писать отзыв здесь"
            />
            <View style={styles.tag}>
              <Text style={styles.text4}>Работа</Text>
            </View>
          </View>
          <Text style={styles.text9}>Вы пишете отзыв</Text>
          <TouchableOpacity
            style={styles.vector}
            activeOpacity={0.2}
            onPress={() => {}}
          >
            <Image
              style={styles.icon1}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameIcon: {
    position: "absolute",
    top: -45,
    left: -425,
    width: 1226,
    height: 908,
    overflow: "hidden",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  close: {
    width: 46,
    height: 46,
    marginLeft: 15,
  },
  bg: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.background,
    width: 375,
    height: 696,
  },
  bg1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.background,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    width: 345,
    height: 239,
  },
  functionalIcon: {
    position: "absolute",
    top: 22,
    left: 321,
    width: 2,
    height: 6,
  },
  text: {
    position: "absolute",
    top: 165,
    left: 15,
    fontSize: FontSize.mobileT2_size,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.mobileT5,
    color: Color.black,
    textAlign: "left",
    width: 315,
  },
  text1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: FontSize.mobileT4_size,
    fontWeight: "600",
    fontFamily: FontFamily.mobileT5,
    color: Color.black,
    textAlign: "left",
  },
  text2: {
    position: "absolute",
    top: 0,
    left: 45,
    fontSize: FontSize.mobileT4_size,
    fontWeight: "600",
    fontFamily: FontFamily.mobileT5,
    color: Color.black,
    textAlign: "left",
  },
  date: {
    position: "absolute",
    top: 100,
    left: 15,
    width: 85,
    height: 15,
    opacity: 0.5,
  },
  text3: {
    position: "absolute",
    top: 77,
    left: 15,
    fontSize: FontSize.systemFontHeadline1_size,
    letterSpacing: -0.1,
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: FontFamily.mobileT4,
    color: Color.black,
    textAlign: "left",
  },
  text4: {
    position: "relative",
    fontSize: FontSize.mobileT4_size,
    fontWeight: "700",
    fontFamily: FontFamily.mobileT4,
    color: Color.black,
    textAlign: "left",
  },
  rating: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_5xs,
    paddingTop: Padding.p_10xs,
    paddingBottom: Padding.p_11xs,
  },
  rating1: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_5xs,
    paddingTop: Padding.p_10xs,
    paddingBottom: Padding.p_11xs,
    marginLeft: 5,
  },
  tags: {
    position: "absolute",
    top: 130,
    left: 15,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  avatarIcon: {
    position: "absolute",
    top: 15,
    left: 15,
    width: 47,
    height: 47,
  },
  review: {
    position: "absolute",
    top: 117,
    left: 15,
    width: 345,
    height: 239,
  },
  buttonChild: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.darkBeige,
    width: 345,
    height: 48,
  },
  text7: {
    position: "absolute",
    marginLeft: -54.5,
    top: "31.25%",
    left: "50%",
    fontSize: FontSize.mobileT2_size,
    fontWeight: "700",
    fontFamily: FontFamily.mobileT4,
    color: Color.black,
    textAlign: "center",
    opacity: 0.2,
  },
  button: {
    position: "absolute",
    top: 614,
    left: 15,
    width: 345,
    height: 48,
  },
  bg2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    width: 345,
    height: 93,
  },
  tag: {
    position: "absolute",
    top: 20,
    left: 20,
    borderRadius: Border.br_81xl,
    backgroundColor: "#aadcae",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 6,
    paddingTop: Padding.p_10xs,
    paddingBottom: Padding.p_11xs,
  },
  review1: {
    position: "absolute",
    top: 371,
    left: 15,
    width: 345,
    height: 93,
  },
  text9: {
    position: "absolute",
    marginLeft: -172.5,
    top: 20,
    left: "50%",
    fontSize: FontSize.mobileH1_size,
    letterSpacing: -0.8,
    lineHeight: 36,
    fontWeight: "800",
    fontFamily: FontFamily.mobileH1,
    color: Color.black,
    textAlign: "left",
    width: 250,
  },
  icon1: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vector: {
    position: "absolute",
    left: "92%",
    top: "3.02%",
    right: "5.6%",
    bottom: "95.69%",
    width: "2.4%",
    height: "1.29%",
  },
  functional: {
    position: "relative",
    width: 375,
    height: 696,
    marginTop: 15,
  },
  frame: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: Color.colorGray_100,
    width: 375,
    height: 812,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 55,
  },
  reviewtext: {
    position: "relative",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.background,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ReviewText;
