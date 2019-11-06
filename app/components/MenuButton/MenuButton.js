import React, {Component} from 'react';
import {View, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Entypo';

class MenuButton extends Component {
    render() {
        return (
            <Icon
                name='menu'
                size={30}
                style={styles.menuIcon}
                onPress={() => this.props.navigation.toggleDrawer()}
            />
        );
    }
}

const styles = StyleSheet.create({
   menuIcon: {
       zIndex: 9,
       position: 'absolute',
       top: 40,
       left: 20,
   }
});

export default MenuButton;