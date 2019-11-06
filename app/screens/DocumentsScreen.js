import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Documents extends Component {
    static navigationOptions = {
        title: 'Documents',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Documents</Text>
            </View>
        );
    }
}

export default Documents;