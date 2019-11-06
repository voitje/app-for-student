import React, {Component} from 'react';
import {View, Text} from 'react-native';
import MenuButton from "../components/MenuButton/MenuButton";

class Settings extends Component {
    static navigationOptions = {
        title: 'Settings',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <MenuButton navigation={this.props.navigation}/>
                <Text style={{fontSize: 30}}>Settings</Text>
            </View>
        );
    }
}

export default Settings;