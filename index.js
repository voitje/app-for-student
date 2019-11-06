/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from "./App";
import {name as appName} from './app.json';
import React from 'react';
import { Provider } from 'react-redux';
import store from "./app/store/store";
import SideBar from "./app/components/SideBar/SideBar";
import DrawerNavigation from "./app/components/DrawerNavigation/DrawerNavigation";
import HeaderExample from "./app/components/TEST";

const RNRedux = () => (
    <Provider store = { store }>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => DrawerNavigation);
