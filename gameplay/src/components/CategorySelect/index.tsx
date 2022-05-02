import React, { useState } from "react";
import { ScrollView } from "react-native";

import { Category } from "../Category";
import { categories } from "../../utils";

type categorySelectProps = {
    categorySelected?: string
}

export function CategorySelect({categorySelected}: categorySelectProps){
 
    
    return(
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator = {false}
        contentContainerStyle={{paddingLeft:10}}
        
        >
            {
                categories.map(category=>(            
                    <Category
                    key = {category.id}
                    title= {category.title}
                    icon = {category.icon}
                    
                    />
                    
                ))
            }
        </ScrollView>
    )
}