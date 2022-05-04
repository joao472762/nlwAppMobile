import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";

import { styles } from "./style";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Inter_500Medium } from "@expo-google-fonts/inter";

export function Home(){
    const [category, setCategory] = useState('')

    const appionments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: 'null',
                owner: true
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        }
    ]


    function handleCateorySelected(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId)
        /*if(categoryId === category){
            setCategory('')
        }
        else{
            setCategory(categoryId)
        }*/
    }
    return(

        <View style={styles.container}>
            <View style={styles.header}>
                <Profile/>
                <ButtonAdd/>   
            </View> 
            <View>
                <CategorySelect
                categorySelected={category}
                setCategory = {handleCateorySelected}
                />
                <View style={styles.content}> 
                    <ListHeader
                    title="Partidas agendadas"
                    subtitle= "Total 6"
                    />
                    <FlatList
                    data= {appionments}
                    keyExtractor = {item => item.id}
                    renderItem = {({item})=>(
                        <Text>
                            {item.guild.name}
                        </Text>
                    )}
                    />
                </View>
            </View>
            
        </View>
    )
}