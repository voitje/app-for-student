import React, {Component} from 'react';
import Index from "./app";
import {Text, View, StyleSheet} from "react-native";
import store from "./app/store/store";
import { Provider } from 'react-redux'
import SideBarOld from "./app/components/SideBarOld/SideBarOld";
import Header from "./app/components/Header/Header";
import {create} from "react-native/jest/renderer";
import SideBar from "./app/components/SideBar/SideBar";
import DrawerNavigation from "./app/components/DrawerNavigation/DrawerNavigation";

class App extends Component {
    render() {
        return (
              <View>
                  <DrawerNavigation/>
              </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    header: {
        display: 'flex',
        left: 0,
        right: 0,
    },
});

export default App;