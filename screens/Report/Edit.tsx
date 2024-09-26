import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, Padding, Border, FontSize } from "../Profiles/GlobalStyles";

const Edit = () => {
  return (
    <View style={styles.edit}>
      <View style={styles.bgLayout}>
        <View style={[styles.bg, styles.bgPosition]} />
        <Image
          style={styles.functionalIcon}
          contentFit="cover"
          source={require("./functional.png")}
        />
        <Text style={[styles.text, styles.textTypo3]}>
          Обладает высоким профессионализмом и ответственным подходом к задачам.
          Всегда готов выслушать мнение коллег и находить конструктивные
          решения.
        </Text>
        <View style={styles.date}>
          <Text style={[styles.text1, styles.textTypo3]}>24.04.2024</Text>
          <Text style={[styles.text2, styles.textTypo3]}>12:23</Text>
        </View>
        <Text style={[styles.text3, styles.textTypo]}>Таркан Андрей</Text>
        <View style={[styles.tags, styles.tagsFlexBox]}>
          <View style={[styles.tag, styles.tagSpaceBlock]}>
            <Text style={[styles.text4, styles.textTypo]}>Работа</Text>
          </View>
          <View style={[styles.rating, styles.tagSpaceBlock]}>
            <Image
              style={styles.ratingChild}
              contentFit="cover"
              source={require("./frame-78501.png")}
            />
            <Text style={[styles.text5, styles.textTypo]}>52</Text>
          </View>
        </View>
        <Image
          style={styles.avatarIcon}
          contentFit="cover"
          source={require("./avatar.png")}
        />
        <View style={[styles.grade, styles.tagsFlexBox]}>
          <Image
            style={[styles.dislikeIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("./dislike.png")}
          />
          <Image
            style={[styles.likeIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("./like.png")}
          />
        </View>
      </View>
      <View style={[styles.functional, styles.bg1Layout]}>
        <View style={[styles.bg1, styles.bg1Layout]} />
        <Text style={[styles.text6, styles.textPosition]}>Выберите жалобу</Text>
        <View style={styles.text7}>
          <Text style={[styles.text8, styles.textTypo3]}>
            Несоответствие тегов
          </Text>
          <Text style={[styles.text9, styles.textTypo3]}>
            Противоправное содержание
          </Text>
          <Text style={[styles.text9, styles.textTypo3]}>
            Оскорбления и нецензурная лексика
          </Text>
          <Text style={[styles.text9, styles.textTypo3]}>Другое</Text>
        </View>
        <View style={[styles.buttons, styles.tagsFlexBox]}>
          <Pressable style={styles.buttonLayout1}>
            <View
              style={[styles.buttonDeleteChild, styles.buttonChildPosition]}
            />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("./vector.png")}
            />
          </Pressable>
          <Pressable style={[styles.buttonEdit, styles.buttonLayout1]}>
            <View
              style={[styles.buttonDeleteChild, styles.buttonChildPosition]}
            />
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("./vector.png")}
            />
          </Pressable>
          <Pressable style={[styles.button, styles.buttonLayout]}>
            <View style={[styles.buttonChild, styles.buttonLayout]} />
            <Text style={[styles.text12, styles.textPosition]}>
              Оставить жалобу
            </Text>
          </Pressable>
        </View>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("./vector.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgPosition: {
    left: 0,
    position: "absolute",
  },
  textTypo3: {
    color: Color.black,

    fontWeight: "600",
    textAlign: "left",
  },
  textTypo: {

    fontWeight: "700",
    textAlign: "left",
    color: Color.black,
  },
  tagsFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  tagSpaceBlock: {
    paddingBottom: Padding.p_11xs,
    paddingTop: Padding.p_10xs,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  bg1Layout: {
    height: 292,
    width: 375,
  },
  textPosition: {
    left: "50%",

    fontWeight: "700",
    color: Color.black,
    position: "absolute",
  },
  buttonChildPosition: {
    borderRadius: Border.br_31xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonLayout1: {
    height: 48,
    width: 48,
  },
  buttonLayout: {
    width: 239,
    height: 48,
  },
  bg: {
    borderRadius: Border.br_11xl,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    top: 0,
    height: 213,
    width: 345,
    backgroundColor: Color.background,
    left: 0,
  },
  functionalIcon: {
    top: 22,
    left: 321,
    width: 2,
    height: 6,
    position: "absolute",
  },
  text: {
    top: 82,
    width: 272,
    textAlign: "left",
    lineHeight: 18,
    color: Color.black,
    fontWeight: "600",
    fontSize: FontSize.mobileT3_size,
    left: 15,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.mobileT4_size,
    textAlign: "left",
    left: 0,
    position: "absolute",
    top: 0,
  },
  text2: {
    left: 69,
    fontSize: FontSize.mobileT4_size,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  date: {
    top: 179,
    width: 98,
    height: 15,
    opacity: 0.5,
    left: 15,
    position: "absolute",
  },
  text3: {
    top: 18,
    letterSpacing: -0.1,
    fontSize: FontSize.systemFontHeadline1_size,
    lineHeight: 18,
    left: 72,
    position: "absolute",
  },
  text4: {
    fontSize: FontSize.mobileT4_size,
  },
  tag: {
    backgroundColor: Color.tagWork,
    paddingHorizontal: Padding.p_5xs,
  },
  ratingChild: {
    width: 8,
    height: 8,
    overflow: "hidden",
  },
  text5: {
    marginLeft: 4,
    fontSize: FontSize.mobileT4_size,
  },
  rating: {
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_7xs,
    marginLeft: 5,
  },
  tags: {
    top: 41,
    left: 72,
  },
  avatarIcon: {
    width: 47,
    height: 47,
    top: 15,
    left: 15,
    position: "absolute",
  },
  dislikeIcon: {
    borderRadius: Border.br_81xl,
    width: 24,
  },
  likeIcon: {
    borderRadius: 114,
    marginLeft: 5,
  },
  grade: {
    top: 174,
    left: 277,
  },
  bgLayout: {
    height: 213,
    width: 345,
  },
  bg1: {
    bottom: 0,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    left: 0,
    position: "absolute",
    backgroundColor: Color.background,
  },
  text6: {
    marginLeft: -172.5,
    top: 15,
    letterSpacing: -0.1,
    fontSize: FontSize.systemFontHeadline1_size,
    lineHeight: 18,
    textAlign: "left",
  },
  text8: {
    textAlign: "left",
    lineHeight: 18,
    color: Color.black,

    fontWeight: "600",
    fontSize: FontSize.mobileT3_size,
  },
  text9: {
    marginTop: 20,
    textAlign: "left",
    lineHeight: 18,
    color: Color.black,

    fontWeight: "600",
    fontSize: FontSize.mobileT3_size,
  },
  text7: {
    top: 53,
    left: 15,
    position: "absolute",
  },
  buttonDeleteChild: {
    backgroundColor: Color.colorLinen_100,
    height: 48,
    width: 48,
  },
  vectorIcon: {
    width: "29.17%",
    right: "35.42%",
    left: "35.42%",
    bottom: "33.33%",
    top: "33.33%",
    height: "33.33%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon1: {
    width: "33.33%",
    right: "33.33%",
    left: "33.33%",
    bottom: "33.33%",
    top: "33.33%",
    height: "33.33%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  buttonEdit: {
    marginLeft: 5,
  },
  buttonChild: {
    backgroundColor: Color.darkBeige,
    borderRadius: Border.br_31xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text12: {
    marginLeft: -59.5,
    top: "31.25%",
    textAlign: "center",
    opacity: 0.2,
    fontSize: FontSize.mobileT3_size,
    left: "50%",
  },
  button: {
    marginLeft: 5,
  },
  buttons: {
    top: 210,
    left: 15,
  },
  vectorIcon2: {
    height: "3.08%",
    width: "2.4%",
    top: "7.19%",
    right: "5.6%",
    bottom: "89.73%",
    left: "92%",
  },
  functional: {
    marginTop: 108,
  },
  edit: {
    flex: 1,
    width: "100%",
    height: 812,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.background,
  },
});

export default Edit;
