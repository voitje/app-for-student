
import React, { Component } from 'react';
import { FlatList } from 'react-native';

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
        console.log('FETCH_NEWS');
        getUSANews()
            .then(articles => {
                this.setState({ articles, refreshing: false }, () => {console.log(this.state.articles)});
            })
            .catch(() => this.setState({ refreshing: false }));
    };

    handleRefresh = () => {
        this.setState({ refreshing: true }, () => this.fetchNews());
    };

    render() {
        return (
            <FlatList
                data={this.state.articles}
                renderItem={({ item }) => <Article article={item} />}
                keyExtractor={item => item.url}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh}
            />
        );
    }
}

export default News;