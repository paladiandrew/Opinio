import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { Color, FontSize, Padding, Border } from "./GlobalStyles";
import MyMenu from "../BottomBarComponent/MyMenu";

const MenuFriends = () => {
  return (
    <View style={styles.menufriends}>
      <Image
        style={styles.bgIcon}
        contentFit="cover"
        source={require("./bg2.png")}
      />
      <View style={[styles.frame, styles.framePosition1]}>
        <View style={[styles.frame1, styles.framePosition]}>
          <View style={[styles.frame2, styles.framePosition]}>
            <Text style={[styles.text, styles.textTypo2]}>27</Text>
            <Text style={[styles.text1, styles.textTypo2]}>ваши подписки</Text>
          </View>
        </View>
        <View style={styles.frame3}>
          <View style={styles.inputSearch}>
            <TextInput
              style={[styles.bg, styles.bgBorder]}
              placeholder="Введите имя, фамилию или ID"
            />
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("./vector.png")}
            />
          </View>
          <View style={styles.frame4}>
            <View style={styles.subscriptions}>
              <View style={styles.subscriptionLayout}>
                <View style={[styles.bg1, styles.subscriptionLayout]} />
                <View style={[styles.date, styles.datePosition]}>
                  <Text style={[styles.text2, styles.textTypo1]}>21 год</Text>
                  <Text style={[styles.text3, styles.textTypo1]}>Москва</Text>
                </View>
                <View style={styles.tags}>
                  <View style={styles.ratingSpaceBlock}>
                    <Text style={[styles.text4, styles.textTypo]}>
                      72 отзыва
                    </Text>
                  </View>
                  <View style={[styles.rating1, styles.ratingSpaceBlock]}>
                    <Text style={[styles.text4, styles.textTypo]}>
                      14 подписчиков
                    </Text>
                  </View>
                  <View style={[styles.rating1, styles.ratingSpaceBlock]}>
                    <Text style={[styles.text4, styles.textTypo]}>
                      7 отзывов оставлено
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.functionalIcon}
                  contentFit="cover"
                  source={require("./functional.png")}
                />
                <Text style={[styles.text7, styles.textTypo]}>
                  Таркан Андрей
                </Text>
                <Image
                  style={[styles.avatarIcon, styles.framePosition1]}
                  contentFit="cover"
                  source={require("./avatar.png")}
                />
              </View>
              <View style={[styles.subscription1, styles.subscriptionLayout]}>
                <View style={[styles.bg1, styles.subscriptionLayout]} />
                <View style={[styles.date1, styles.datePosition]}>
                  <Text style={[styles.text2, styles.textTypo1]}>31 год</Text>
                  <Text style={[styles.text3, styles.textTypo1]}>
                    Санкт-Петербург
                  </Text>
                </View>
                <View style={styles.tags}>
                  <View style={styles.ratingSpaceBlock}>
                    <Text style={[styles.text4, styles.textTypo]}>
                      2 отзыва
                    </Text>
                  </View>
                  <View style={[styles.rating1, styles.ratingSpaceBlock]}>
                    <Text style={[styles.text4, styles.textTypo]}>
                      123 подписчика
                    </Text>
                  </View>
                  <View style={[styles.rating1, styles.ratingSpaceBlock]}>
                    <Text style={[styles.text4, styles.textTypo]}>
                      5 отзывов оставлено
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.functionalIcon}
                  contentFit="cover"
                  source={require("./functional.png")}
                />
                <Text style={[styles.text7, styles.textTypo]}>
                  Савченко Ангелина
                </Text>
                <Image
                  style={[styles.avatarIcon, styles.framePosition1]}
                  contentFit="cover"
                  source={require("./avatar.png")}
                />
              </View>
              <View style={[styles.subscription1, styles.subscriptionLayout]}>
                <View style={[styles.bg1, styles.subscriptionLayout]} />
                <View style={[styles.date2, styles.datePosition]}>
                  <Text style={[styles.text2, styles.textTypo1]}>27 лет</Text>
                  <Text style={[styles.text3, styles.textTypo1]}>Казань</Text>
                </View>
                <View style={styles.tags}>
                  <View style={styles.ratingSpaceBlock}>
                    <Text style={[styles.text4, styles.textTypo]}>
                      44 отзыва
                    </Text>
                  </View>
                  <View style={[styles.rating1, styles.ratingSpaceBlock]}>
                    <Text style={[styles.text4, styles.textTypo]}>
                      25 подписчиков
                    </Text>
                  </View>
                  <View style={[styles.rating1, styles.ratingSpaceBlock]}>
                    <Text style={[styles.text4, styles.textTypo]}>
                      9 отзывов оставлено
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.functionalIcon}
                  contentFit="cover"
                  source={require("./functional.png")}
                />
                <Text style={[styles.text7, styles.textTypo]}>
                  Анна Румянцева
                </Text>
                <Image
                  style={[styles.avatarIcon, styles.framePosition1]}
                  contentFit="cover"
                  source={require("./avatar.png")}
                />
              </View>
              <View style={[styles.subscription1, styles.subscriptionLayout]}>
                <View style={[styles.bg1, styles.subscriptionLayout]} />
                <View style={[styles.date3, styles.datePosition]}>
                  <Text style={[styles.text2, styles.textTypo1]}>30 лет</Text>
                  <Text style={[styles.text3, styles.textTypo1]}>
                    Калининград
                  </Text>
                </View>
                <View style={styles.tags}>
                  <View style={styles.ratingSpaceBlock}>
                    <Text style={[styles.text4, styles.textTypo]}>
                      19 отзыва
                    </Text>
                  </View>
                  <View style={[styles.rating1, styles.ratingSpaceBlock]}>
                    <Text style={[styles.text4, styles.textTypo]}>
                      9 подписчиков
                    </Text>
                  </View>
                  <View style={[styles.rating1, styles.ratingSpaceBlock]}>
                    <Text style={[styles.text4, styles.textTypo]}>
                      25 отзывов оставлено
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.functionalIcon}
                  contentFit="cover"
                  source={require("./functional.png")}
                />
                <Text style={[styles.text7, styles.textTypo]}>
                  Андрей Шибков
                </Text>
                <Image
                  style={[styles.avatarIcon, styles.framePosition1]}
                  contentFit="cover"
                  source={require("./avatar.png")}
                />
              </View>
              <View style={[styles.subscription1, styles.subscriptionLayout]}>
                <View style={[styles.bg1, styles.subscriptionLayout]} />
                <View style={[styles.date, styles.datePosition]}>
                  <Text style={[styles.text2, styles.textTypo1]}>21 год</Text>
                  <Text style={[styles.text3, styles.textTypo1]}>Москва</Text>
                </View>
                <View style={styles.tags}>
                  <View style={styles.ratingSpaceBlock}>
                    <Text style={[styles.text4, styles.textTypo]}>
                      62 отзыва
                    </Text>
                  </View>
                  <View style={[styles.rating1, styles.ratingSpaceBlock]}>
                    <Text style={[styles.text4, styles.textTypo]}>
                      99 подписчиков
                    </Text>
                  </View>
                  <View style={[styles.rating1, styles.ratingSpaceBlock]}>
                    <Text style={[styles.text4, styles.textTypo]}>
                      5 отзывов оставлено
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.functionalIcon}
                  contentFit="cover"
                  source={require("./functional.png")}
                />
                <Text style={[styles.text7, styles.textTypo]}>
                  Таркан Андрей
                </Text>
                <Image
                  style={[styles.avatarIcon, styles.framePosition1]}
                  contentFit="cover"
                  source={require("./avatar.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <MyMenu activeButton={"Menu"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition1: {
    left: 15,
    position: "absolute",
  },
  framePosition: {
    height: 72,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo2: {
    textAlign: "left",
    color: Color.black,
    fontWeight: "800",
    lineHeight: 40,
    letterSpacing: -0.8,
    fontSize: FontSize.mobileH1_size,
    left: 0,
    position: "absolute",
  },
  bgBorder: {
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    position: "absolute",
    paddingHorizontal: 40,
  },
  subscriptionLayout: {
    height: 107,
    width: 345,
  },
  datePosition: {
    height: 15,
    top: 41,
    left: 72,
    position: "absolute",
    opacity: 0.5,
  },
  textTypo1: {
    fontWeight: "600",
    fontSize: FontSize.mobileT4_size,
    textAlign: "left",
    color: Color.black,
    top: 0,
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
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    backgroundColor: Color.white,
    alignItems: "center",
  },
  bgIcon: {
    width: 1128,
    height: 923,
  },
  text: {
    width: 269,
    top: 0,
  },
  text1: {
    top: 36,
    width: 340,
  },
  frame2: {
    width: 340,
  },
  frame1: {
    width: 345,
  },
  bg: {
    borderRadius: Border.br_31xl,
    height: 48,
    width: 345,
  },
  vectorIcon: {
    height: "31.25%",
    width: "4.35%",
    top: "35.42%",
    right: "90.72%",
    bottom: "33.33%",
    left: "4.93%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  inputSearch: {
    height: 48,
    alignSelf: "stretch",
  },
  bg1: {
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  text2: {
    left: 0,
  },
  text3: {
    left: 45,
  },
  date: {
    width: 85,
  },
  text4: {
    fontSize: FontSize.mobileT4_size,
    fontWeight: "700",
  },
  rating1: {
    marginLeft: 5,
  },
  tags: {
    top: 72,
    flexDirection: "row",
    left: 15,
    position: "absolute",
  },
  functionalIcon: {
    top: 22,
    left: 321,
    width: 2,
    height: 6,
    position: "absolute",
  },
  text7: {
    top: 18,
    fontSize: FontSize.systemFontHeadline1_size,
    letterSpacing: -0.1,
    lineHeight: 18,
    fontWeight: "700",
    left: 72,
    position: "absolute",
  },
  avatarIcon: {
    top: 15,
    width: 47,
    height: 47,
  },
  date1: {
    width: 137,
  },
  subscription1: {
    marginTop: 14,
  },
  date2: {
    width: 83,
  },
  date3: {
    width: 116,
  },
  subscriptions: {
    left: 0,
    top: 0,
    width: 345,
    position: "absolute",
  },
  frame4: {
    height: 591,
    marginTop: 15,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frame3: {
    top: 97,
    alignItems: "center",
    left: 0,
    width: 345,
    position: "absolute",
    overflow: "hidden",
  },
  frame: {
    top: 69,
    height: 751,
    width: 345,
    overflow: "hidden",
  },
  menufriends: {
    backgroundColor: Color.background2,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",

  },
});

export default MenuFriends;
