import React from "react";
import {SvgProps} from "react-native-svg"
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./style";
import { theme } from "../../global/styles/theme";

type CategoryProps = RectButtonProps &{
    title: string,
    icon: React.FC<SvgProps>,
    checked?: boolean
}

export function Category({
    title,
    icon: Icon,
    checked= false, 
    ...rest }
:CategoryProps)
{
    const {secondary50,secondary70} = theme.colors

    return (
        <RectButton {...rest}>
            <LinearGradient
            style={styles.conatiner}
            colors={[secondary50, secondary70]}
            >
                <View style={[styles.content,{opacity: checked ? 1 : 0.4}]}>
                    <View style={checked ? styles.check : styles.checked }>
                        <Icon width={48}
                         height={48} 
                          />
                    </View>
                    <Text style={styles.title}>
                        {title}

                    </Text>
                    
                </View>

            </LinearGradient>
        </RectButton>
    )
}