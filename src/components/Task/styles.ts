import { StyleSheet } from "react-native";

export const styles = (taskIsDone: boolean) =>
  StyleSheet.create({
    container: {
      width: "100%",
      backgroundColor: "#333333",
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
      height: 75,
      padding: 20,
    },
    checkbox: {
      borderRadius: 100,
      padding: 5,
    },
    title: {
      flex: 1,
      fontSize: 16,
      color: taskIsDone ? "#808080" : "#FFF",
      marginLeft: 16,
      textDecorationLine: taskIsDone ? "line-through" : "none",
    },
    removeButton: {
      alignItems: "center",
      justifyContent: "center",
    },
  });
