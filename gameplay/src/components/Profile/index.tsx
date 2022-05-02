import React from "react";
import { Text, View } from "react-native";

import { styles } from "./stye";
import { Avatar } from "../Atavar";

export function Profile(){
    return(
        <View style={styles.container}>
            
            <Avatar urlImage="https://github.com/joao472762.png"/>
            
            <View >
                
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>
                    
                    <Text style={styles.userName}>
                        João
                    </Text>
                </View>
                <Text style={styles.message}>
                        Hoje é dia de vitória
                </Text>
            </View>


        </View>
    );
}