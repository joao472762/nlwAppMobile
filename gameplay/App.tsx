import React from "react";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { Rajdhani_400Regular,Rajdhani_500Medium,Rajdhani_600SemiBold,Rajdhani_700Bold } from "@expo-google-fonts/rajdhani";
import { SignIn } from "./src/screens/Signin";
import { StatusBar } from "react-native";
import { Background } from "./src/components/Background";
import { Home } from "./src/screens/Home";
import { Routes } from "./src/routes";



export default function App(){

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_400Regular,
    Rajdhani_500Medium,
    Rajdhani_600SemiBold,
    Rajdhani_700Bold
    
  })
  if(!fontsLoaded){
    return <AppLoading/>
  }

  return(
    <Background>
      <StatusBar
        barStyle= 'light-content'
        backgroundColor= 'transparent'
        translucent/>
      <Routes/>
    </Background>
  );
}