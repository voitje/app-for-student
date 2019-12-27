import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, FlatList} from "react-native";
import {styles} from "./styles";
import Icon from 'react-native-vector-icons/AntDesign';
import {Actions, Router, Scene} from "react-native-router-flux";
import { NavigationActions } from 'react-navigation';

import NewsScreen from "../../screens/NewsScreen";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";



const OtherList = (props) => {
    return(
        <View>
            <View style={styles.list}>
                <TouchableOpacity
                    onPress={()=>props.navigation.navigate("AcademicPerf")}
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
                    onPress={() => props.navigation.navigate("Attendance")}
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
                    onPress={() => props.navigation.navigate("SettingsApp")}
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

            </View>
        </View>
    )
};

export default OtherList;