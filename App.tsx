import React from 'react';
import {SafeAreaView,StyleSheet,Text,View} from 'react-native';
import NativeStack from './src/navigation/Stack';


function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <NativeStack />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
