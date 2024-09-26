import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, Padding } from "./GlobalStyles";

const ConfirmDelete = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.confirmdelete, styles.iconLayout1]}>
      <View style={styles.bgLayout}>
        <View style={[styles.bg, styles.bgBorder]} />
        <Image
          style={styles.functionalIcon}
          contentFit="cover"
          source={require("../assets/functional.png")}
        />
        <Text style={[styles.text, styles.textFlexBox]}>
          Обладает высоким профессионализмом и ответственным подходом к задачам.
          Всегда готов выслушать мнение коллег и находить конструктивные
          решения.
        </Text>
        <View style={styles.date}>
          <Text style={[styles.text1, styles.textTypo1]}>24.04.2024</Text>
          <Text style={[styles.text2, styles.textTypo1]}>12:23</Text>
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
              source={require("../assets/frame-78501.png")}
            />
            <Text style={[styles.text5, styles.textTypo]}>52</Text>
          </View>
        </View>
        <Image
          style={styles.avatarIcon}
          contentFit="cover"
          source={require("../assets/avatar.png")}
        />
        <View style={[styles.grade, styles.tagsFlexBox]}>
          <Image
            style={[styles.dislikeIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/dislike.png")}
          />
          <Image
            style={[styles.likeIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/like.png")}
          />
        </View>
      </View>
      <View style={[styles.review1, styles.bg1Layout]}>
        <View style={[styles.bg1, styles.bg1Layout]} />
        <Pressable style={styles.vector} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <Text style={[styles.text6, styles.textPosition]}>
          Отзыв нельзя будет восстановить после его удаления,
        </Text>
        <Pressable style={[styles.button, styles.buttonLayout]}>
          <View style={[styles.buttonChild, styles.buttonLayout]} />
          <Text style={[styles.text7, styles.textTypo]}>Удалить отзыв</Text>
        </Pressable>
        <Text style={[styles.text8, styles.textPosition]}>{`Вы уверены
в удалении отзыва?`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  bgBorder: {
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.background,
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
    lineHeight: 18,
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.mobileT4_size,
    textAlign: "left",
    color: Color.black,
  },
  textTypo: {
    fontWeight: "700",
  },
  tagsFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  tagSpaceBlock: {
    paddingBottom: Padding.p_11xs,
    paddingTop: Padding.p_10xs,
    alignItems: "center",
    borderRadius: Border.br_81xl,
    flexDirection: "row",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  bg1Layout: {
    height: 277,
    width: 345,
  },
  textPosition: {
    left: 20,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  buttonLayout: {
    height: 48,
    width: 315,
    position: "absolute",
  },
  bg: {
    height: 213,
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
    top: 82,
    width: 272,
    fontWeight: "600",
    fontSize: FontSize.mobileT3_size,
    left: 15,
  },
  text1: {
    fontWeight: "600",
    left: 0,
    top: 0,
    position: "absolute",
  },
  text2: {
    left: 69,
    fontWeight: "600",
    top: 0,
    fontSize: FontSize.mobileT4_size,
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
    fontSize: FontSize.systemFontHeadline1_size,
    letterSpacing: -0.1,
    left: 72,
    textAlign: "left",
    color: Color.black,
    lineHeight: 18,
    position: "absolute",
  },
  text4: {
    fontSize: FontSize.mobileT4_size,
    textAlign: "left",
    color: Color.black,
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
    textAlign: "left",
    color: Color.black,
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
    top: 15,
    width: 47,
    height: 47,
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
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.background,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
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
  text6: {
    top: 153,
    width: 264,
    fontWeight: "600",
    lineHeight: 18,
    left: 20,
    fontSize: FontSize.mobileT3_size,
  },
  buttonChild: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.black,
    left: 0,
    top: 0,
  },
  text7: {
    marginLeft: -51.5,
    top: "31.25%",
    left: "50%",
    color: Color.white,
    textAlign: "center",
    fontSize: FontSize.mobileT3_size,
    position: "absolute",
  },
  button: {
    top: 214,
    left: 15,
  },
  text8: {
    top: 20,
    fontSize: FontSize.mobileH1_size,
    letterSpacing: -0.8,
    lineHeight: 36,
    fontWeight: "800",
    width: 269,
  },
  review1: {
    marginTop: 102,
  },
  confirmdelete: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_5xs,
    paddingTop: 199,
    paddingBottom: 21,
    overflow: "hidden",
    backgroundColor: Color.background,
    width: "100%",
  },
});

export default ConfirmDelete;
