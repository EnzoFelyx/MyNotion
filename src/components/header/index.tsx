import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

export function Header() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: "https://github.com/EnzoFelyx.png" }} />

            <View style={styles.user}>
                <Text style={styles.name}>Enzo Felix</Text>
                <Text style={styles.email}>enzofelyx@gmail.com</Text>
            </View>

            <TouchableOpacity>
                <Feather name="more-horizontal" size={20} color={colors.gray[100]} />
            </TouchableOpacity>
        </View>
    )
}