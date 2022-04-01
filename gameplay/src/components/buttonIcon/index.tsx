import React from "react";
import{
    View,
    Image,
    Text,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native'
import dicordIcon from '../../../assets/discord.png'
import { styles } from "./style";



//here you can use interface ou type
type ButtonProps   = TouchableOpacityProps &{
    title: string;
}

 


export function ButtonIcon({title, ...rest}: ButtonProps){
    return(
        <TouchableOpacity 
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
            
        </TouchableOpacity>     
    );
}
