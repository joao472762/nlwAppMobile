import React from "react";
import { styles } from "./style";
import { View, Text } from "react-native";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";

export function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Profile/>
                <ButtonAdd/>   
            </View>
            <View>
                <CategorySelect/>  
            </View>
            
        </View>
    )
}