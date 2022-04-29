import React from "react";
import { styles } from "./style";
import{   View,Image,Text, } from 'react-native'
import dicordIcon from '../../assets/discord.png'
import {RectButton, RectButtonProps}  from "react-native-gesture-handler"

//here you can use interface or type
type ButtonProps   = RectButtonProps &{
    title: string;
}


export function ButtonIcon({title, ...rest}: ButtonProps){
    return(
        <RectButton
            style={styles.container}
            {...rest}
         >
            <View style={styles.iconWrapper}>
                <Image 
                    source={dicordIcon}
                    style={styles.icon}
                />    
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
            
        </RectButton>     
    );
}
