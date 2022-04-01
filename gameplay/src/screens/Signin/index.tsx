
import React, { useState } from "react";
import { Text, View, Image, StatusBar} from "react-native";

import ilustration from "../../../assets/illustration.png"
import { ButtonIcon } from "../../components/buttonIcon";
import { styles } from "./style";
export  function SignIn(){

    return(
        <View style={styles.container} >
           
            <Image 
            source={ilustration} 
            style={styles.image}
            resizeMode = 'stretch'
            
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {'\n'}
                    e organize suas {'\n'}
                    jogatinas{'\n'}
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games{'\n'}
                    favoritos com seus amigos
                </Text>
                <ButtonIcon title="Entrar como Dicord" activeOpacity={.7}/>
            </View>
            
        </View>

    )
}