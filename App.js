import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>"Daniel Cortés Comparán 7F""</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4E7D4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 30,
  },
});
