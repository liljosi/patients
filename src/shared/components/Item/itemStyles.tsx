import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderBottomColor: "#5ACC05",
        borderBottomWidth: 1,
    },
    itemTitle: {
        fontSize: 16,
        color: '#ffffff',
    },
    itemContentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: '5%',
        justifyContent: 'space-evenly'
    },
});

export default styles;