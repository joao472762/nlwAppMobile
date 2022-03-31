import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: theme.color.background
     
    },
    input :{
        width: 200,
        height: 30,
        borderBottomWidth: 2
    }
    
})


