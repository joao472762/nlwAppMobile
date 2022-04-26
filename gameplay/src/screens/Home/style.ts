import { StyleSheet } from "react-native";
import {getStatusBarHeight} from "react-native-iphone-x-helper"
export const styles = StyleSheet.create({
    container: {
        flex:1
    },
    header:{
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42, 
        width: '100%',
        flexDirection: 'column',
        paddingHorizontal: 24,
        justifyContent: 'space-between'
    }
})