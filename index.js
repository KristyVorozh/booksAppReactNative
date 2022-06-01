
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import mockServer from './ui/server/mocking';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs(); //Ignore all log notifications

if (window.server) {
    window.server.shutdown();
}
window.server = mockServer.dataServer();

AppRegistry.registerComponent(appName, () => App);