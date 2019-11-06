import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Achivement extends Component {
    static navigationOptions = {
        title: 'Achive',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Achive</Text>
            </View>
        );
    }
}

export default Achivement;