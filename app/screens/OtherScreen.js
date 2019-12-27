import React, {Component} from 'react';
import {View, Text} from 'react-native';
import MenuButton from "../components/MenuButton/MenuButton";
import OtherList from "../components/OtherList/OtherListComponent";
import Profile from "../components/OtherProfile/ProfileComponent";

class Other extends Component {
    static navigationOptions = {
        title: 'Other',
    };
    render() {
        return (
            <View style={{ flex: 1}}>
                <Profile />
                <OtherList navigation={this.props.navigation}/>
            </View>
        );
    }
}

export default Other;