import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    image: {
        height:100,
        width: 100,
        borderRadius: 50
    },
    containerImage: {
        height:110,
        width: 110,
        borderRadius: 64,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerProfile: {
        padding: 10,
        marginBottom: 20,
        backgroundColor: '#005baa',
    },
    containerProfileTouchable: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontSize: 40,
        marginLeft: 10,
        color: 'white',
    }
});