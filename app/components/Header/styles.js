import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: 150,
        backgroundColor: 'blue',
    },
    containerOpen: {
        flex: 1,
        backgroundColor: 'blue',
        width: '100%',
        height: 100,
    },
    containerClose: {
        flex: 1,
        backgroundColor: 'pink',
        width: '100%',
        height: 100,
    },
    testButton: {
        backgroundColor: 'blue',
        height: 50,
        width: 100,
    },
    textStyle: {
        fontSize:15,
        color: '#ffffff',
        textAlign: 'center'
    },

    buttonStyle: {
        padding:10,
        backgroundColor: '#202646',
        borderRadius:5
    }
});