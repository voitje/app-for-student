import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, FlatList, Image} from "react-native";
import {styles} from './styles'

const Profile = () => {
    return(
        <View style={styles.containerProfile}>
            <TouchableOpacity
                style={styles.containerProfileTouchable}
            >
                <View
                    style={styles.containerImage}
                >
                    <Image
                        style={styles.image}
                        source={{uri:
                        'https://sun1-22.userapi.com/nz9ibf7NNeyxnkcVfCA_2Lnr0CGXaU3M-Mlhmw/_c2GB3U7Yic.jpg'}}/>
                </View>
                <Text
                    style={styles.name}
                >
                    Игорь Шагаев
                </Text>
            </TouchableOpacity>
        </View>
    )
};

export default Profile;