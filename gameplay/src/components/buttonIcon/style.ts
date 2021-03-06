import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width:'100%',
        height: 56,
        backgroundColor: theme.colors.primary,
        flexDirection: 'row',
        borderRadius: 8,
        alignItems: 'center',
  
    },
    iconWrapper:{
        width: 56,
        height: 56,
        borderRightWidth: 1,
        borderRightColor: theme.colors.line,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: "center",
    },
    icon:{
        width: 24,
        height: 18,
    }
})