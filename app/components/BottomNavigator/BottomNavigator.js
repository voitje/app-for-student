import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import NewsScreen from "../../screens/NewsScreen";
import Settings from "../../screens/SettingsScreen";
import Documents from "../../screens/DocumentsScreen";
import Icon from 'react-native-vector-icons/Entypo';
import React from "react";
import Achivement from "../../screens/AchivementScreen";
import MessageScreen from "../../screens/MessageScreen";

const NewsStackNavigator = createBottomTabNavigator(
    {
        News: {
            screen: NewsScreen,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="menu"
                        color={tintColor}
                        size={24}
                    />
                )
            })
        },
        Settings: {
            screen: Settings,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="menu"
                        color={tintColor}
                        size={24}
                    />
                )
            })
        },
        Message: {
            screen: MessageScreen,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="menu"
                        color={tintColor}
                        size={24}
                    />
                )
            })
        },
        Documents: {
            screen: Documents,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="menu"
                        color={tintColor}
                        size={24}
                    />
                )
            })
        },
        Achivement: {
            screen: Achivement,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="menu"
                        color={tintColor}
                        size={24}
                    />
                )
            })
        },
    },
);

export default createAppContainer(NewsStackNavigator);
