import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    flex: 1,
  },
  main: {
    padding: 20,
    flex: 1,
    alignSelf: "stretch",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  socialContainer: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  dividerContainer: { flexDirection: "row", alignItems: "center" },
  line: { flex: 1, height: 1, backgroundColor: "#E1DEDD" },
});

export const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
  button2: {
    backgroundColor: "#dddd",
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonPink: {
    backgroundColor: "#F72E99",
    borderRadius: 5,
    height: 45,
    justifyContent: "center",
    marginTop: 16,
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    padding: 8,
    textAlign: "center",
    textTransform: "uppercase",
  },
  textGrey: {
    color: "#606163",
    fontWeight: "500",
    padding: 8,
    textAlign: "center",
    textTransform: "uppercase",
  },
});
