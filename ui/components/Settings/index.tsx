import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Settings = ({navigation}: any) => {
    const logout = async () => {
        await AsyncStorage.removeItem('token')
        navigation.navigate('Auth')
    }
    return (
            <ScrollView>
                <LinearGradient colors={['#EEECFF', '#FFFFFF']}>
                    <View style={styles.settingsHeader}>
                        <TouchableHighlight onPress={()=>navigation.navigate('Home')}>
                            <Image source={require('../../styles/img/arrow.png')} />
                        </TouchableHighlight>
                        <Text style={styles.textHeader}>Settings</Text>
                    </View>
                    <View style={styles.settingsSectionContainer}>
                        <View style={styles.settingsSection}>
                            <View style={styles.settingsSectionText}>
                                <Image source={require('../../styles/img/account.png')} />
                                <Text style={styles.settingsSectionLabel}>Account</Text>
                            </View>
                            <Image source={require('../../styles/img/Back.png')} />
                        </View>
                        <View style={styles.settingsSection}>
                            <View style={styles.settingsSectionText}>
                                <Image source={require('../../styles/img/Notifications.png')} />
                                <Text style={styles.settingsSectionLabel}>Notifications</Text>
                            </View>
                            <Image source={require('../../styles/img/Back.png')} />
                        </View>
                        <View style={styles.settingsSection}>
                            <View style={styles.settingsSectionText}>
                                <Image source={require('../../styles/img/lock.png')} />
                                <Text style={styles.settingsSectionLabel}>Privacy</Text>
                            </View>
                            <Image source={require('../../styles/img/Back.png')} />
                        </View>
                        <View style={styles.settingsSection}>
                            <View style={styles.settingsSectionText}>
                                <Image source={require('../../styles/img/support.png')} />
                                <Text style={styles.settingsSectionLabel}>Help Center</Text>
                            </View>
                            <Image source={require('../../styles/img/Back.png')} />
                        </View>
                        <View style={styles.settingsSectionLast}>
                            <View style={styles.settingsSectionText}>
                                <Image source={require('../../styles/img/general.png')} />
                                <Text style={styles.settingsSectionLabel}>General</Text>
                            </View>
                            <Image source={require('../../styles/img/Back.png')} />
                        </View>
                        <View style={styles.settingLogout}>
                            <Text onPress={logout} style={styles.settingLogoutText}>Logout</Text>
                        </View>
                    </View>
                </LinearGradient>
            </ScrollView>
    );
};

const styles = StyleSheet.create({
    settingsHeader: {
        backgroundColor: '#D45E5E',
        padding: 20,
        paddingTop: 60,
        paddingBottom: 40,
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    settingsSectionLast: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(56, 79, 125, 0.1)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: 'rgba(56, 79, 125, 0.1)'
    },
    textHeader: {
        fontFamily: 'CircularStd-Bold',
        fontSize: 19,
        color: 'white',
        marginLeft: 120
    },
    settingsSection: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: 'rgba(56, 79, 125, 0.1)'
    },
    settingsSectionText: {
        display: 'flex',
        flexDirection: 'row'
    },
    settingsSectionLabel: {
        marginLeft: 10,
        color: 'rgba(68, 89, 132, 0.8)',
        fontSize: 16
    },
    settingLogout: {
        marginBottom: 280,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(56, 79, 125, 0.1)',
    },
    settingLogoutText: {
        color: '#D45E5E',
        fontSize: 16,
        padding: 20,
    },
    settingsSectionContainer: {
        marginTop: 15
    }
});

export default Settings;
