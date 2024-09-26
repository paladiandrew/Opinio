import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Button } from "@rneui/themed";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontFamily, Padding, FontSize } from "./GlobalStyles";

const ReviewTag = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.reviewtag, styles.bg1Layout1]}>
      <Image
        style={styles.bgIcon}
        contentFit="cover"
        source={require("../assets/bg.png")}
      />
      <View style={[styles.blurBg, styles.bgPosition]} />
      <View style={[styles.functional, styles.bgPosition]}>
        <View style={[styles.bg, styles.bgPosition]} />
        <View style={[styles.review, styles.bg1Layout]}>
          <View style={[styles.bg1, styles.bg1Layout]} />
          <Image
            style={styles.functionalIcon}
            contentFit="cover"
            source={require("../assets/functional.png")}
          />
          <Text style={[styles.text, styles.textFlexBox]}>
            Я обладаю уникальными способностями в анализе информации, генерации
            идей и поддержке ваших творческих устремлений.
          </Text>
          <View style={styles.date}>
            <Text style={[styles.text1, styles.textFlexBox]}>21 год</Text>
            <Text style={[styles.text2, styles.textFlexBox]}>Москва</Text>
          </View>
          <Text style={[styles.text3, styles.textTypo2]}>Владимир Булич</Text>
          <View style={styles.tags}>
            <View style={styles.ratingSpaceBlock}>
              <Text style={[styles.text4, styles.textTypo2]}>72 отзыва</Text>
            </View>
            <View style={[styles.rating1, styles.ratingSpaceBlock]}>
              <Text style={[styles.text4, styles.textTypo2]}>
                14 подписчиков
              </Text>
            </View>
            <View style={[styles.rating1, styles.ratingSpaceBlock]}>
              <Text style={[styles.text4, styles.textTypo2]}>
                7 отзывов оставлено
              </Text>
            </View>
          </View>
          <Image
            style={styles.avatarIcon}
            contentFit="cover"
            source={require("../assets/avatar.png")}
          />
        </View>
        <View style={[styles.categories, styles.text23Position]}>
          <View style={styles.categoryLayout}>
            <Button
              radius={5}
              iconPosition="left"
              type="solid"
              color="#e9dbe9"
              onPress={() => navigation.navigate("ReviewText")}
              containerStyle={styles.rectangleButtonBtn}
              buttonStyle={styles.rectangleButtonBtn1}
            />
            <Text style={[styles.text7, styles.textTypo1]}>
              Доступен для чтения только платным пользователям. Отзывы с
              нецензурной лексикой и интимной информацией нельзя публиковать вне
              этого тега.
            </Text>
            <Text style={[styles.text8, styles.textPosition]}>+16</Text>
          </View>
          <View style={[styles.category1, styles.categoryLayout]}>
            <Button
              radius={5}
              iconPosition="left"
              type="solid"
              color="#aadcae"
              onPress={() => navigation.navigate("ReviewText")}
              containerStyle={styles.rectangleButton1Btn}
              buttonStyle={styles.rectangleButton1Btn1}
            />
            <Text style={[styles.text9, styles.textTypo1]}>
              В этом теге вы можете писать об опыте работы с человеком.
            </Text>
            <Text style={[styles.text8, styles.textPosition]}>Работа</Text>
          </View>
          <View style={[styles.category1, styles.categoryLayout]}>
            <Button
              radius={5}
              iconPosition="left"
              type="solid"
              color="#dfe0bd"
              onPress={() => navigation.navigate("ReviewText")}
              containerStyle={styles.rectangleButton2Btn}
              buttonStyle={styles.rectangleButton2Btn1}
            />
            <Text style={[styles.text9, styles.textTypo1]}>
              В этом теге вы можете делиться впечатлениями о совместной учёбе.
            </Text>
            <Text style={styles.textPosition}>
              <Text style={styles.textTypo}>Уч</Text>
              <Text style={styles.text14}>ёба</Text>
            </Text>
          </View>
          <View style={[styles.category1, styles.categoryLayout]}>
            <Button
              radius={5}
              iconPosition="left"
              type="solid"
              color="#efe3b4"
              onPress={() => navigation.navigate("ReviewText")}
              containerStyle={styles.rectangleButton3Btn}
              buttonStyle={styles.rectangleButton3Btn1}
            />
            <Text style={[styles.text9, styles.textTypo1]}>
              В этом теге вы можете обсуждать общие хобби и интересы.
            </Text>
            <Text style={[styles.text8, styles.textPosition]}>Увлечения</Text>
          </View>
          <View style={[styles.category1, styles.categoryLayout]}>
            <Button
              radius={5}
              iconPosition="left"
              type="solid"
              color="#cee0df"
              onPress={() => navigation.navigate("ReviewText")}
              containerStyle={styles.rectangleButton4Btn}
              buttonStyle={styles.rectangleButton4Btn1}
            />
            <Text style={[styles.text9, styles.textTypo1]}>
              В этом теге вы можете рассказывать о дружеских отношениях.
            </Text>
            <Text style={[styles.text8, styles.textPosition]}>Дружба</Text>
          </View>
          <View style={[styles.category1, styles.categoryLayout]}>
            <Button
              radius={5}
              iconPosition="left"
              type="solid"
              color="#f5d8cb"
              onPress={() => navigation.navigate("ReviewText")}
              containerStyle={styles.rectangleButton5Btn}
              buttonStyle={styles.rectangleButton5Btn1}
            />
            <Text style={[styles.text9, styles.textTypo1]}>
              В этом теге вы можете делиться информацией о романтических
              отношениях.
            </Text>
            <Text style={[styles.text8, styles.textPosition]}>
              Личная жизнь
            </Text>
          </View>
          <View style={[styles.category1, styles.categoryLayout]}>
            <Button
              radius={5}
              iconPosition="left"
              type="solid"
              color="#f3eee6"
              onPress={() => navigation.navigate("ReviewText")}
              containerStyle={styles.rectangleButton6Btn}
              buttonStyle={styles.rectangleButton6Btn1}
            />
            <Text style={[styles.text9, styles.textTypo1]}>
              В этом теге вы можете обсуждать любые другие темы, не подходящие
              под остальные категории.
            </Text>
            <Text style={[styles.text8, styles.textPosition]}>Другое</Text>
          </View>
        </View>
        <Text style={[styles.text23, styles.text23Position]}>
          Вы пишете отзыв
        </Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleButtonBtn: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleButtonBtn1: {
    borderRadius: 20,
    width: 345,
    height: 102,
  },
  rectangleButton1Btn: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleButton1Btn1: {
    borderRadius: 20,
    width: 345,
    height: 102,
  },
  rectangleButton2Btn: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleButton2Btn1: {
    borderRadius: 20,
    width: 345,
    height: 102,
  },
  rectangleButton3Btn: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleButton3Btn1: {
    borderRadius: 20,
    width: 345,
    height: 102,
  },
  rectangleButton4Btn: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleButton4Btn1: {
    borderRadius: 20,
    width: 345,
    height: 102,
  },
  rectangleButton5Btn: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleButton5Btn1: {
    borderRadius: 20,
    width: 345,
    height: 102,
  },
  rectangleButton6Btn: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleButton6Btn1: {
    borderRadius: 20,
    width: 345,
    height: 102,
  },
  bg1Layout1: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.background,
  },
  bgPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  bg1Layout: {
    height: 239,
    width: 345,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  textTypo2: {
    fontFamily: FontFamily.mobileT4,
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
  text23Position: {
    left: "50%",
    marginLeft: -172.5,
    position: "absolute",
  },
  textTypo1: {
    width: 304,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.mobileT4_size,
    opacity: 0.5,
    textAlign: "left",
    fontFamily: FontFamily.mobileT5,
    fontWeight: "600",
    left: 15,
    position: "absolute",
  },
  textPosition: {
    color: Color.black,
    lineHeight: 27,
    fontSize: FontSize.size_lg,
    top: 12,
    marginLeft: -157.5,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  categoryLayout: {
    height: 102,
    alignSelf: "stretch",
  },
  bgIcon: {
    width: 1128,
    height: 908,
  },
  blurBg: {
    backgroundColor: Color.colorGray_100,
    top: 0,
    height: 812,
  },
  bg: {
    bottom: 419,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    height: 696,
    backgroundColor: Color.background,
  },
  bg1: {
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    left: 0,
    top: 0,
    backgroundColor: Color.background,
    borderRadius: Border.br_11xl,
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
    fontFamily: FontFamily.mobileT5,
    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
    lineHeight: 18,
    left: 15,
  },
  text1: {
    fontSize: FontSize.mobileT4_size,
    fontFamily: FontFamily.mobileT5,
    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
    left: 0,
    top: 0,
  },
  text2: {
    left: 45,
    fontSize: FontSize.mobileT4_size,
    fontFamily: FontFamily.mobileT5,
    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
    top: 0,
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
  avatarIcon: {
    top: 15,
    width: 47,
    height: 47,
    left: 15,
    position: "absolute",
  },
  review: {
    top: 117,
    left: 15,
  },
  text7: {
    top: 46,
    height: 45,
  },
  text8: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  text9: {
    top: 61,
  },
  category1: {
    marginTop: 5,
  },
  textTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  text14: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  categories: {
    top: 371,
    width: 345,
    marginLeft: -172.5,
  },
  text23: {
    top: 20,
    fontSize: FontSize.mobileH1_size,
    letterSpacing: -0.8,
    lineHeight: 36,
    fontWeight: "800",
    fontFamily: FontFamily.mobileH1,
    width: 250,
    textAlign: "left",
    color: Color.black,
  },
  vectorIcon: {
    height: "0.81%",
    width: "2.4%",
    top: "1.88%",
    right: "5.6%",
    bottom: "97.31%",
    left: "92%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  functional: {
    bottom: -419,
    height: 1115,
  },
  reviewtag: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.background,
  },
});

export default ReviewTag;
