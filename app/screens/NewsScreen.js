import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import MenuButton from "../components/MenuButton/MenuButton";
import NewsItem from "../components/NewsItem/NewsItem";
import Header from "../components/Header/Header";
import News from "../components/News/News";

class NewsScreen extends Component {
    static navigationOptions = {
        title: 'News',
    };
    render() {
        return (
                <News/>
        );
    }
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
    },
    header: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: 'blue',
    },
});

export default NewsScreen;