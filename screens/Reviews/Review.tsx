import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Padding, Border, FontSize } from "./GlobalStyles";

const Review = () => {
  return (
    <View style={styles.bgLayout}>
      <View style={[styles.bg, styles.bgPosition]} />
      <Image
        style={styles.functionalIcon}
        contentFit="cover"
        source={require("./functional.png")}
      />
      <Text style={[styles.text, styles.textTypo1]}>
        Я обладаю уникальными способностями в анализе информации, генерации идей
        и поддержке ваших творческих устремлений.
      </Text>
      <View style={styles.date}>
        <Text style={[styles.text1, styles.textTypo1]}>21 год</Text>
        <Text style={[styles.text2, styles.textTypo1]}>Москва</Text>
      </View>
      <Text style={[styles.text3, styles.textTypo]}>Владимир Булич</Text>
      <View style={styles.tags}>
        <View style={styles.ratingSpaceBlock}>
          <Text style={[styles.text4, styles.textTypo]}>72 отзыва</Text>
        </View>
        <View style={[styles.rating1, styles.ratingSpaceBlock]}>
          <Text style={[styles.text4, styles.textTypo]}>14 подписчиков</Text>
        </View>
        <View style={[styles.rating1, styles.ratingSpaceBlock]}>
          <Text style={[styles.text4, styles.textTypo]}>
            7 отзывов оставлено
          </Text>
        </View>
      </View>
      <Image
        style={[styles.buttonIcon, styles.rating3Position]}
        contentFit="cover"
        source={require("./button.png")}
      />
      <View style={[styles.rating3, styles.rating3Position]}>
        <Text style={[styles.text4, styles.textTypo]}>Ссылка на VK</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgPosition: {
    left: 0,
    top: 0,
  },
  textTypo1: {
    textAlign: "left",
    color: Color.black,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo: {
    fontWeight: "700",
    textAlign: "left",
    color: Color.black,
  },
  ratingSpaceBlock: {
    paddingBottom: Padding.p_11xs,
    paddingTop: Padding.p_10xs,
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
    backgroundColor: Color.white,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
  },
  rating3Position: {
    top: 15,
    position: "absolute",
  },
  bg: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.background,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    position: "absolute",
    height: 239,
    width: 345,
  },
  functionalIcon: {
    top: 22,
    left: 321,
    width: 2,
    height: 6,
    position: "absolute",
  },
  text: {
    top: 165,
    fontSize: FontSize.mobileT2_size,
    width: 315,
    lineHeight: 18,
    left: 15,
  },
  text1: {
    fontSize: FontSize.mobileT4_size,
    left: 0,
    top: 0,
  },
  text2: {
    left: 45,
    fontSize: FontSize.mobileT4_size,
    top: 0,
    textAlign: "left",
    color: Color.black,
    fontWeight: "600",
  },
  date: {
    top: 100,
    width: 85,
    height: 15,
    opacity: 0.5,
    left: 15,
    position: "absolute",
  },
  text3: {
    top: 77,
    fontSize: FontSize.systemFontHeadline1_size,
    letterSpacing: -0.1,
    lineHeight: 18,
    left: 15,
    position: "absolute",
  },
  text4: {
    fontSize: FontSize.mobileT4_size,
  },
  rating1: {
    marginLeft: 5,
  },
  tags: {
    top: 130,
    flexDirection: "row",
    left: 15,
    position: "absolute",
  },
  buttonIcon: {
    width: 47,
    height: 47,
    left: 15,
  },
  rating3: {
    left: 215,
    paddingBottom: Padding.p_11xs,
    paddingTop: Padding.p_10xs,
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
    backgroundColor: Color.white,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
  },
  bgLayout: {
    height: 239,
    width: 345,
  },
});

export default Review;
