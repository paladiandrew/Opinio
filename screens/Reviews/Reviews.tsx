import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize } from "./GlobalStyles";

export type ReviewsType = {
  prop?: string;
  prop1?: string;
  prop2?: string;
  /** Style props */
  propWidth?: number | string;
  propMarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Reviews = ({ prop, prop1, propWidth, propMarginLeft, prop2 }: ReviewsType) => {
  const reviewsStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propWidth, propMarginLeft]);

  return (
    <View style={[styles.reviews, reviewsStyle]}>
      <View style={styles.reviewsChild} />
      <Text style={[styles.text, styles.textFlexBox]}>{prop}</Text>
      <Text style={[styles.text2, styles.textFlexBox]}>{prop2}</Text>
      <Text style={[styles.text1, styles.textFlexBox]}>{prop1}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  reviewsChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_mini,
    backgroundColor: Color.white,
    position: "absolute",
    height: 90,
    width: 112,
  },
  text: {
    top: 12,
    left: 15,
    fontSize: FontSize.mobileT4_size,
    lineHeight: 12,
    fontWeight: "700",
  },
  text1: {
    marginLeft: -41,
    top: 50,
    left: "50%",
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.5,
    lineHeight: 30,
    fontWeight: "600",
  },
  text2: {
    top: 24,
    left: 15,
    fontSize: FontSize.mobileT4_size,
    lineHeight: 12,
    fontWeight: "700",
  },
  reviews: {
    height: 90,
    width: 112,
  },
});

export default Reviews;