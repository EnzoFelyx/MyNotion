import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Page } from "../page";

type Props = {
    data: {
        id: string
        title: string
    }[]
}

export function PageList({ data }: Props) {
    return (
        <View style={styles.container}>

            <View style={styles.header}>

                <Text style={styles.title}>Privado</Text>

                <TouchableOpacity>
                    <Feather name="more-horizontal" size={20} color={colors.gray[300]} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Feather name="plus" size={20} color={colors.gray[300]} />
                </TouchableOpacity>

            </View>

            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Page title={item.title} />}
                showsVerticalScrollIndicator={false}
                style={styles.list}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                scrollEnabled={false}
            />
        </View>
    )
}