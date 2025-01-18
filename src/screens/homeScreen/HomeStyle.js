import { StyleSheet } from "react-native";

export const homeStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
      },
      circleButton: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#007BFF",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        elevation: 5, // Shadow for Android
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      buttonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
      },
});