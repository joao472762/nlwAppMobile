import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import { Home } from '../screens/Home';
import { SignIn } from '../screens/Signin';

const {Navigator,Screen} = createStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator>
            <Screen
             name='Sign'
             component={SignIn}
            />
            <Screen
             name='Home'
             component={Home}
            
            />
        </Navigator>
    )
}