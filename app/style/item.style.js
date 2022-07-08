import { StyleSheet } from "react-native";
import { Colors } from "./colors";

const itemStyle = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.grey,
        flexDirection:'row',
        alignItems: 'center',
        height: 70,
        marginVertical:'2%',
        width:'90%',
        borderRadius:10,
        elevation: 15
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%'
    },
    subDateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '20%'
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 50,
        marginHorizontal: '4%'
    },
    listText: {
        fontSize: 18,
    },
});

export default itemStyle;