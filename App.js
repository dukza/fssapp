import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Image, StatusBar, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";
import Stack from "./navigation/Stack";

// 6
const cacheImages = images =>
  images.map(image => {
    if (typeof image === "string") {
      // prefetch 이미지를 가져오다
      return Image.prefetch(image);
    } else {
      //expo install expo-asset 설치
      return Asset.fromModule(image).downloadAsync();
    }
  });
// 7
const cacheFonts = fonts =>
  fonts.map(font => [Font.loadAsync(font), Font.loadAsync(font)]);

export default function App() {
  // 1
  const [isReady, setIsReady] = useState(true);
  // 3 미리 로딩
  const loadAssets = () => {
    // 5
    const images = cacheImages([
      "https://images.unsplash.com/photo-1584486188544-dc2e1417aff1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      require("./assets/splash.png")
    ]);
    // console.log(images);
    const fonts = cacheFonts([Ionicons.font]);
    // console.log(font);
    // 8
    return Promise.all([...images, ...fonts]);
  };
  // 4
  const onFinish = () => setIsReady(false);
  // 2
  return isReady ? (
    <>
    {/* 8 navigation 폴더 생성*/}
    <NavigationContainer>
      <Stack></Stack>
    </NavigationContainer>  
    <StatusBar barStyle="light-content" />
    </> 
  ):(
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}

