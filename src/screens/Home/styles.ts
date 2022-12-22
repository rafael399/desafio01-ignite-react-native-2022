import { StyleSheet } from "react-native";

export const styles = (taskListIsEmpty: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    logoContainer: {
      backgroundColor: "#0D0D0D",
      height: "25%",
      justifyContent: "center",
      alignItems: "center",
    },
    logoImage: {
      height: 40,
      width: 150,
    },
    contentContainer: {
      flex: 1,
      backgroundColor: "#1A1A1A",
      paddingHorizontal: 25,
    },
    inputContainer: {
      flexDirection: "row",
      marginTop: -30,
      marginBottom: 40,
    },
    input: {
      flex: 1,
      height: 56,
      backgroundColor: "#262626",
      borderRadius: 5,
      color: "#FFFF",
      padding: 16,
      fontSize: 16,
      marginRight: 12,
    },
    button: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: "#1E6F9F",
      alignItems: "center",
      justifyContent: "center",
    },
    progressContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingBottom: 25,
      borderBottomWidth: taskListIsEmpty ? 1 : 0,
      borderBottomColor: "#333333",
    },
    countContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    countTitle: {
      color: "#4EA8DE",
      marginRight: 15,
      fontWeight: "bold",
    },
    countNumberContainer: {
      backgroundColor: "#333",
      paddingHorizontal: 10,
      paddingVertical: 2,
      borderRadius: 10,
    },
    countNumberText: {
      color: "#fff",
    },
    emptyListContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 50,
    },
    emptyListTitle: {
      color: "#808080",
      fontSize: 14,
      textAlign: "center",
      fontWeight: "bold",
      marginTop: 20,
    },
    emptyListText: {
      color: "#808080",
      fontSize: 14,
      textAlign: "center",
    },
  });
