import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        backgroundColor: '#5ACC05',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',       
    },
    input: {
        width: '80%',
        borderBottomWidth: 1,

    },
    button: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        margin: '10%'
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    }
});

export default styles;