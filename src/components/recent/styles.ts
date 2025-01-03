import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 134,
        width: 134,
        borderRadius: 10,
        backgroundColor: colors.gray[600],
    },
    cover: {
        width: '100%',
        height: '50%',
        overflow: "hidden",
        backgroundColor: colors.gray[500]
    },
    content: {
        width: '100%',
        height: '50%',
        padding: 12,
    },
    title: {
        color: colors.gray[100],
        fontSize: 16,
        marginTop: 10,
    },
    icon: {
        position: "absolute",
        left: 7,
        top: -16,
    }
})