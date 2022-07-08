import { StyleSheet } from "react-native";
import { Colors } from "./colors";

const detailsScreenStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.backgroundBlue,
        alignItems: 'center',
    },
    subContainer: {
        width: '90%',
        height:'90%',
        backgroundColor: Colors.white,
        marginVertical: '5%',
        borderRadius: 10,
        alignItems: 'center',
        paddingTop: '5%',
        elevation: 15
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    line: {
        borderWidth:1,
        borderColor: Colors.grey,
        width: '90%',
        marginTop: '3%'
    },
    detailsContainer: {
        width: '90%',
        height: '80%',
        marginTop: '3%'
    },
    textContainer: {
        marginLeft: '3%',
        marginVertical: '2%',
        alignItems: 'flex-start'
    },
    textKey: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: '1%',
        color: Colors.titleGrey
    },
    textValue: {
        fontSize: 21,
        color: Colors.textGrey,
    },
});

export default detailsScreenStyle;