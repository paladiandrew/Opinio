import React from "react";
import { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Color, Border, FontSize, Padding } from "./GlobalStyles";


interface ReviewCardProps {
  avatarUrl: string;  // Ссылка на аватар
  reviewText: string; // Текст отзыва
  date: string;       // Дата отзыва
  time: string;       // Время отзыва
  name: string;       // Имя пользователя
  tags: string;       // Теги (например, "Работа")
  rating: number;     // Рейтинг (число, например, 52)
  onPressReport: () => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  avatarUrl,
  reviewText,
  date,
  time,
  name,
  tags,
  rating: initialRating,
  onPressReport,
}) => {
    const tagColors: { [key: string]: string } = {
        '+16': '#D9B9F3',
        'Работа': '#AADCAE',
        'Учёба': '#BFCC92',
        'Увлечения': '#EED881',
        'Дружба': '#ACDEDB',
        'Личная жизнь': '#FAB19C',
        'Другое': '#E4DCCF',
      };
    
    const backgroundColor = tagColors[tags] || '#E4DCCF';

    const [showReport, setShowReport] = useState(false);

    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const [rating, setRating] = useState(initialRating); // Состояние для рейтинга
  
    // Обработчик нажатия на лайк
    const handleLike = () => {
      if (isLiked) {
        setIsLiked(false);
        setRating(rating - 1);
      } else {
        setIsLiked(true);
        setRating(isDisliked ? rating + 2 : rating + 1); // Если дизлайк активен, увеличиваем на 2
        setIsDisliked(false);
      }
    };
  
    // Обработчик нажатия на дизлайк
    const handleDislike = () => {
      if (isDisliked) {
        setIsDisliked(false);
        setRating(rating + 1);
      } else {
        setIsDisliked(true);
        setRating(isLiked ? rating - 2 : rating - 1); // Если лайк активен, уменьшаем на 2
        setIsLiked(false);
      }
    };


      
  return (
    <View>
        
    <View style={[styles.frame2, styles.frameFlexBox]}>
      <View style={styles.reviews}>
        <View style={styles.bgLayout}>
          <Pressable style={[styles.bg, styles.bgLayout]} />
          <Pressable onPress={onPressReport} style={{ padding: 20 }}>
        <Image
          style={styles.functionalIcon}
          source={require('./functional.png')}
        />
      </Pressable>
          <Text style={[styles.text12, styles.datePosition]}>
            {reviewText}
          </Text>
          <View style={[styles.date, styles.datePosition]}>
            <Text style={[styles.text13, styles.textTypo3]}>
              {date}
            </Text>
            <Text style={[styles.text14, styles.textTypo3]}>
              {time}
            </Text>
          </View>
          <Text style={[styles.text15, styles.tags1Position]}>
            {name}
          </Text>
          <View style={[styles.tags1, styles.tags1Position]}>
            <View style={[styles.tag8, styles.tag8SpaceBlock, { backgroundColor }]}>
              <Text style={[styles.text16, styles.textTypo]}>
                {tags}
              </Text>
            </View>
            <View style={[styles.rating, styles.tag8SpaceBlock]}>
              <Image
                style={styles.ratingChild}
                source={require("./frame-78501.png")}
              />
              <Text style={[styles.text17, styles.textTypo]}>
                {rating}
              </Text>
            </View>
          </View>
          <Image
            style={[styles.avatarIcon, styles.datePosition]}
            source={{ uri: avatarUrl }}  // Использование ссылки на аватар
          />
          <View style={styles.grade}>
             <Pressable onPress={handleDislike}>
              <Image
                style={[styles.dislikeIcon, styles.iconLayout]}
                source={isDisliked ? require("./dislikeActive1.png") : require("./dislike.png")} // Изменение иконки
              />
             </Pressable>
             <Pressable onPress={handleLike}>
              <Image
                style={[styles.likeIcon, styles.iconLayout]}
                source={isLiked ? require("./likeActive1.png") : require("./like3.png")} // Изменение иконки
              />
            </Pressable>
          </View>
          
        </View>
      </View>
    </View>
    </View>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    //overflow: "hidden",
    //flex: 1,
  },
  textTypo: {
    fontWeight: "700",
    textAlign: "left",
  },
  frame2: {
    justifyContent: "flex-end",
    marginTop: 15,
    alignSelf: "stretch",
    flex: 1,
  },
  reviews: {
    flexGrow: 1,
  },
  bgLayout: {
    height: 213,
    width: 345,
  },
  bg: {
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    left: 0,
    top: 0,
    position: "absolute",
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
  text12: {
    top: 82,
    width: 315,
    textAlign: "left",
    color: Color.black,
    fontWeight: "600",
    lineHeight: 18,
    fontSize: FontSize.mobileT2_size,
    left: 15,
  },
  datePosition: {
    left: 15,
    position: "absolute",
  },
  date: {
    top: 179,
    width: 98,
    height: 15,
    opacity: 0.5,
  },
  text13: {
    textAlign: "left",
    fontSize: FontSize.mobileT4_size,
    color: Color.black,
    left: 0,
    fontWeight: "600",
    top: 0,
    position: "absolute",
  },
  text14: {
    left: 69,
    textAlign: "left",
    fontSize: FontSize.mobileT4_size,
    color: Color.black,
    fontWeight: "600",
    top: 0,
    position: "absolute",
  },
  text15: {
    top: 18,
    fontSize: FontSize.systemFontHeadline1_size,
    letterSpacing: -0.1,
    textAlign: "left",
    fontWeight: "700",
    color: Color.black,
    lineHeight: 18,
  },
  text16: {
    textAlign: "left",
    fontSize: FontSize.mobileT4_size,
    color: Color.black,
  },
  text17: {
    marginLeft: 4,
    textAlign: "left",
    fontSize: FontSize.mobileT4_size,
    color: Color.black,
  },
  rating: {
    paddingHorizontal: Padding.p_7xs,
    marginLeft: 5,
    backgroundColor: Color.white,
  },
  tag8: {
    paddingHorizontal: Padding.p_5xs,
  },
  tags1Position: {
    left: 72,
    position: "absolute",
  },
  tags1: {
    top: 41,
    flexDirection: "row",
  },
  tag8SpaceBlock: {
    paddingBottom: Padding.p_11xs,
    paddingTop: Padding.p_10xs,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    alignItems: "center",
  },
  ratingChild: {
    width: 8,
    height: 8,
    overflow: "hidden",
  },
  avatarIcon: {
    top: 15,
    width: 47,
    height: 47,
    borderRadius: 24,
  },
  grade: {
    top: 174,
    left: 277,
    flexDirection: "row",
    position: "absolute",
  },
  dislikeIcon: {
    borderRadius: Border.br_81xl,
    width: 24,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  likeIcon: {
    borderRadius: 50,
    marginLeft: 5,
  },
  textTypo3: {
    textAlign: "left",
    fontWeight: "600",
    color: Color.black,
  },
});
