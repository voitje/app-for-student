import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, FlatList} from "react-native";
import {styles} from "./styles";
import Icon from 'react-native-vector-icons/AntDesign';
import {Actions, Router, Scene} from "react-native-router-flux";
import NewsScreen from "../../screens/NewsScreen";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";



const OtherList = () => {
    return(
        <View>
            <View style={styles.list}>
                <TouchableOpacity
                    style={styles.item}
                >
                    <Icon
                        name="star"
                        color={'white'}
                        size={24}
                    />
                    <Text
                        style={styles.textItem}
                    >
                        Academic performance
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.item}
                >
                    <Icon
                        name="star"
                        color={'white'}
                        size={24}
                    />
                    <Text
                        style={styles.textItem}
                    >
                        Attendance
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.item}
                >
                    <Icon
                        name="star"
                        color={'white'}
                        size={24}
                    />
                    <Text
                        style={styles.textItem}
                    >
                        Settings
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.item}
                    onPress={Actions.home}
                >
                    <Icon
                        name="star"
                        color={'white'}
                        size={24}
                    />
                    <Text
                        style={styles.textItem}
                    >
                        About developers
                    </Text>
                </TouchableOpacity>
                <Router>
                    <Scene key="home" component={NewsScreen} title="News" />
                </Router>
            </View>
        </View>
    )
};

export default OtherList;