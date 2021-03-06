import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
     
    },
    content:{
        paddingHorizontal: 50,
        marginTop: -40,
    },
    image: {
        width: '100%',
        height: 360,
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        lineHeight: 40,
        fontFamily: theme.fonts.title700
     
        
    },
    subtitle:{
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 60,
        lineHeight: 25,
        fontFamily: theme.fonts.title500
    }
    
})
