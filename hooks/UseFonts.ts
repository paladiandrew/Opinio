import * as Font from "expo-font";

export const UseFonts = async () =>
  await Font.loadAsync({
    NanitoSans: require('assets/fonts/NunitoSans-ExtraBold.ttf'),
    RobotoMedium: require('assets/fonts/Roboto-Medium.ttf'),
  });
    