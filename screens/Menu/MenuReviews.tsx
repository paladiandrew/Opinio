import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, Border, Padding } from "./GlobalStyles";
import MyMenu from "../BottomBarComponent/MyMenu";
//7
const MenuReviews = () => {
  return (
    <View style={styles.menureviews}>
      <Image
        style={styles.bgIcon}
        contentFit="cover"
        source={require("./bg1.png")}
      />
      <Text style={[styles.text, styles.textTypo2]}>
        оставленных вами отзывов
      </Text>
      <Text style={[styles.text1, styles.textTypo2]}>7</Text>
      <View style={[styles.reviews, styles.reviewsPosition]}>
        <View style={styles.review}>
          <View style={[styles.bg, styles.bgBorder]} />
          <Image
            style={styles.functionalIcon}
            contentFit="cover"
            source={require("./functional.png")}
          />
          <Text style={[styles.text2, styles.textTypo1]}>
            Обладает высоким профессионализмом и ответственным подходом к
            задачам. Всегда готов выслушать мнение коллег и находить
            конструктивные решения.
          </Text>
          <View style={[styles.date, styles.dateLayout]}>
            <Text style={[styles.text3, styles.textTypo1]}>24.04.2024</Text>
            <Text style={[styles.text4, styles.textTypo1]}>12:23</Text>
          </View>
          <Text style={[styles.text5, styles.textTypo]}>Таркан Андрей</Text>
          <View style={styles.tags}>
            <View style={[styles.tag, styles.tagSpaceBlock]}>
              <Text style={[styles.text6, styles.textTypo]}>Работа</Text>
            </View>
            <View style={[styles.rating, styles.tagSpaceBlock]}>
              <Image
                style={styles.ratingChild}
                contentFit="cover"
                source={require("./frame-78501.png")}
              />
              <Text style={[styles.text7, styles.textTypo]}>52</Text>
            </View>
          </View>
          <Image
            style={[styles.avatarIcon, styles.reviewsPosition]}
            contentFit="cover"
            source={require("./avatar.png")}
          />
          <View style={[styles.grade, styles.gradePosition]}>
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
        <View style={[styles.review1, styles.reviewSpaceBlock]}>
          <View style={[styles.bg1, styles.bgBorder]} />
          <Image
            style={styles.functionalIcon}
            contentFit="cover"
            source={require("./functional.png")}
          />
          <Text style={[styles.text2, styles.textTypo1]}>
            Его креативный подход и стремление к результату делают его ценным
            активом для любой команды.
          </Text>
          <View style={[styles.date1, styles.dateLayout]}>
            <Text style={[styles.text3, styles.textTypo1]}>24.04.2024</Text>
            <Text style={[styles.text4, styles.textTypo1]}>12:23</Text>
          </View>
          <Text style={[styles.text5, styles.textTypo]}>Владимир Булич</Text>
          <View style={styles.tags}>
            <View style={[styles.tag1, styles.tagSpaceBlock]}>
              <Text style={[styles.text6, styles.textTypo]}>Личная жизнь</Text>
            </View>
            <View style={[styles.rating, styles.tagSpaceBlock]}>
              <Image
                style={styles.ratingChild}
                contentFit="cover"
                source={require("./frame-78501.png")}
              />
              <Text style={[styles.text7, styles.textTypo]}>82</Text>
            </View>
          </View>
          <Image
            style={[styles.avatarIcon, styles.reviewsPosition]}
            contentFit="cover"
            source={require("./avatar.png")}
          />
          <View style={[styles.grade1, styles.gradePosition]}>
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
        <View style={[styles.review2, styles.reviewSpaceBlock]}>
          <View style={[styles.bg, styles.bgBorder]} />
          <Image
            style={styles.functionalIcon}
            contentFit="cover"
            source={require("./functional.png")}
          />
          <Text style={[styles.text2, styles.textTypo1]}>
            Обладает высоким профессионализмом и ответственным подходом к
            задачам. Всегда готов выслушать мнение коллег и находить
            конструктивные решения.
          </Text>
          <View style={[styles.date, styles.dateLayout]}>
            <Text style={[styles.text3, styles.textTypo1]}>24.04.2024</Text>
            <Text style={[styles.text4, styles.textTypo1]}>12:23</Text>
          </View>
          <Text style={[styles.text5, styles.textTypo]}>Никита Казаев</Text>
          <View style={styles.tags}>
            <View style={[styles.tag2, styles.tagSpaceBlock]}>
              <Text style={[styles.text6, styles.textTypo]}>+16</Text>
            </View>
            <View style={[styles.rating, styles.tagSpaceBlock]}>
              <Image
                style={styles.ratingChild}
                contentFit="cover"
                source={require("./frame-78501.png")}
              />
              <Text style={[styles.text7, styles.textTypo]}>41</Text>
            </View>
          </View>
          <Image
            style={[styles.avatarIcon, styles.reviewsPosition]}
            contentFit="cover"
            source={require("./avatar.png")}
          />
          <View style={[styles.grade, styles.gradePosition]}>
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
      </View>
      <MyMenu activeButton={"Menu"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo2: {
    width: 269,
    textAlign: "left",
    color: Color.black,

    fontWeight: "800",
    lineHeight: 40,
    letterSpacing: -0.8,
    fontSize: FontSize.mobileH1_size,
    left: 15,
    position: "absolute",
  },
  reviewsPosition: {
    left: 15,
    position: "absolute",
  },
  bgBorder: {
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    width: 345,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  textTypo1: {

    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  dateLayout: {
    height: 15,
    width: 98,
    left: 15,
    position: "absolute",
    opacity: 0.5,
  },
  textTypo: {

    fontWeight: "700",
    textAlign: "left",
    color: Color.black,
  },
  tagSpaceBlock: {
    paddingBottom: Padding.p_11xs,
    paddingTop: Padding.p_10xs,
    alignItems: "center",
    borderRadius: Border.br_81xl,
    flexDirection: "row",
  },
  gradePosition: {
    left: 277,
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  reviewSpaceBlock: {
    marginTop: 15,
    width: 345,
  },
  bgIcon: {
    width: 1128,
    height: 908,
    opacity: 0.5,
  },
  text: {
    top: 105,
  },
  text1: {
    top: 69,
  },
  bg: {
    height: 213,
  },
  functionalIcon: {
    top: 22,
    left: 321,
    width: 2,
    height: 6,
    position: "absolute",
  },
  text2: {
    top: 82,
    fontSize: FontSize.mobileT3_size,
    width: 315,
    lineHeight: 18,

    fontWeight: "600",
    left: 15,
  },
  text3: {
    fontSize: FontSize.mobileT4_size,
    left: 0,

    fontWeight: "600",
    top: 0,
  },
  text4: {
    left: 69,
    fontSize: FontSize.mobileT4_size,

    fontWeight: "600",
    top: 0,
  },
  date: {
    top: 179,
  },
  text5: {
    top: 18,
    fontSize: FontSize.systemFontHeadline1_size,
    letterSpacing: -0.1,
    left: 72,

    fontWeight: "700",
    lineHeight: 18,
    position: "absolute",
  },
  text6: {
    fontSize: FontSize.mobileT4_size,
  },
  tag: {
    backgroundColor: Color.tagWork,
    paddingHorizontal: Padding.p_5xs,
    paddingTop: Padding.p_10xs,
    alignItems: "center",
  },
  ratingChild: {
    width: 8,
    height: 8,
    overflow: "hidden",
  },
  text7: {
    marginLeft: 4,
    fontSize: FontSize.mobileT4_size,
  },
  rating: {
    paddingHorizontal: Padding.p_7xs,
    marginLeft: 5,
    paddingTop: Padding.p_10xs,
    alignItems: "center",
    backgroundColor: Color.white,
  },
  tags: {
    top: 41,
    flexDirection: "row",
    left: 72,
    position: "absolute",
  },
  avatarIcon: {
    top: 15,
    width: 47,
    height: 47,
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
  },
  review: {
    height: 213,
    width: 345,
  },
  bg1: {
    height: 195,
  },
  date1: {
    top: 161,
  },
  tag1: {
    backgroundColor: Color.tagLife,
    paddingHorizontal: Padding.p_5xs,
    paddingTop: Padding.p_10xs,
    alignItems: "center",
  },
  grade1: {
    top: 156,
  },
  review1: {
    height: 195,
  },
  tag2: {
    backgroundColor: Color.tag16,
    paddingHorizontal: Padding.p_5xs,
    paddingTop: Padding.p_10xs,
    alignItems: "center",
  },
  review2: {
    height: 213,
  },
  reviews: {
    top: 202,
    width: 345,
  },
  menureviews: {
    backgroundColor: Color.background2,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default MenuReviews;
