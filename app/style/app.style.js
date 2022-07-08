import { StyleSheet } from "react-native";
import { Colors } from "./colors";

const appStyle = StyleSheet.create({
    container: {
      flex: 1,
    },
    online: {
      color: Colors.textGreen,
    },
    offline: {
      color: Colors.textGrey,
    }
});

export default appStyle;