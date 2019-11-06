import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import MenuButton from "../components/MenuButton/MenuButton";
import NewsItem from "../components/NewsItem/NewsItem";
import Header from "../components/Header/Header";

class News extends Component {
    static navigationOptions = {
        title: 'News',
    };
    render() {
        return (
                <View styles={styles.container}>
                    <View styles={styles.header}>
                        <MenuButton navigation={this.props.navigation}/>
                    </View>
                    {/*<Text style={{fontSize: 30}}>News</Text>*/}
                    <NewsItem/>
                </View>
        );
    }
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width*0.85,
        backgroundColor: 'blue',
    },
    header: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width*0.15,
        backgroundColor: 'blue',
    },
});

export default News;