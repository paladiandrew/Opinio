import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, Padding } from "./GlobalStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";

const Profile = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  return (
    <View style={[styles.profile]}>
      <Pressable style={styles.pressableContainer} onPress={() => navigation.navigate("EditProfile")}>
      <Image
        style={styles.editIcon}
        contentFit="cover"
        source={require("./edit.png")}
      />
    </Pressable>

      <Image
        style={styles.avatarIcon}
        contentFit="cover"
        source={require("./avatar1.png")}
      />
      <Text style={[styles.name, styles.vkTypo]}>Таркан Андрей</Text>


      
      <View style={[styles.linksPosition]}>
        <Text style={styles.textTypo}>21 год</Text>
        <Text style={[styles.text2, styles.textTypo]}>г. Москва</Text>
      </View>
      <View style={styles.linksPosition}>
        <Pressable style={[styles.vkWrapper, styles.idParentFlexBox]}>
          <Text style={[styles.vk, styles.vkTypo]}>Ссылка на VK</Text>
        </Pressable>
        <Pressable style={[styles.idParent, styles.idParentFlexBox]}>
          <Text style={[styles.vk, styles.vkTypo]}>ID</Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("./frame-78495.png")}
          />
        </Pressable>
      </View>
      <Text style={styles.text}>
        Я обладаю уникальными способностями в анализе информации, генерации идей
        и поддержке ваших творческих устремлений.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pressableContainer: {
    position: "absolute",
    top: 25,
    right: 20,
    width: 10,
    height: 10,
  },
  linksPosition: {
    flexDirection: "row",
    marginBottom: 20,
    
  },
  idParentFlexBox: {
    alignItems: "center",
    backgroundColor: Color.white,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
  },
  vkTypo: {
    fontWeight: "700",
  },
  textTypo: {
    opacity: 0.5,
    fontWeight: "600",
    color: Color.black,
    fontSize: FontSize.mobileT4_size,
  },
  vk: {
    color: Color.black,
    fontSize: FontSize.mobileT4_size,
    fontWeight: "700",
  },
  vkWrapper: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_10xs,
  },
  frameChild: {
    width: 10,
    height: 9,
    overflow: "hidden",
    marginLeft: 5,
  },
  idParent: {
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_10xs,
    paddingRight: Padding.p_7xs,
    paddingBottom: Padding.p_10xs,
    marginLeft: 5,
  },
  editIcon: {
    width:10,
    height:10,
    opacity: 0.8,
  },
  text: {
    fontSize: FontSize.mobileT2_size,
    lineHeight: 18,
    marginLeft: "2.5%",
    width: "95%",
    fontWeight: "600",
    color: Color.black,
  },
  name: {
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.2,
    lineHeight: 30,
    color: Color.colorDarkslategray,
    textAlign: "left",
    fontWeight: "700",
  },
  text2: {
    marginLeft: 11,
  },
  avatarIcon: {
    marginBottom: 20,
    width: 100,
    height: 100,
  },
  profile: {
    position: "relative",
    top: 54,
    width: 345,
    height: 325,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.background,
  },
});

export default Profile;
