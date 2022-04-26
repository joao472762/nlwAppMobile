import React from "react";
import { styles } from "./style";
import { View, Text } from "react-native";
import { Profile } from "../../components/Profile";

export function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Profile/>
              
                <View>

                </View>
            </View>
        </View>
    )
}