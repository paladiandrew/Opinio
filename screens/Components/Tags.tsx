import React, { useState, useEffect } from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

// Предполагаем, что у вас есть файл с константами для цветов, отступов и размеров шрифтов
import { Color, Padding, FontSize, Border } from './GlobalStyles';

interface TagProps {
  label: string;
  style?: any;
  isActive: boolean;
  onPress: () => void;
}

const Tag: React.FC<TagProps> = ({ label, style, isActive, onPress }) => {
  return (
    <Pressable 
      style={[styles.tagFlexBox, style]} 
      onPress={onPress}
    >
      <Text style={[styles.textTypo, isActive ? styles.activeText : styles.text5, isActive && label === "Все" ? styles.activeFirstTagText : null]}>
        {label}
      </Text> 
    </Pressable>
  );
};

interface TagsProps {
    onTagSelect: (index: number, label: string) => void; // Новый пропс для обратного вызова
  }

const Tags: React.FC<TagsProps> = ({ onTagSelect }) => {
  const [activeTagIndex, setActiveTagIndex] = useState(0); // Изначально активный - первый тег (индекс 0)

  // Функция для обновления активного тега
  const handleTagPress = (index: number, label: string) => {
    setActiveTagIndex(index);
    onTagSelect(index, label);
  };

  // Создание массива с цветами для активных тегов
  const activeTagColors: { [key: number]: string } = {
    0: Color.black,
    1: '#D9B9F3', 
    2: '#AADCAE',
    3: '#BFCC92',
    4: '#EED881',
    5: '#ACDEDB',
    6: '#FAB19C',
    7: '#E4DCCF',
  };

  useEffect(() => {
    // Обновляем цвет активного тега
    const activeTagColor = activeTagColors[activeTagIndex]; 

    // Обновляем стиль активного тега
    setActiveTagStyles(activeTagColor);

  }, [activeTagIndex]);

  // Стиль для активного тега (единый для всех)
  const [activeTagStyles, setActiveTagStyles] = useState<string>(Color.white); 

  return (
    <View style={styles.tags}>
      <Tag label="Все" style={[styles.tag, activeTagStyles === Color.black ? styles.activeTag0 : styles.tagInactive]} isActive={activeTagIndex === 0} onPress={() => handleTagPress(0, "Все")} />
      <Tag label="+16" style={[styles.tag1, activeTagStyles === '#D9B9F3' ? styles.activeTag1 : styles.tag1Inactive]} isActive={activeTagIndex === 1} onPress={() => handleTagPress(1, "+16")} />
      <Tag label="Работа" style={[styles.tag2, activeTagStyles === '#AADCAE' ? styles.activeTag2 : styles.tag2Inactive]} isActive={activeTagIndex === 2} onPress={() => handleTagPress(2, "Работа")} />
      <Tag label="Учёба" style={[styles.tag3, activeTagStyles === '#BFCC92' ? styles.activeTag3 : styles.tag3Inactive]} isActive={activeTagIndex === 3} onPress={() => handleTagPress(3, "Учёба")} />
      <Tag label="Увлечения" style={[styles.tag4, activeTagStyles === '#EED881' ? styles.activeTag4 : styles.tag4Inactive]} isActive={activeTagIndex === 4} onPress={() => handleTagPress(4, "Увлечения")} />
      <Tag label="Дружба" style={[styles.tag5, activeTagStyles === '#ACDEDB' ? styles.activeTag5 : styles.tag5Inactive]} isActive={activeTagIndex === 5} onPress={() => handleTagPress(5, "Дружба")} />
      <Tag label="Личная жизнь" style={[styles.tag6, activeTagStyles === '#FAB19C' ? styles.activeTag6 : styles.tag6Inactive]} isActive={activeTagIndex === 6} onPress={() => handleTagPress(6, "Личная жизнь")} />
      <Tag label="Другое" style={[styles.tag7, activeTagStyles === '#E4DCCF' ? styles.activeTag7 : styles.tag7Inactive]} isActive={activeTagIndex === 7} onPress={() => handleTagPress(7, "Другое")} />
    </View>
  );
};

const styles = StyleSheet.create({
  tags: {
    width: "100%",
    height: 70,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  tag: {
    //backgroundColor: '#F3EEE6', // Цвет первого тега в неактивном состоянии
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_mini,
    justifyContent: 'center',
    borderRadius: Border.br_xl,
  },
  tagInactive: {
    backgroundColor: '#F3EEE6', // Цвет первого тега в неактивном состоянии
  },
  tag1: {
    marginLeft: 5,
  },
  tag2: {
    marginLeft: 5,
  },
  tag3: {
    marginLeft: 5,
  },
  tag4: {
    marginLeft: 5,
  },
  tag5: {
    marginLeft: 5,
  },
  tag6: {
    marginLeft: 5,
  },
  tag7: {
    marginLeft: 5,
  },
  tag1Inactive: { 
    backgroundColor: Color.tagLight16, // Цвет тега 1 в неактивном состоянии
  },
  tag2Inactive: { 
    backgroundColor: Color.tagLightWork, // Цвет тега 2 в неактивном состоянии
  },
  tag3Inactive: { 
    backgroundColor: Color.tagLightStudy, // Цвет тега 3 в неактивном состоянии
  },
  tag4Inactive: { 
    backgroundColor: Color.tagLightHobby, // Цвет тега 4 в неактивном состоянии
  },
  tag5Inactive: { 
    backgroundColor: Color.tagLightFriend, // Цвет тега 5 в неактивном состоянии
  },
  tag6Inactive: { 
    backgroundColor: Color.tagLightLife, // Цвет тега 6 в неактивном состоянии
  },
  tag7Inactive: { 
    backgroundColor: Color.colorLinen_100, // Цвет тега 7 в неактивном состоянии
  },
  activeTag0: {
    backgroundColor: Color.black, // Цвет тега 1 в активном состоянии
  },
  activeTag1: {
    backgroundColor: '#D9B9F3', // Цвет тега 1 в активном состоянии
  },
  activeTag2: {
    backgroundColor: '#AADCAE', // Цвет тега 2 в активном состоянии
  },
  activeTag3: {
    backgroundColor: '#BFCC92', // Цвет тега 3 в активном состоянии
  },
  activeTag4: {
    backgroundColor: '#EED881', // Цвет тега 4 в активном состоянии
  },
  activeTag5: {
    backgroundColor: '#ACDEDB', // Цвет тега 5 в активном состоянии
  },
  activeTag6: {
    backgroundColor: '#FAB19C', // Цвет тега 6 в активном состоянии
  },
  activeTag7: {
    backgroundColor: '#E4DCCF', // Цвет тега 7 в активном состоянии
  },
  activeFirstTagText: {
    color: Color.white,
  },
  text4: {
    textAlign: 'left',
    fontSize: FontSize.mobileT4_size,
    color: Color.white,
  },
  textTypo: {
    fontWeight: '700',
    textAlign: 'left',
  },
  tagFlexBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_mini,
    justifyContent: 'center',
    borderRadius: Border.br_xl,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5, // Добавляем отступ в 5px между тегами
  },
  text5: {
    opacity: 0.5,
    textAlign: 'left',
    fontSize: FontSize.mobileT4_size,
    color: Color.black, // Изменили цвет текста, чтобы он не перекрывался черным цветом 
  },
  activeText: { // Стиль для активного текста 
    opacity: 1, // Убираем полупрозрачность 
    textAlign: 'left',
    fontSize: FontSize.mobileT4_size,
    color: Color.black, // Цвет текста для активных тегов
  },
});

export default Tags;