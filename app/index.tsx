
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to pp Folira!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: "blue" }}>
        Go to Profile
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    fontFamily: ""
  },
  title: {
    fontSize: 24, 
  },
});