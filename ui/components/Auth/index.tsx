import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Text,
    ImageBackground,
    View,
    Pressable,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authRequest} from "../../server/axios/fetchers/booksFetchers";
import TextInput from "react-native-input-validator";

const Auth = ({navigation}: any) => {
    const [arrayAuthEmail, setArrayAuthEmail] = useState();
    const [arrayAuthPassword, setArrayAuthPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState('');

    useEffect(()=>{
        (async()=>{
            const tokenStorage = await AsyncStorage.getItem('token')
            if (tokenStorage) navigation.navigate('Main')
        })()
    })
    const authHandler = async () => {
                let token = Math.random().toString(36).substr(2)
                if (arrayAuthPassword.length < 4) {
                    if (!arrayAuthEmail) setErrorText('Введите email')
                    setErrorText("Пароль должен быть длиннее")
                    setError(true)
                }
                else {
                    await authRequest({email: arrayAuthEmail, token: token+token, password: arrayAuthPassword})
                    await AsyncStorage.setItem('token', token)
                    navigation.navigate('Main')
                    setError(false)
                }
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <ImageBackground style={styles.mainBackground} source={require('../../styles/img/background.jpg')}>
                        <View>
                            <Text style={styles.title}>Sign In</Text>
                            <View>
                                <Text style={styles.input_text}>Email</Text>
                                <TextInput type='email' onChangeText={setArrayAuthEmail} value={arrayAuthEmail || ''} style={styles.input} placeholder='21'/>
                            </View>
                            <View>
                                <Text style={styles.input_text}>Password</Text>
                                <TextInput type='password' onChangeText={setArrayAuthPassword}  value={arrayAuthPassword}  style={styles.input} secureTextEntry={true} placeholder='21'/>
                            </View>
                            {error &&
                                <Text style={styles.error}>{errorText}</Text>
                            }
                            <View style={styles.auth_button_container}>
                                <Pressable onPress={authHandler} style={styles.auth_button} >
                                    <Text style={styles.auth_button_text}>Sign IN</Text>
                                </Pressable>
                            </View>
                        </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainBackground: {
      padding: 20,
      resizeMode: "cover"
    },
    title: {
        fontFamily: 'CircularStd-Bold',
        fontSize: 32,
        color: "#384F7D",
        marginTop: 220,
        marginBottom: 88
    },
    input: {
        backgroundColor: 'white',
        maxWidth: 300,
        padding: 10,
        borderBottomColor: '#00D23A',
        borderStyle: "solid",
        borderBottomWidth: 3,
        height: 45,
        fontSize: 14,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.1,
        shadowRadius: 20,
        marginBottom: 20,
        borderRadius: 8,
    },
    input_text: {
        fontFamily: 'CircularStd-Bold',
        fontSize: 12,
        textTransform: "uppercase",
        color: 'rgba(68, 89, 132, 0.3)',
        marginBottom: 1
    },
    auth_button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 12,
        backgroundColor: '#6790FB',
    },
    auth_button_container: {
        marginTop: 110,
        marginBottom: 130
    },
    auth_button_text: {
        fontFamily: 'CircularStd-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
        color: '#FFFFFF',
        letterSpacing: 2
    },
    error: {
        color: 'red',
        marginTop: 10
    }
});

export default Auth;
