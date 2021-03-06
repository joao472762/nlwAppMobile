import React, { useState } from "react";
import { ScrollView } from "react-native";

import { Category } from "../Category";
import { categories } from "../../utils";
import { styles } from "./style";

type categorySelectProps = {
    categorySelected: string,
    setCategory: (categoryId: string) => void,
}

export function CategorySelect({setCategory,categorySelected}: categorySelectProps){
 
    return(
        <ScrollView
        style={styles.container}
        horizontal
        collapsable = {true}
        showsHorizontalScrollIndicator = {false}
        contentContainerStyle={{paddingRight: 40}}
        
        >
            {
                categories.map(category=>(            
                    <Category
                    key = {category.id}
                    title= {category.title}
                    icon = {category.icon}
                    checked = {category.id === categorySelected}
                    onPress= {() => setCategory(category.id)}
                    />
                    
                ))
            }
        </ScrollView>
    )
}