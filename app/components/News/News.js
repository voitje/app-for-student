
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Text } from 'react-native';
import { getUSANews } from './utils';
import Article from './Article';

class News extends Component {
    state = {
        articles: [],
        refreshing: true
    };

    componentDidMount = () => {
        this.fetchNews();
    };

    fetchNews = () => {
        getUSANews()
            .then(articles => {
                this.setState({ articles, refreshing: false }, () => {console.log('FETCH', this.state.articles)});
            })
            .catch(() => this.setState({ refreshing: false }));
    };

    handleRefresh = () => {
        this.setState({ refreshing: true }, () => this.fetchNews());
    };

    render() {
        return (
                this.state.refreshing
            ?
                    <Text>NIXUYA</Text>
                :
                    <FlatList
                        data={this.state.articles}
                        renderItem={({item}) =>  <Article article={item}/>}
                        keyExtractor={item => item.url}
                        refreshing={this.state.refreshing}
                        onRefresh={this.handleRefresh}
                    />

        );
    }
}

export default News;