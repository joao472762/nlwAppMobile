import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from "./style";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { theme } from "../../global/styles/theme";


export function ButtonAdd({...props}: RectButtonProps){
    return(
        <RectButton 
        {...props}
        style={styles.container}
        >
            <MaterialCommunityIcons
            name="plus"
            color={theme.colors.heading}
            size={24}
            />
        </RectButton>
    )
}