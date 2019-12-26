import {StyleSheet, Dimensions} from "react-native";

export const styles = StyleSheet.create({
    list: {
        width: Dimensions.get('window').width,
        padding: 10,
        backgroundColor: '#005baa'
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
    },
    textItem: {
        marginLeft: 10,
        fontSize: 20,
        color: 'white'
    }
});