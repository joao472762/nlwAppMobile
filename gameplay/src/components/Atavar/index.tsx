import React from "react";
import { Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { style } from "./style";
import { theme } from "../../global/styles/theme";

type avatarProps = {
    urlImage: string
}

export function Avatar({urlImage}: avatarProps){
    const {secondary60} = theme.colors
    return(
        <LinearGradient
        colors={[secondary60, 'purple']}
        style={style.container}
        >
            <Image 
            source={{uri: urlImage}}
            style={style.avatar}
            />
        </LinearGradient>
    );
}