import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ScreenContacts from './src/screens/ScreenContacts';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenContacts />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

