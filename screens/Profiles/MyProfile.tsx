import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Reviews1 from "../Reviews/Reviews1";
import Profile from "../Reviews/Profile";
import Reviews from "../Reviews/Reviews";
import { Padding, Border, Color, FontSize } from "./GlobalStyles";

import Tags from "../Components/Tags";
import MyMenu from "../BottomBarComponent/MyMenu";


const MyProfile = () => {
    const [selectedTag, setSelectedTag] = useState<string>('Все');
    const handleTagSelect = (index: number, label: string) => {
        setSelectedTag(label);
      };
  return (
    <View style={styles.myprofile}>
      <ScrollView contentContainerStyle={{ paddingBottom: 450 }}>
      <View style={[styles.tagsPosition]}>
        <Profile />
        <View style = {styles.statistics}>
        <Reviews prop="Отзывов" prop1="72" />
        <Reviews
          prop="Подписчиков"
          prop1="14"
        />
        <Reviews
          prop="Оставлено"
          prop1="7"
          prop2="отзывов"
        />
        </View>
        <View style={[styles.tags, styles.tagsPosition]}>
        <Tags onTagSelect={handleTagSelect}  />
      </View>
        <Reviews1 />  

      </View>
      </ScrollView>
      <MyMenu activeButton={"MyProfile"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  tagsPosition: {
    flexDirection: "column",
    alignItems: "center",
  },
  statistics: {
    flexDirection: "row",
    justifyContent: "center", // Центрируем статистику
    alignItems: "center",
    marginTop: 68,
  },
  tags: {
    marginTop: 10,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  myprofile: {
    flexDirection: "column",
    backgroundColor: Color.background2,
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
});

export default MyProfile;