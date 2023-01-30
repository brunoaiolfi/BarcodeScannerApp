import { ActivityIndicator, View } from "react-native";

interface LoadingContainerProps {
    width: number;
    height: number;
    color?: string;
    size?: number | "large" | "small" | undefined;
}

export function LoadingSpinner({ height, width, color = '', size = "large" }: LoadingContainerProps) {
    return (
        <View
            style={{
                width: `${width}%`,
                height: `${height}%`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <ActivityIndicator size={size} color={color} />
        </View>
    )
}