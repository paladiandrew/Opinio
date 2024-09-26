import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Padding, Border, FontSize, Color } from "./GlobalStyles";

const Reviews1 = () => {
  return (
    <View style={styles.reviews}>
      <View style={styles.review}>
        <View style={styles.bg} />
        <Image
          style={styles.functionalIcon}
          contentFit="cover"
          source={require("./functional.png")}
        />
        <Text style={styles.text}>
          Обладает высоким профессионализмом и ответственным подходом к задачам.
          Всегда готов выслушать мнение коллег и находить конструктивные
          решения.
        </Text>
        <View style={styles.date}>
          <Text style={styles.text1}>24.04.2024</Text>
        </View>
        <View style={[styles.tags, styles.tagsFlexBox]}>
          <Image
            style={styles.entrenchIcon}
            contentFit="cover"
            source={require("./entrench.png")}
          />
          <View style={[styles.tag, styles.tagSpaceBlock]}>
            <Text style={styles.textTypo}>Работа</Text>
          </View>
          <View style={[styles.rating, styles.tagSpaceBlock]}>
            <Image
              style={styles.ratingChild}
              contentFit="cover"
              source={require("./frame-78501.png")}
            />
            <Text style={[styles.text3, styles.textTypo]}>52</Text>
          </View>
        </View>
        <View style={[styles.grade, styles.tagsFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("./dislike1.png")}
          />
          <Image
            style={[styles.likeIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("./like2.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tagsFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  tagSpaceBlock: {
    paddingBottom: Padding.p_11xs,
    paddingTop: Padding.p_10xs,
    paddingHorizontal: Padding.p_7xs,
    alignItems: "center",
    borderRadius: Border.br_81xl,
    marginLeft: 5,
    flexDirection: "row",
  },
  textTypo: {
    fontWeight: "700",
    fontSize: FontSize.mobileT4_size,
    textAlign: "left",
    color: Color.black,
  },
  iconLayout: {
    height: 21,
    width: 21,
    borderRadius: Border.br_81xl,
  },
  bg: {
    borderRadius: Border.br_11xl,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    height: 178,
    width: 345,
    position: "absolute",
  },
  functionalIcon: {
    top: 22,
    left: 321,
    width: 2,
    height: 6,
    position: "absolute",
  },
  text: {
    top: 50,
    fontSize: FontSize.mobileT2_size,
    lineHeight: 18,
    width: 315,
    textAlign: "left",
    color: Color.black,
    fontWeight: "600",
    left: 15,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.mobileT4_size,
    textAlign: "left",
    color: Color.black,
    fontWeight: "600",
    left: 0,
    top: 0,
    position: "absolute",
  },
  date: {
    top: 145,
    width: 58,
    height: 15,
    opacity: 0.5,
    left: 15,
    position: "absolute",
  },
  entrenchIcon: {
    width: 20,
    height: 20,
  },
  tag: {
    backgroundColor: Color.tagWork,
    marginLeft: 5,
  },
  ratingChild: {
    width: 8,
    height: 8,
    overflow: "hidden",
  },
  text3: {
    letterSpacing: -0.3,
    marginLeft: 4,
  },
  rating: {
    marginLeft: 5,
    backgroundColor: Color.white,
  },
  tags: {
    top: 15,
    left: 15,
  },
  likeIcon: {
    marginLeft: 5,
  },
  grade: {
    top: 142,
    left: 283,
  },
  review: {
    height: 178,
    width: 345,
  },
  reviews: {
    marginTop: 10,
    position: "relative",
  },
});

export default Reviews1;
