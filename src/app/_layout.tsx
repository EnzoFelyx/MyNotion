import { Stack } from "expo-router"

import { StatusBar } from "expo-status-bar"
import { View } from "react-native"

export default function Layout() {

    return (
        <View style={{ flex: 1, }}>
            <StatusBar translucent style="light" backgroundColor="transparent" />
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            />
        </View>
    )
} 