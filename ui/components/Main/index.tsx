import React from 'react';
import Home from "../Home";
import Settings from "../Settings";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Image} from "react-native";

const Main = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator  screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#384F7D',
            tabBarLabelStyle: {
                fontSize: 10,
                fontFamily: 'CircularStd-Medium'
            },
            tabBarStyle: {
                backgroundColor: 'white',
                padding: 10,
                position: "absolute",
            }
        }}>
                <Tab.Screen
                    name="Home"
                    options={{
                        tabBarLabel: 'Books',
                        tabBarIcon: ({focused}) => (
                                <Image
                                    style={{
                                        width: 20,
                                        overflow: 'visible',
                                        height: 20,
                                        tintColor: focused ? '#384F7D' : 'rgba(56, 79, 125, 0.45)'
                                }}
                                    source={require('../../styles/img/books.png')}
                                    resizeMode='contain'
                                />
                        ),
                        }
                    }
                    component={Home}
                />
                <Tab.Screen
                    name='Settings'
                    options={{
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({focused}) => (
                            <Image
                                style={{
                                    width: 20,
                                    overflow: 'visible',
                                    height: 20,
                                    tintColor: focused ? '#384F7D' : 'rgba(56, 79, 125, 0.45)'
                                }}
                                source={require('../../styles/img/settings.png')}
                                resizeMode='contain'
                            />
                        ),
                    }}
                    component={Settings}
                />
            </Tab.Navigator>
    );
};

export default Main;
