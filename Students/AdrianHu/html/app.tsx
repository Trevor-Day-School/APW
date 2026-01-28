// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <AppContent />
//     </SafeAreaProvider>
//   );
// }

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();

//   return (
//     <View style={styles.container}>
//       <NewAppScreen
//         templateFileName="App.tsx"
//         safeAreaInsets={safeAreaInsets}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;
import React from 'react';
import { SafeAreaView, View, Text, Button, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

type ClassValue = 'math' | 'science' | 'history';
type Option<T extends string> = { label: string; value: T };

const CLASS_OPTIONS: Option<ClassValue>[] = [
  { label: 'Math', value: 'math' },
  { label: 'Science', value: 'science' },
  { label: 'History', value: 'history' },
];

const App: React.FC = () => {
  const [klass, setKlass] = React.useState<ClassValue>('math');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.testTitle}>Trevor Grade Calculator</Text>


      <Text style={styles.title}>Class:</Text>


      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={klass}
          onValueChange={(v) => setKlass(v as ClassValue)}
        >
          {CLASS_OPTIONS.map((o) => (
            <Picker.Item key={o.value} label={o.label} value={o.value} />
          ))}
        </Picker>
      </View>

      <Text>Selected: {klass}</Text>

      <Button
        title="Tap Me"
        onPress={() =>
          Alert.alert('It works!', `You chose ${klass} 🎉`)
        }
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fefefe',
    paddingHorizontal: 16,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
  },
  testTitle: {
    fontSize: 30,
    fontWeight: '600',
    marginTop: 20,
    textAlign: 'center',
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
  },
});
