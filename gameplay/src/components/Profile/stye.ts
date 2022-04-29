import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    user:{
        flexDirection: "row",
    },
    greeting:{
        fontSize: 24,
        fontFamily: theme.fonts.title500,
        color: theme.colors.heading,
    },
    userName:{
        fontSize: 24,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        marginLeft: 6
    },
    message: {
        fontFamily: theme.fonts.text400,
        fontSize: 14,
        color: theme.colors.highlight
    }
})