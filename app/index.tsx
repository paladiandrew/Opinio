const Stack = createNativeStackNavigator();
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import VKidScreen from "screens/FirstLoginScreen/VKidScreen";
import RegistrationAge from "screens/FirstLoginScreen/RegistrationAge";
import RegistrationGeolocation from "screens/FirstLoginScreen/RegistrationGeolocation";

import Lenta from "screens/News/Lenta";
import FindProfile from "screens/SearchProfile/FindProfile"
import MenuMain from "screens/Menu/MenuMain";
import MenuExit from "screens/Menu/MenuExit";
import MenuFriends from "screens/Menu/MenuFriends";
import MenuReviews from "screens/Menu/MenuReviews";
import MenuAbout from "screens/Menu/MenuAbout";
import MyProfile from "screens/Profiles/MyProfile";
import Edit from "@/screens/Report/Edit";
import EditProfile from "@/screens/Profiles/EditProfile";

import SystemNavigationBar from 'react-native-system-navigation-bar';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as NavigationBar from 'expo-navigation-bar';
import { User } from './Backend/User';
import { UserProvider } from './Backend/UserContext';
import { StatusBar } from "react-native";



const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  NavigationBar.setVisibilityAsync("hidden");
  StatusBar.setBackgroundColor('#ECE5D8');
  return (
    <UserProvider>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {loading ? (
        <>
          <Stack.Screen
            name="VKIDScreen"
            component={VKidScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegistrationAge"
            component={RegistrationAge}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegistrationGeolocation"
            component={RegistrationGeolocation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
        name="Lenta"
        component={Lenta}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FindProfile"
        component={FindProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MenuAbout"
        component={MenuAbout}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MenuExit"
        component={MenuExit}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MenuFriends"
        component={MenuFriends}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MenuMain"
        component={MenuMain}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MenuReviews"
        component={MenuReviews}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyProfile"
        component={MyProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Edit"
        component={Edit}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
        </>
      ) : (
        <Stack.Screen
        name="Newss"
        component={Lenta}
        options={{ headerShown: false }}
      />
      )}
    </Stack.Navigator>
    </UserProvider>
  );
};
export default App;