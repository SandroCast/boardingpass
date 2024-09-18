import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        alignItems: 'center',
    },

    header: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});