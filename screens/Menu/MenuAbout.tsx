import * as React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Color, FontSize, Border, Padding } from "./GlobalStyles";
import MenuMain from "./MenuMain";
import MyMenu from "../BottomBarComponent/MyMenu";

const MenuAbout = () => {
  return (
    <View style={styles.menuabout}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollview}
          >
      <Text style={styles.text}>О нас</Text>
      <Text
        style={[styles.opinio, styles.text1FlexBox]}
      >{`Добро пожаловать в Opinio — социальную платформу, созданную для тех, кто хочет узнать больше о людях, с которыми они взаимодействуют в повседневной жизни. 

Наша цель — помочь людям делиться своими взглядами и получать достоверную информацию от других пользователей.`}</Text>
      <Text style={[styles.text1, styles.text1FlexBox]}>
        <Text style={styles.text2Typo}>{`Что мы делаем:
`}</Text>
        <Text style={styles.opinio1}>{`
Opinio позволяет вам делиться важной информацией о людях, будь то коллеги, друзья, знакомые по учёбе или личным отношениям. Вы можете оставлять отзывы, делиться впечатлениями и опытом, помогая другим пользователям лучше понимать окружающих.

`}</Text>
        <Text style={styles.text2Typo}>{`Наша миссия:
`}</Text>
        <Text style={styles.opinio1}>{`
Мы стремимся создать сообщество, где ценятся честность, уважение и ответственность. Opinio помогает принимать более информированные решения, будь то выбор партнёра по проекту, нового друга или коллеги. Мы стремимся создать активное сообщество, где люди охотно делятся своим опытом и позволяют сформировать всесторонний взгляд.

`}</Text>
        <Text style={styles.text2Typo}>{`Как мы работаем:
`}</Text>
        <Text style={styles.opinio1}>{`
В Opinio вы можете публиковать свои мнения в различных категориях, таких как работа, учёба, увлечения, дружба и личная жизнь. Удобная система тегов позволяет быстро находить нужную информацию и делиться ею с другими. Мы также предлагаем платную подписку, открывающую доступ к эксклюзивному контенту и дополнительным функциям.

`}</Text>
        <Text style={styles.text2Typo}>{`Модерация отзывов:
`}</Text>
        <Text style={styles.opinio1}>{`
Пользователи Opinio играют ключевую роль в поддержании качества и достоверности контента на платформе. Каждый пользователь может оценивать отзывы, оставляя лайки или дизлайки. Отзыв, набравший количество дизлайков, равное 10%(но не менее 15 штук) от количества подписчиков пользователя, автоматически отправляется на проверку администрации. На основании проверки администрации, такой отзыв может быть удалён, если он нарушает правила сообщества или содержит недостоверную информацию. Таким образом, вы сами помогаете нам поддерживать высокий стандарт контента и делать Opinio лучше для всех.

`}</Text>
        <Text style={styles.text2Typo}>{`Безопасность и конфиденциальность:
`}</Text>
        <Text style={styles.opinio1}>{`
Мы понимаем, насколько важна конфиденциальность личной информации. В Opinio предусмотрены строгие меры защиты данных, чтобы ваши отзывы и личные данные оставались в безопасности. Мы активно боремся с нарушениями и обеспечиваем соблюдение всех стандартов конфиденциальности.

`}</Text>
        <Text style={styles.text2Typo}>
          Благодарим вас за доверие к Opinio!
        </Text>
      </Text>
      </ScrollView>
      <MyMenu activeButton={"Menu"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  text1FlexBox: {
    marginTop: 24,
    lineHeight: 18,
    textAlign: "left",
    color: Color.black,
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.mobileH1_size,
    letterSpacing: -0.8,
    lineHeight: 40,
    fontWeight: "800",
    textAlign: "left",
    color: Color.black,
    alignSelf: "stretch",
  },
  opinio: {
    fontSize: FontSize.systemFontHeadline1_size,
    letterSpacing: -0.1,
    fontWeight: "700",
  },
  text2Typo: {
    fontWeight: "700",
  },
  opinio1: {
    fontWeight: "600",
  },
  text1: {
  },
  menuabout: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.background2,
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
  scrollview: {
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 70,
    paddingBottom: 100,
  },
});

export default MenuAbout;
