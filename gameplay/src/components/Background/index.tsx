import React, {ReactNode} from "react";
import {LinearGradient} from "expo-linear-gradient"

import { styles } from "./style";
import { theme } from "../../global/styles/theme";


type  backgroundProps = {
    children: ReactNode
}

export  function Background({children}:backgroundProps){
    const {secondary100,secondary80} = theme.colors
    return(
        <LinearGradient
        style={styles.container}
        colors={[secondary80,secondary100]} 
        >
            {children}
        </LinearGradient>
    )
}