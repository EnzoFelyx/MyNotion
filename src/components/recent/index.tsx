import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

type Props = {
    data: {
        title: string
        cover?: string
    }
}

export function Recent({ data }: Props) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7}>
            <Image style={styles.cover} source={{ uri: data.cover }} />
            <View style={styles.content}>
                <Feather name="file-text" size={32} color={colors.gray[300]} style={styles.icon} />
                <Text style={styles.title} numberOfLines={2}>{data.title}</Text>
            </View>
        </TouchableOpacity>
    )
}