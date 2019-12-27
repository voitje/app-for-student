import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import NewsScreen from "../../screens/NewsScreen";
import Other from "../../screens/OtherScreen";
import Documents from "../../screens/DocumentsScreen";
import Icon from 'react-native-vector-icons/AntDesign';
import React from "react";
import Achivement from "../../screens/AchivementScreen";
import MessageScreen from "../../screens/MessageScreen";
import {createStackNavigator} from "react-navigation-stack";
import OtherList from "../OtherList/OtherListComponent";
import AcademicPerfScreen from "../../screens/AcademicPerfScreen";
import AttedanceScreen from "../../screens/AttendanceScreen";
import SettingsScreen from "../../screens/SettingsScreen";

const CreateStackTest = createStackNavigator({
        Other: {
            screen: Other,
            navigationOptions: {
                header: null
            }
        },
        AcademicPerf: {
            screen: AcademicPerfScreen,
            navigationOptions: {
                header: null
            }
        },
        Attendance: {
            screen: AttedanceScreen,
        },
        SettingsApp: {
            screen: SettingsScreen,
        }
    }
);

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
            screen: CreateStackTest,
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
