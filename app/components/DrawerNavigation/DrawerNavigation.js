import React, { Component } from 'react';
import {
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { View, Text, StyleSheet, Button, Image, Dimensions} from 'react-native';
import News from '../../screens/NewsScreen';
import Achivement from "../../screens/AchivementScreen";
import Documents from "../../screens/DocumentsScreen";
import Settings from "../../screens/SettingsScreen";
import MenuDrawer from "../MenuDrawer/MenuDrawer";

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.83,
    contentComponent: ({ navigation }) => {
        return(<MenuDrawer navigation={navigation}/>)
    }
};

const DrawerNavigator = createDrawerNavigator (
    {
        News: {
            screen: News
        },
        Settings: {
            screen: Settings
        }
    },
    DrawerConfig
);

export default createAppContainer(DrawerNavigator);

// export default class DrawerNavigation extends Component {
//     render() {
//         return <Container/>
//     }
// }
//
// const NewsStackNavigator = createStackNavigator(
//     {
//         NewsNavigator: News
//     },
//     {
//         defaultNavigationOptions: ({navigation}) => {
//             return {
//                 headerLeft: (
//                     <Text onPress={() => navigation.openDrawer()}>|||||||||</Text>)
//             }
//         }
//     }
// );
//
// const MyDrawerNavigator = createDrawerNavigator({
//     News: {
//         screen: NewsStackNavigator,
//     },
// });
//
// const MySwitchNavigator = createSwitchNavigator({
//     News: { screen: News},
// });
//
// const Container = createAppContainer(MyDrawerNavigator);