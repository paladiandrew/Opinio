import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Padding, Border, FontSize } from "./GlobalStyles";

interface Review {
    avatarUrl: string;
    reviewText: string;
    date: string;
    time: string;
    name: string;
    tags: string;
    rating: number;
  }
  

interface ReportProps {
    review: Review; // Объект отзыва
    onClose: () => void; 
  }
  
  const Report: React.FC<ReportProps> = ({ review, onClose}) => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const [selectedComplaint, setSelectedComplaint] = useState<string | null>(null);

    const complaints = [
      'Несоответствие тегов',
      'Противоправное содержание',
      'Оскорбления и нецензурная лексика',
      'Другое',
    ];
  
    const handleComplaintPress = (complaint: string) => {
      setSelectedComplaint(complaint);
    };

    const tagColors: { [key: string]: string } = {
        '+16': '#D9B9F3',
        'Работа': '#AADCAE',
        'Учёба': '#BFCC92',
        'Увлечения': '#EED881',
        'Дружба': '#ACDEDB',
        'Личная жизнь': '#FAB19C',
        'Другое': '#E4DCCF',
      };
    const backgroundColor = tagColors[review.tags] || '#E4DCCF';
    return (
      <View style={styles.report}>
        <View style={styles.bgLayout}>
          <View style={[styles.bg, styles.bgLayout]} />
          <Image
            style={styles.functionalIcon}
            contentFit="cover"
            source={require("./functional.png")}
          />
          
          {/* Текст отзыва */}
          <Text style={[styles.text, styles.textTypo3]}>
            {review.reviewText}
          </Text>
          
          {/* Дата и время */}
          <View style={styles.date}>
            <Text style={[styles.text1, styles.textTypo3]}>{review.date}</Text>
            <Text style={[styles.text2, styles.textTypo3]}>{review.time}</Text>
          </View>
  
          {/* Имя пользователя */}
          <Text style={[styles.text3, styles.textTypo]}>{review.name}</Text>
          
          {/* Теги и рейтинг */}
          <View style={[styles.tags, styles.tagsFlexBox]}>
            <View style={[styles.tag, styles.tagSpaceBlock, {backgroundColor}]}>
              <Text style={[styles.text4, styles.textTypo]}>{review.tags}</Text>
            </View>
            <View style={[styles.rating, styles.tagSpaceBlock]}>
              <Image
                style={styles.ratingChild}
                contentFit="cover"
                source={require("./frame-78501.png")}
              />
              <Text style={[styles.text5, styles.textTypo]}>{review.rating}</Text>
            </View>
          </View>
  
          {/* Аватар */}
          <Image
            style={styles.avatarIcon}
            contentFit="cover"
            source={{ uri: review.avatarUrl }} // Используем динамический URI для аватара
          />
  
          <View style={[styles.grade, styles.tagsFlexBox]}>
            <Image
              style={[styles.dislikeIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./dislike.png")}
            />
            <Image
              style={[styles.likeIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./like3.png")}
            />
          </View>
        </View>
  
        {/* Блок для жалобы */}
        <View style={[styles.functional, styles.bg1Layout]}>
        <View style={[styles.bg1, styles.bg1Layout]} />
        <Text style={[styles.text6, styles.textPosition]}>Выберите жалобу</Text>

        <View style={styles.text9}>
          {complaints.map((complaint, index) => (
            <Pressable key={index} onPress={() => handleComplaintPress(complaint)}>
              <Text
                style={[
                  styles.text9,
                  styles.textTypo3,
                  selectedComplaint === complaint ? styles.activeText : styles.inactiveText,
                ]}
              >
                {complaint}
              </Text>
            </Pressable>
          ))}
        </View>
          
        <Pressable
          style={[
            styles.button,
            styles.buttonLayout,
            selectedComplaint ? styles.submitButtonActive : styles.submitButtonInactive,
          ]}onPress={onClose}
          disabled={!selectedComplaint} // Если жалоба не выбрана, кнопка не активна
        >
          <View style={[styles.buttonChild, styles.buttonLayout]} />
          <Text
            style={[
              styles.text12,
              styles.textPosition,
              selectedComplaint ? styles.submitButtonTextActive : styles.submitButtonTextInactive,
            ]}
          >
            Оставить жалобу
          </Text>
        </Pressable>
  
          {/* Кнопка закрытия */}
          <Pressable style={styles.vector} onPress={onClose}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("./close.svg")}
            />
          </Pressable>
        </View>
      </View>
    );
  };
  

const styles = StyleSheet.create({
    textButton: {
        fontSize: 16,
        marginVertical: 10,
      },
      activeText: {
        fontWeight: 'bold',
      },
      inactiveText: {
        fontWeight: 'normal',
        opacity: 0.5, // Тусклый текст
      },
      submitButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
      },
      submitButtonActive: {
        backgroundColor: Color.black,
      },
      submitButtonInactive: {
        backgroundColor: Color.darkBeige, // Цвет для неактивной кнопки
      },
      submitButtonText: {
        fontSize: 18,
      },
      submitButtonTextActive: {
        color: Color.white, // Текст для активной кнопки
      },
      submitButtonTextInactive: {
        opacity: 0.2,
    color: Color.black, // Текст для неактивной кнопки
  },
  bgLayout: {
    height: 213,
    width: 345,
  },
  textTypo3: {
    color: Color.black,
    fontWeight: "600",
    textAlign: "left",
  },
  textTypo: {
    fontWeight: "700",
    textAlign: "left",
    color: Color.black,
  },
  tagsFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  tagSpaceBlock: {
    paddingBottom: Padding.p_11xs,
    paddingTop: Padding.p_10xs,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  bg1Layout: {
    height: 292,
    width: 375,
  },
  textPosition: {
    left: "50%",
    fontWeight: "700",
    position: "absolute",
  },
  buttonLayout: {
    height: 48,
    position: "absolute",
    width: 345,
    borderRadius: Border.br_11xl,
  },
  bg: {
    borderRadius: Border.br_11xl,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.background,
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
    textAlign: "left",
    lineHeight: 18,
    color: Color.black,
    fontWeight: "600",
    fontSize: FontSize.mobileT2_size,
    left: 15,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.mobileT4_size,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  text2: {
    left: 69,
    fontSize: FontSize.mobileT4_size,
    textAlign: "left",
    top: 0,
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
    letterSpacing: -0.1,
    fontSize: FontSize.systemFontHeadline1_size,
    lineHeight: 18,
    left: 72,
    position: "absolute",
  },
  text4: {
    fontSize: FontSize.mobileT4_size,
  },
  tag: {
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
    width: 47,
    height: 47,
    top: 15,
    left: 15,
    position: "absolute",
    borderRadius: 24,
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
  bg1: {
    bottom: 0,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    left: 0,
    position: "absolute",
    backgroundColor: Color.background,
  },
  text6: {
    marginLeft: -172.5,
    top: 15,
    letterSpacing: -0.1,
    fontSize: FontSize.systemFontHeadline1_size,
    lineHeight: 18,
    textAlign: "left",
  },
  text8: {
    textAlign: "left",
    lineHeight: 18,
    color: Color.black,
    fontWeight: "600",
    fontSize: FontSize.mobileT2_size,
  },
  text9: {
    marginTop: 24,
    marginLeft: 7,
    textAlign: "left",
    lineHeight: 18,
    color: Color.black,
    fontWeight: "600",
    fontSize: FontSize.mobileT2_size,
  },
  text7: {
    top: 53,
    left: 15,
    position: "absolute",
  },
  buttonChild: {
    borderRadius: Border.br_31xl,
    
    left: 0,
    top: 0,
  },
  text12: {
    marginLeft: -59.5,
    top: "31.25%",
    textAlign: "center",
    fontSize: FontSize.mobileT2_size,
    left: "50%",
  },
  button: {
    top: 210,
    left: 15,
  },
  icon: {
    width: 24,
    height: 24,
  },
  vector: {
    left: "91%",
    top: "4.49%",
    bottom: "89.73%",
    position: "absolute",
  },
  functional: {
    marginTop: 108,
  },
  report: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    height: "100%",
    backgroundColor: 'rgba(41, 42, 36, 0.9)',
  },
});

export default Report;
