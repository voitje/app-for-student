import React, {Component} from 'react';
import {
    View
} from "react-native";
import { Container, Header, Content, Card, CardItem, Text, Body} from 'native-base';
import {styles} from "./styles";

class NewsItem extends Component {
    render() {
        return (
            <View styles={styles.container}>
                    <Content padder>
                        <Card>
                            <CardItem header bordered>
                                <Text>ETO HEADER</Text>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <Text>
                                        ETO CONTENT
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem footer bordered>
                                <Text>ETO FOOTER PO IDEE</Text>
                            </CardItem>
                        </Card>
                    </Content>
            </View>
        );
    }
}

export default NewsItem;