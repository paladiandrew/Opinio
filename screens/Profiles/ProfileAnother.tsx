import * as React from "react";
import { StyleSheet, View, Pressable, Text, Linking } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Border, Color, Padding } from "./GlobalStyles";

const ProfileAnother = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.profileanother}>
      <View style={[styles.profile, styles.bgLayout]}>
        <View style={[styles.bg, styles.bgLayout]} />
        <View style={[styles.links, styles.tagsFlexBox]}>
          <Pressable
            style={styles.vkWrapper}
            onPress={() => Linking.openURL("https://vk.com")}
          >
            <Text style={[styles.vk, styles.textTypo4]}>Ссылка на VK</Text>
          </Pressable>
          <Pressable style={styles.idParent}>
            <Text style={[styles.vk, styles.textTypo4]}>ID</Text>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/frame-78495.png")}
            />
          </Pressable>
        </View>
        <Image
          style={[styles.reportIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/report.png")}
        />
        <Text style={styles.text}>
          Я обладаю уникальными способностями в анализе информации, генерации
          идей и поддержке ваших творческих устремлений.
        </Text>
        <View style={[styles.buttons, styles.tagsFlexBox]}>
          <Pressable style={styles.buttonLayout2}>
            <View style={[styles.buttonChild, styles.buttonLayout1]} />
            <Text style={[styles.text1, styles.textPosition]}>
              Оставить отзыв
            </Text>
          </Pressable>
          <Pressable
            style={[styles.button1, styles.buttonLayout2]}
            onPress={() => {}}
          >
            <View style={[styles.buttonItem, styles.buttonLayout1]} />
            <Text style={[styles.text2, styles.textTypo2]}>Подписаться</Text>
          </Pressable>
        </View>
        <Pressable style={styles.stroke1} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/stroke-1.png")}
          />
        </Pressable>
        <Text style={styles.name}>Таркан Андрей</Text>
        <View style={[styles.ageAndCity, styles.tagsFlexBox]}>
          <Text style={[styles.text3, styles.textTypo3]}>21 год</Text>
          <Text style={[styles.text4, styles.textTypo3]}>г. Москва</Text>
        </View>
        <Image
          style={styles.avatarIcon}
          contentFit="cover"
          source={require("../assets/avatar11.png")}
        />
      </View>
      <View style={[styles.statistics, styles.tagsFlexBox]}>
        <View style={styles.reviewsLayout}>
          <View style={[styles.reviewsChild, styles.childPosition]} />
          <Text style={styles.textTypo1}>Отзывов</Text>
          <Text style={[styles.text6, styles.textTypo]}>72</Text>
        </View>
        <View style={[styles.subscribers, styles.subscribersLayout]}>
          <View style={[styles.subscribersChild, styles.subscribersLayout]} />
          <Text style={styles.textTypo1}>Подписчиков</Text>
          <Text style={[styles.text8, styles.textTypo]}>14</Text>
        </View>
        <View style={[styles.feedback, styles.reviewsLayout]}>
          <View style={[styles.reviewsChild, styles.childPosition]} />
          <Text style={[styles.text9, styles.textTypo1]}>
            Оставлено отзывов
          </Text>
          <Text style={[styles.text6, styles.textTypo]}>7</Text>
        </View>
      </View>
      <View style={[styles.tags, styles.tagsFlexBox]}>
        <Pressable style={[styles.tag, styles.tagFlexBox]}>
          <Text style={[styles.text11, styles.textTypo2]}>{`Все `}</Text>
        </Pressable>
        <Pressable style={[styles.tag1, styles.tagFlexBox]}>
          <Text style={[styles.text12, styles.textTypo4]}>+16</Text>
        </Pressable>
        <Pressable style={[styles.tag2, styles.tagFlexBox]}>
          <Text style={[styles.text13, styles.textTypo4]}>Работа</Text>
        </Pressable>
        <Pressable style={[styles.tag3, styles.tagFlexBox]}>
          <Text style={[styles.text13, styles.textTypo4]}>Учёба</Text>
        </Pressable>
        <Pressable style={[styles.tag4, styles.tagFlexBox]}>
          <Text style={[styles.text13, styles.textTypo4]}>Увлечения</Text>
        </Pressable>
        <Pressable style={[styles.tag5, styles.tagFlexBox]}>
          <Text style={[styles.text13, styles.textTypo4]}>Дружба</Text>
        </Pressable>
        <Pressable style={[styles.tag6, styles.tagFlexBox]}>
          <Text style={[styles.text13, styles.textTypo4]}>Личная жизнь</Text>
        </Pressable>
        <Pressable style={[styles.tag7, styles.tagFlexBox]}>
          <Text style={[styles.text13, styles.textTypo4]}>Другое</Text>
        </Pressable>
      </View>
      <View style={[styles.frame, styles.frameLayout]}>
        <View style={[styles.frame1, styles.frameLayout]}>
          <View style={[styles.frame2, styles.frameLayout1]}>
            <View style={styles.indicator}>
              <View style={styles.line} />
            </View>
          </View>
          <View style={[styles.review, styles.frameLayout]}>
            <View style={[styles.bg1, styles.frameLayout]} />
            <Image
              style={styles.functionalIcon}
              contentFit="cover"
              source={require("../assets/functional.png")}
            />
            <Text style={styles.text19}>
              Обладает высоким профессионализмом и ответственным подходом к
              задачам. Всегда готов выслушать мнение коллег и находить
              конструктивные решения.
            </Text>
            <View style={styles.date}>
              <Text style={[styles.text20, styles.textTypo3]}>24.04.2024</Text>
            </View>
            <View style={[styles.tags1, styles.tagsFlexBox]}>
              <View style={[styles.tag8, styles.tag8SpaceBlock]}>
                <Text style={[styles.vk, styles.textTypo4]}>Работа</Text>
              </View>
              <View style={[styles.rating, styles.tag8SpaceBlock]}>
                <Image
                  style={styles.ratingChild}
                  contentFit="cover"
                  source={require("../assets/frame-78501.png")}
                />
                <Text style={[styles.text22, styles.textTypo4]}>52</Text>
              </View>
            </View>
            <View style={[styles.grade, styles.tagsFlexBox]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/dislike1.png")}
              />
              <Image
                style={[styles.likeIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/like11.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.frame3}>
          <Pressable style={[styles.button2, styles.buttonLayout]}>
            <View style={[styles.buttonInner, styles.buttonLayout]} />
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector21.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgLayout: {
    height: 388,
    width: 345,
    position: "absolute",
  },
  tagsFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  textTypo4: {
    textAlign: "left",
    fontSize: FontSize.mobileT4_size,
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  buttonLayout1: {
    borderRadius: Border.br_31xl,
    top: 0,
  },
  textPosition: {
    textAlign: "center",
    top: "31.25%",
    fontSize: FontSize.mobileT2_size,
    left: "50%",
    position: "absolute",
  },
  buttonLayout2: {
    height: 48,
    width: 155,
  },
  textTypo2: {
    color: Color.white,

    fontWeight: "700",
  },
  textTypo3: {

    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.mobileT4_size,
  },
  childPosition: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    position: "absolute",
  },
  textTypo: {

    letterSpacing: -0.5,
    top: 50,
    lineHeight: 30,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
    left: "50%",
    position: "absolute",
  },
  subscribersLayout: {
    width: 111,
    height: 90,
  },
  reviewsLayout: {
    height: 90,
    width: 112,
  },
  textTypo1: {
    lineHeight: 12,
    top: 12,
    textAlign: "left",
    color: Color.black,

    fontWeight: "700",
    fontSize: FontSize.mobileT4_size,
    left: 15,
    position: "absolute",
  },
  tagFlexBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_mini,
    justifyContent: "center",
    borderRadius: Border.br_xl,
    alignItems: "center",
    flexDirection: "row",
  },
  frameLayout: {
    height: 178,
    position: "absolute",
  },
  frameLayout1: {
    width: 375,
    left: 0,
    overflow: "hidden",
  },
  tag8SpaceBlock: {
    paddingBottom: Padding.p_11xs,
    paddingHorizontal: Padding.p_7xs,
    paddingTop: Padding.p_10xs,
    alignItems: "center",
    borderRadius: Border.br_81xl,
    flexDirection: "row",
  },
  iconLayout: {
    height: 21,
    width: 21,
    borderRadius: Border.br_81xl,
  },
  buttonLayout: {
    height: 47,
    width: 47,
    left: 0,
    position: "absolute",
  },
  bg: {
    backgroundColor: Color.background,
    left: 0,
    top: 0,
    borderRadius: Border.br_11xl,
  },
  vk: {
    color: Color.black,
    fontWeight: "700",
  },
  vkWrapper: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_10xs,
    alignItems: "center",
    backgroundColor: Color.white,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
  },
  frameChild: {
    width: 10,
    height: 9,
    marginLeft: 5,
    overflow: "hidden",
  },
  idParent: {
    paddingLeft: Padding.p_5xs,
    paddingRight: Padding.p_7xs,
    paddingBottom: Padding.p_10xs,
    marginLeft: 5,
    paddingTop: Padding.p_10xs,
    alignItems: "center",
    backgroundColor: Color.white,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
  },
  links: {
    marginLeft: -68.5,
    top: 210,
    left: "50%",
  },
  reportIcon: {
    height: "3.61%",
    width: "4.06%",
    top: "5.15%",
    right: "5.8%",
    bottom: "91.24%",
    left: "90.14%",
    position: "absolute",
  },
  text: {
    top: 251,
    width: 315,
    lineHeight: 18,
    fontSize: FontSize.mobileT2_size,
    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
    left: 15,
    position: "absolute",
  },
  buttonChild: {
    height: 48,
    width: 155,
    backgroundColor: Color.white,
    left: 0,
    position: "absolute",
  },
  text1: {
    marginLeft: -54.5,
    color: Color.black,
    fontWeight: "700",
  },
  buttonItem: {
    backgroundColor: Color.black,
    height: 48,
    width: 155,
    left: 0,
    position: "absolute",
  },
  text2: {
    marginLeft: -44.5,
    textAlign: "center",
    top: "31.25%",
    fontSize: FontSize.mobileT2_size,
    left: "50%",
    position: "absolute",
  },
  button1: {
    marginLeft: 5,
  },
  buttons: {
    top: 325,
    left: 15,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  stroke1: {
    left: "6.38%",
    top: "5.67%",
    right: "92.17%",
    bottom: "91.75%",
    width: "1.45%",
    height: "2.58%",
    position: "absolute",
  },
  name: {
    marginLeft: -88.5,
    letterSpacing: -0.2,
    color: Color.colorDarkslategray_200,
    lineHeight: 30,
    fontSize: FontSize.size_5xl,
    top: 145,
    textAlign: "left",
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  text3: {
    opacity: 0.5,
  },
  text4: {
    marginLeft: 11,
    opacity: 0.5,
  },
  ageAndCity: {
    marginLeft: -47.5,
    top: 180,
    left: "50%",
  },
  avatarIcon: {
    marginLeft: -50.5,
    top: 30,
    width: 100,
    height: 100,
    left: "50%",
    position: "absolute",
  },
  profile: {
    top: 54,
    left: 15,
  },
  reviewsChild: {
    height: 90,
    width: 112,
  },
  text6: {
    marginLeft: -41,
  },
  subscribersChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text8: {
    marginLeft: -40.5,
  },
  subscribers: {
    marginLeft: 5,
  },
  text9: {
    width: 86,
  },
  feedback: {
    marginLeft: 5,
  },
  statistics: {
    top: 457,
    left: 15,
  },
  text11: {
    textAlign: "left",
    fontSize: FontSize.mobileT4_size,
  },
  tag: {
    backgroundColor: Color.black,
  },
  text12: {
    letterSpacing: -0.4,
    opacity: 0.5,
    color: Color.black,
    fontWeight: "700",
  },
  tag1: {
    backgroundColor: Color.tagLight16,
    marginLeft: 5,
  },
  text13: {
    opacity: 0.5,
    color: Color.black,
    fontWeight: "700",
  },
  tag2: {
    backgroundColor: Color.tagLightWork,
    marginLeft: 5,
  },
  tag3: {
    backgroundColor: Color.tagLightStudy,
    marginLeft: 5,
  },
  tag4: {
    backgroundColor: Color.tagLightHobby,
    marginLeft: 5,
  },
  tag5: {
    backgroundColor: Color.tagLightFriend,
    marginLeft: 5,
  },
  tag6: {
    backgroundColor: Color.tagLightLife,
    marginLeft: 5,
  },
  tag7: {
    backgroundColor: Color.colorLinen_100,
    marginLeft: 5,
  },
  tags: {
    top: 562,
    flexWrap: "wrap",
    width: 345,
    left: 15,
  },
  line: {
    marginLeft: -67.5,
    bottom: 8,
    width: 135,
    height: 5,
    backgroundColor: Color.white,
    borderRadius: Border.br_81xl,
    left: "50%",
    position: "absolute",
  },
  indicator: {
    right: 0,
    bottom: 0,
    height: 30,
    left: 0,
    position: "absolute",
  },
  frame2: {
    height: 168,
    top: 0,
    position: "absolute",
  },
  bg1: {
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    width: 345,
    borderRadius: Border.br_11xl,
  },
  functionalIcon: {
    top: 22,
    left: 321,
    width: 2,
    height: 6,
    position: "absolute",
  },
  text19: {
    top: 50,
    width: 315,

    fontWeight: "600",
    lineHeight: 18,
    fontSize: FontSize.mobileT2_size,
    textAlign: "left",
    color: Color.black,
    left: 15,
    position: "absolute",
  },
  text20: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  date: {
    width: 58,
    height: 15,
    opacity: 0.5,
    top: 145,
    left: 15,
    position: "absolute",
  },
  tag8: {
    backgroundColor: Color.tagWork,
  },
  ratingChild: {
    width: 8,
    height: 8,
    overflow: "hidden",
  },
  text22: {
    letterSpacing: -0.3,
    marginLeft: 4,
    color: Color.black,

    fontWeight: "700",
  },
  rating: {
    marginLeft: 5,
    backgroundColor: Color.white,
  },
  tags1: {
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
    top: 0,
    width: 345,
    left: 15,
  },
  frame1: {
    width: 375,
    left: 0,
    overflow: "hidden",
    top: 0,
  },
  buttonInner: {
    backgroundColor: Color.black,
    borderRadius: Border.br_31xl,
    top: 0,
  },
  vectorIcon: {
    marginTop: -6.4,
    marginLeft: -6.4,
    top: "50%",
    width: 13,
    height: 13,
    left: "50%",
    position: "absolute",
  },
  button2: {
    top: 90,
  },
  frame3: {
    left: 313,
    height: 137,
    width: 47,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame: {
    top: 644,
    width: 375,
    left: 0,
    overflow: "hidden",
  },
  profileanother: {
    backgroundColor: Color.background2,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_11xl,
  },
});

export default ProfileAnother;
