import {useEffect, useState} from 'react';
import Auth from "./ui/components/Auth";
import Main from "./ui/components/Main";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import {RootStackParamList} from "./ui/types";
import * as React from 'react';

const App = () => {
    let isSignedIn;
    useEffect(() => {
        (async () => {
            let tokenAuth = await AsyncStorage.getItem('token')
            if (tokenAuth) isSignedIn = true
        })()
    }, [isSignedIn]);
    const Stack = createStackNavigator<RootStackParamList>();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                        <Stack.Screen
                            name="Auth"
                            options={{
                                headerShown: false,
                            }}
                            component={Auth}
                        />
                        <Stack.Screen
                            name='Main'
                            component={Main}
                            options={{
                                headerShown: false
                            }}
                        />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
