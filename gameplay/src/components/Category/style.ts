import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
    conatiner:{
        width: 104,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        borderRadius: 8,
  
    },
    content:{
        width: 100,
        height: 116,
        backgroundColor: theme.colors.secondary40,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 7
    },
    checked: {
        width: 10,
        height: 10,
        alignSelf: 'flex-end',
        backgroundColor: theme.colors.primary,
        marginRight: 7,
        borderRadius: 3,
    },
    check: {
        width: 12,
        height: 12,
        alignSelf: 'flex-end',
        backgroundColor: theme.colors.secondary100,
        marginRight: 7,
        borderWidth: 1.3,
        borderColor: theme.colors.secondary50,
        borderRadius: 3,
    },
    title: {
        fontWeight: 'bold',
        color: theme.colors.heading,
        fontFamily: theme.fonts.title500,
        fontSize: 15,
    }
})