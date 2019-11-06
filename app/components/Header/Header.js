import React, {Component} from 'react';
import { connect } from 'react-redux'
import {setIsOpen} from "../../actions/sideBarActions";
import { Button, View, TouchableOpacity, Text } from 'react-native';
import {styles} from './styles';
import MenuButton from "../MenuButton/MenuButton";
class Header extends Component {
    render() {
        return(
            <View styles={styles.container}>
                <MenuButton navigation={this.props.navigation}/>
            </View>

        );
    }
}
export default Header;
// class Header extends Component {
//     handleClickButton = () => {
//         this.props.setIsOpen();
//     };
//     render() {
//         return (
//                 <View styles={styles.containerClose}>
//                     <Button
//
//                         title={this.props.sideBar.isOpen.toString()}
//                         onPress={this.handleClickButton}
//                     />
//                         <TouchableOpacity style={styles.buttonStyle}
//                                           onPress={this.handleClickButton}
//                         >
//                             <Text style={styles.textStyle}>{this.props.sideBar.isOpen.toString()}</Text>
//                         </TouchableOpacity>
//                 </View>
//         );
//     }
// }
//
// const mapStateToProps = (state) => {
//     return {
//         sideBar: state.sideBar,
//     }
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setIsOpen: (value) => dispatch(setIsOpen(value)),
//     }
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Header);