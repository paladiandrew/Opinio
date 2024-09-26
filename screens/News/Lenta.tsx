import * as React from "react";
import { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, ScrollView, FlatList  } from "react-native";
import { Color, Border, FontSize, Padding } from "./GlobalStyles";
import Report from "../Report/Report";
import Tags from "../Components/Tags";
import TopMenu from "../Components/TopMenu"
import MyMenu from "../BottomBarComponent/MyMenu";
import ReviewCard from "../ReviewCard/ReviewCard";
import { StatusBar } from "react-native";

interface Review {
    avatarUrl: string;
    reviewText: string;
    date: string;
    time: string;
    name: string;
    tags: string;
    rating: number;
  }
  

  const reviews: Review[] = [
    {
      avatarUrl: 'https://cs.pikabu.ru/post_img/2013-01_2/1357482852_1814017829.jpg',
      reviewText: 'Обладает высоким профессионализмом и ответственным подходом к задачам.',
      date: '24.04.2024',
      time: '12:23',
      name: 'Таркан Андрей',
      tags: 'Работа',
      rating: 52,
    },
    {
        avatarUrl: 'https://cs.pikabu.ru/post_img/2013-01_2/1357482852_1814017829.jpg',
        reviewText: 'Обладает высоким профессионализмом и ответственным подходом к задачам.',
        date: '24.04.2024',
        time: '12:23',
        name: 'Таркан Андрей',
        tags: '+16',
        rating: 52,
      },
      {
        avatarUrl: 'https://cs.pikabu.ru/post_img/2013-01_2/1357482852_1814017829.jpg',
        reviewText: 'Обладает высоким профессионализмом и ответственным подходом к задачам.',
        date: '24.04.2024',
        time: '12:23',
        name: 'Таркан Андрей',
        tags: 'Работа',
        rating: 52,
      },
      {
        avatarUrl: 'https://cs.pikabu.ru/post_img/2013-01_2/1357482852_1814017829.jpg',
        reviewText: 'Обладает высоким профессионализмом и ответственным подходом к задачам.',
        date: '24.04.2024',
        time: '12:23',
        name: 'Таркан Андрей',
        tags: 'Личная жизнь',
        rating: 52,
      },
    // Добавьте другие отзывы
  ];

const Lenta = () => {
    StatusBar.setBackgroundColor('#ece5d8');
    const [showReport, setShowReport] = useState<boolean>(false);
    const [selectedReview, setSelectedReview] = useState<any>(null);
    const [selectedTag, setSelectedTag] = useState<string>('Все');

    const handleShowReport = (review: any) => {
        setSelectedReview(review);  // Сохраняем выбранный отзыв
        setShowReport(true);        // Показываем Report
      };

    const handleTagSelect = (index: number, label: string) => {
        setSelectedTag(label);
      };
    const filteredReviews = selectedTag === 'Все' ? reviews: reviews.filter(review => review.tags.includes(selectedTag));


    const renderItem = ({ item }: { item: Review }) => (
        <ReviewCard
          avatarUrl={item.avatarUrl}
          reviewText={item.reviewText}
          date={item.date}
          time={item.time}
          name={item.name}
          tags={item.tags}
          rating={item.rating}
          onPressReport={() => handleShowReport(item)}
        />
      );
    
  return (
        <View style={ styles.bgBg} >
      <View style={[styles.lenta, styles.frame]}>
      
        <Image
          style={styles.bgIcon}
          contentFit="cover"
          source={require("./bg3.png")}
          
        />
        <TopMenu />
        
        <View style={[styles.frame1, styles.frameFlexBox]}>
                   
        <Tags onTagSelect={handleTagSelect} />
        </View>
      </View>
      <FlatList
        data={filteredReviews}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={{ flexGrow: 1, top: 192}}
        contentContainerStyle={{paddingBottom: 722}}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>
                Ого! Похоже ты прочитал всё...
              </Text>
              <Text style={styles.footerText}>
                Подожди немного и возвращайся за новыми
              </Text>
              <Text style={styles.footerText}>
                откровениями!
              </Text>
            </View>
          }
        />
      <MyMenu activeButton={"News"}/>
      {showReport && (
        <View style={styles.overlay}>
          <Report review={selectedReview} onClose={() => setShowReport(false)} />
        </View>
      )}
      </View>

  );
};

const styles = StyleSheet.create({
    footerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20, // Добавим немного пространства сверху и снизу
      },
      footerText: {
        fontSize: FontSize.mobileT4_size, // Размер текста
        fontWeight: "600",
        textAlign: 'center', // Центрирование текста
        color: '#292A24', // Цвет текста (по желанию)
      },
  bgBg: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,  // Устанавливаем высокий z-index, чтобы Report был поверх всего
  },
  frameFlexBox: {
    alignItems: "center",
  },
  bgIcon: {
    width: 1128,
    height: 908,
  },
  frame1: {
    top: 162,
    width: 345,
    left: 440,
    alignItems: "center",
    position: "absolute",
  },
  frame: {
    top: -45,
    left: -425,
    width: 1226,
  },
  lenta: {
    flex:1,
    position: "relative",
  },
});

export default Lenta;
