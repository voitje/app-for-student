import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

export default class SideBar extends Component {
    render() {
        return <AppContainer/>;
    }
}
class WelcomeScreen extends Component {
    static navigationOptions = {
        title: 'News',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>knopkaidinaxuy</Text>
                <Button
                    title="idi naxuy"
                    onPress={() => this.props.navigation.navigate('Group')}
                />
            </View>
        );
    }
}

class DashboardScreen extends Component {
    static navigationOptions = {
        title: 'Group',
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>PIZDACn</Text>
                {/*<Image*/}
                {/*    source={require('../assets/images/test.png')}*/}
                {/*    style={{ width: '100%', height: '100%' }}*/}
                {/*/>*/}
            </View>
        );
    }
}
const DashboardStackNavigator = createStackNavigator(
    {
        DashboardNavigator: DashboardScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Text onPress={() => navigation.openDrawer()}>AAA</Text>
                )
            };
        }
    }
);

const WelcomeStackNavigator = createStackNavigator(
    {
        WelcomeNavigator: WelcomeScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Text onPress={() => navigation.openDrawer()}>AAA</Text>
                )
            };
        }
    }
);
const AppDrawerNavigator = createDrawerNavigator({
    Group: {
        screen: DashboardStackNavigator
    },
    News: {
        screen: WelcomeStackNavigator
    },
});

const AppSwitchNavigator = createSwitchNavigator({
    Group: { screen: AppDrawerNavigator },
    News: { screen: WelcomeScreen },
});

const AppContainer = createAppContainer(AppSwitchNavigator);
