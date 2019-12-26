import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import NewsScreen from "../../screens/NewsScreen";
import Other from "../../screens/OtherScreen";
import Documents from "../../screens/DocumentsScreen";
import Icon from 'react-native-vector-icons/AntDesign';
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
                        name="medium-wordmark"
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
                        name="star"
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
                        name="message1"
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
                        name="file1"
                        color={tintColor}
                        size={24}
                    />
                )
            })
        },
        Other: {
            screen: Other,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="edit"
                        color={tintColor}
                        size={24}
                    />
                )
            })
        },
    },
);

export default createAppContainer(NewsStackNavigator);
