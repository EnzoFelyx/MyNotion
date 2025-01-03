import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

type Props = {
    title: string
}

export function Page({ title }: Props) {
    return (
        <View style={styles.container}>

            <Feather name="chevron-right" size={20} color={colors.gray[300]} />

            <Feather name="file-text" size={20} color={colors.gray[300]} />

            <Text style={styles.title}>{title}</Text>

            <TouchableOpacity>
                <Feather name="plus" size={20} color={colors.gray[300]} />
            </TouchableOpacity>

        </View>
    )
}