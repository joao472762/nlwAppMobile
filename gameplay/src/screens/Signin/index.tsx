import React, { useState } from "react";
import { Text, View, Image} from "react-native";
import { styles } from "./style";
import ilustration from "../../../assets/illustration.png"

export  function SignIn(){

    return(
        <View style={styles.container} >
            <Image 
            source={ilustration} 
            style={styles.image}/>

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
            </View>
        </View>

    )
}