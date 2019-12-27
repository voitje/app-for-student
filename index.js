/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from "./App";
import {name as appName} from './app.json';
import React from 'react';
import { Provider } from 'react-redux';
import store from "./app/store/store";
import BottomNavigator from "./app/components/BottomNavigator/BottomNavigator";

const RNRedux = () => (
    <Provider store = { store }>
        <BottomNavigator/>
    </Provider>
);

AppRegistry.registerComponent(appName, ()=>RNRedux);
