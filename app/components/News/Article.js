import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import moment from 'moment';


class Article extends Component {
    state = {
        author: '',
        title: '',
        description: '',
        url: '',
        urlToImage: '',
        publishedAt: '',
        content: '',
        source: {
            name: '',
        }
    };
    componentDidMount =() => {
        this.setState({
            author: this.props.article.author,
            title: this.props.article.title,
            description: this.props.article.description,
            url: this.props.article.url,
            urlToImage: this.props.article.urlToImage,
            publishedAt: this.props.article.publishedAt,
            content: this.props.article.content,
            source: {
                name: this.props.article.source.name,
            }
        })
    };
    render() {
        return (
            <TouchableHighlight>
                <Card
                    featuredTitle={this.state.title}
                    featuredTitleStyle={{
                        marginHorizontal: 5,
                        textShadowColor: '#00000f',
                        textShadowOffset: { width: 3, height: 3 },
                        textShadowRadius: 3,

                    }}
                    image={{
                        uri: this.state.urlToImage
                    }}
                >
                    <Text style={{ marginBottom: 10 }}>
                        {this.state.description || 'Read more...'}
                    </Text>
                    <Divider style={{ backgroundColor: '#dfe6e9' }} />
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                    >
                        <Text
                            style={{
                                margin: 5,
                                color: '#b2bec3',
                                fontSize: 10
                            }}
                        >
                            {this.state.source.name.toUpperCase()}
                        </Text>
                        <Text
                            style={{
                                margin: 5,
                                color: '#b2bec3',
                                fontSize: 10
                            }}
                        >
                            {this.state.publishedAt }
                        </Text>
                    </View>
                </Card>
            </TouchableHighlight>
        );
    }
}

export default Article;