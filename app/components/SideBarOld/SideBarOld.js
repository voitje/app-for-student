import React, {Component} from 'react';
import { View, Animated } from 'react-native';
import { connect } from 'react-redux'
import {styles} from './styles';
import {setIsOpen} from "../../actions/sideBarActions";
class SideBarOld extends Component {
    state = {
        isOpen: false,
    };

    render() {
        return (
            this.props.sideBar.isOpen &&
            <View
                style={styles.container}
            >
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sideBar: state.sideBar,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setIsOpen: (value) => dispatch(setIsOpen(value)),
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(SideBarOld);