import React, { useState } from "react";
import { TextInput, StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontSize, Padding } from "./GlobalStyles";

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as Constants from 'expo-constants';

const EditProfile = () => {
  const [inputTextInput, setInputTextInput] = useState("21 год");
  const [inputTextInput1, setInputTextInput1] = useState("г. Москва");
  const [inputTextInput2, setInputTextInput2] = useState(
    "Я обладаю уникальными способностями в анализе информации, генерации идей и поддержке ваших творческих устремлений."
  );

  
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();



  const [image, setImage] = useState <string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.editprofile}>
      <View style={styles.functional}>
        <View style={[styles.input, styles.inputPosition]}>
          <TextInput
            style={styles.input1}
            value={inputTextInput}
            onChangeText={setInputTextInput}
            placeholder="Введите ваш возраст"
            multiline={true}
          />
          <TextInput
            style={[styles.input2, styles.inputSpaceBlock]}
            value={inputTextInput1}
            onChangeText={setInputTextInput1}
            placeholder="Введите ваш город"
            multiline={true}
          />
          <TextInput
            style={[styles.input3, styles.inputSpaceBlock]}
            value={inputTextInput2}
            onChangeText={setInputTextInput2}
            placeholder="Расскажите о себе"
            multiline={true}
          />
        </View>
        <Pressable style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("MyProfile")}
        >
          <Text style={styles.text}>Сохранить изменения</Text>
        </Pressable>
        <Pressable style={[styles.button1, styles.buttonLayout]}
            onPress={() => navigation.navigate("MenuExit")}
        >
          <Text style={styles.text1}>Отключить профиль</Text>
        </Pressable>
        <View style={[styles.frame, styles.inputPosition]}>
          <Text style={[styles.text2, styles.textFlexBox]}>
            Редактировать профиль
          </Text>
          <Pressable
            style={styles.vector}
            onPress={() => navigation.navigate("MyProfile")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("./vector1.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.colors, styles.editPosition]}>
          <Image
            style={[styles.colorIcon, styles.colorIconLayout]}
            contentFit="cover"
            source={require("./color.png")}
          />
          <Image
            style={[styles.colorIcon1, styles.colorIconSpaceBlock]}
            contentFit="cover"
            source={require("./color1.png")}
          />
          <Image
            style={[styles.colorIcon1, styles.colorIconSpaceBlock]}
            contentFit="cover"
            source={require("./color2.png")}
          />
          <Image
            style={[styles.colorIcon1, styles.colorIconSpaceBlock]}
            contentFit="cover"
            source={require("./color3.png")}
          />
          <Image
            style={[styles.colorIcon1, styles.colorIconSpaceBlock]}
            contentFit="cover"
            source={require("./color4.png")}
          />
          <Image
            style={[styles.colorIcon5, styles.colorIconSpaceBlock]}
            contentFit="cover"
            source={require("./color9.png")}
          />
          <Image
            style={[styles.colorIcon1, styles.colorIconSpaceBlock]}
            contentFit="cover"
            source={require("./color6.png")}
          />
          <Image
            style={[styles.colorIcon1, styles.colorIconSpaceBlock]}
            contentFit="cover"
            source={require("./color7.png")}
          />
          <Image
            style={[styles.colorIcon5, styles.colorIconSpaceBlock]}
            contentFit="cover"
            source={require("./color8.png")}
          />
        </View>
        <Image
          style={[styles.avatarIcon, styles.editPosition]}
          contentFit="cover"
          source={require("./avatar1.png")}
        />
        <View style={[styles.edit, styles.editPosition]}>
          <Pressable style={styles.editPhoto} onPress={pickImage}>
            <Text style={[styles.text3, styles.textFlexBox]}>
              Изменить фотографию
            </Text>
          </Pressable>
          <Image
            style={[styles.colorIcon9, styles.colorIconLayout]}
            contentFit="cover"
            source={require("./color9.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputPosition: {
    left: 15,
    position: "absolute",
  },
  inputSpaceBlock: {
    marginTop: 5,
    width: 345,
  },
  buttonLayout: {
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_31xl,
    height: 48,
    width: "92%",
    left: "4%",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  editPosition: {
    left: "50%",
    position: "absolute",
  },
  colorIconLayout: {
    height: 20,
    width: 20,
  },
  colorIconSpaceBlock: {
    marginLeft: 10,
    borderRadius: Border.br_81xl,
  },
  input1: {
    fontWeight: "500",
    backgroundColor: Color.white,
    borderRadius: Border.br_11xl,
    paddingHorizontal: 25,
    fontSize: FontSize.mobileT2_size,
    width: "100%",
    height: 48,
  },
  input2: {
    fontWeight: "500",
    backgroundColor: Color.white,
    borderRadius: Border.br_11xl,
    paddingHorizontal: 25,
    fontSize: FontSize.mobileT2_size,
    width: "100%",
    height: 48,
    marginTop: 5,
  },
  input3: {
    fontWeight: "500",
    backgroundColor: Color.white,
    borderRadius: Border.br_11xl,
    paddingHorizontal: 25,
    fontSize: FontSize.mobileT2_size,
    width: "100%",
    height: 84,
  },
  input: {
    top: 329,
  },
  text: {
    color: Color.white,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.mobileT2_size,
  },
  button: {
    top: 614,
    backgroundColor: Color.black,
    paddingHorizontal: 82,
  },
  text1: {
    color: Color.black,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.mobileT2_size,
  },
  button1: {
    top: 561,
    paddingHorizontal: 87,
    backgroundColor: Color.white,
  },
  text2: {
    fontSize: FontSize.mobileH1_size,
    letterSpacing: -0.8,
    lineHeight: 40,
    fontWeight: "800",
    width: 298,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    width: 9,
    height: 9,
    marginLeft: 32,
  },
  frame: {
    top: 20,
    width: 339,
    height: 100,
    flexDirection: "row",
    overflow: "hidden",
  },
  colorIcon: {
    borderRadius: Border.br_81xl,
  },
  colorIcon1: {
    height: 20,
    width: 20,
  },
  colorIcon5: {
    width: 20,
    height: 20,
  },
  colors: {
    marginLeft: -135.5,
    top: 278,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
  },
  avatarIcon: {
    marginLeft: -49.5,
    top: 117,
    width: 100,
    height: 100,
  },
  text3: {
    fontSize: FontSize.mobileT4_size,
    fontWeight: "700",
    textAlign: "left",
  },
  editPhoto: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_10xs,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    backgroundColor: Color.white,
    alignItems: "center",
  },
  colorIcon9: {
    marginLeft: 5,
    borderRadius: Border.br_81xl,
  },
  edit: {
    marginLeft: -83.5,
    top: 242,
    flexDirection: "row",
  },
  functional: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.background,
    width: 375,
    height: 696,
  },
  editprofile: {
    backgroundColor: Color.background2,
    flex: 1,
    height: 812,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
});

export default EditProfile;
