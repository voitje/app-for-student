import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class MenuDrawer extends React.Component {
    navLink(nav, text) {
        return(
            <TouchableOpacity style={{height: 50}} onPress={() => this.props.navigation.navigate(nav)}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return(
            <View style={styles.container}>
                <ScrollView style={styles.scroller}>
                    <View style={styles.topLinks}>
                        <View style={styles.profile}>
                            <View style={styles.imgView}>
                                <Text>IMAGE</Text>
                            </View>
                            <View style={styles.profileText}>
                                <Text style={styles.name}>ИМЯ МОЕ</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomLinks}>
                        {this.navLink('News', 'Новости')}
                        {this.navLink('Settings', 'Настройки')}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
    },
    scroller: {
        flex: 1,
    },
    profile: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#777777',
    },
    profileText: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        paddingBottom: 5,
        color: 'white',
        textAlign: 'left',
    },
    imgView: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
    },
    img: {
        height: 70,
        width: 70,
        borderRadius: 50,
    },
    topLinks:{
        height: 160,
        backgroundColor: 'black',
    },
    bottomLinks: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 450,
    },
    link: {
        flex: 1,
        fontSize: 20,
        padding: 6,
        paddingLeft: 14,
        margin: 5,
        textAlign: 'left',
    },
    footer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: 'lightgray'
    },
    version: {
        flex: 1,
        textAlign: 'right',
        marginRight: 20,
        color: 'gray'
    },
    description: {
        flex: 1,
        marginLeft: 20,
        fontSize: 16,
    }
});