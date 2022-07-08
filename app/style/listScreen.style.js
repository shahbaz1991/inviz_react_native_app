import { StyleSheet } from "react-native";
import { Colors } from "./colors";

const listScreenStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.backgroundBlue,
        paddingVertical: '2%'
    },
    itemContainer: {
        alignItems: 'center',
    },
    searchContainer: {
        height: 35,
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: '5%',
        marginVertical: '2%'
    },
    searchText: {
        backgroundColor: Colors.white,
        width: '78%',
        marginRight:'2%',
        borderRadius: 10,
        elevation: 10,
        paddingLeft: 10,
        fontSize: 18,
        color: Colors.textGrey
    },
    searchButton: {
        backgroundColor: Colors.highToneBlue,
        width: '20%',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10
    },
    searchButtonText: {
        color: Colors.white
    },
    noResultTextContainer: {
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems: 'center'
    },
    noResultText: {
        color: Colors.textGrey,
        fontSize: 30,
    }
});

export default listScreenStyle;