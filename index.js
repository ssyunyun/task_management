/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Routing from './Layout/0_Route';
// import Routing from './nakanishi';
// import Routing from './Demo_1';
// import Routing from './Demo_2';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Routing);