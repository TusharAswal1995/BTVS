import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';

import App from './src/navigation';
import {name as appName} from './app.json';
console.log('asadsdasd');
AppRegistry.registerComponent(appName, () => App);
