import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import { Home } from '../screens/Home';
import { SignIn } from '../screens/Signin';
import { theme } from '../global/styles/theme';
import { propsNavegationStack } from './models';

const {Navigator,Screen} = createStackNavigator<propsNavegationStack>();
 
const {secondary90} = theme.colors
export function AuthRoutes(){
    return(
        <Navigator 
         screenOptions={{
             headerShown: false,
             cardStyle:{
                 
                 backgroundColor: secondary90,               
             },
         }}
        >
            <Screen
            
             name="SignIn"
             component={SignIn}
             
            />
            <Screen
             name="Home"
             component={Home}
            
            />
        </Navigator>
    )
}