import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

type ClassValue = 'math' | 'science' | 'history';
type Option<T extends string> = { label: string; value: T };

const CLASS_OPTIONS: Option<ClassValue>[] = [
  { label: 'Math', value: 'math' },
  { label: 'Science', value: 'science' },
  { label: 'History', value: 'history' },
];

type RootStackParamList = {
  Home: undefined;
  GradeCalculator: { klass: ClassValue };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type GradeCalculatorRouteProp = RouteProp<RootStackParamList, 'GradeCalculator'>;

type GradeCalculatorScreenProps = {
  route: GradeCalculatorRouteProp;
};

function HomeScreen({ navigation }: HomeScreenProps) {
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

      <Text style={styles.selectedText}>Selected: {klass}</Text>

      <Button
        title="Go to Grade Calculator"
        onPress={() => navigation.navigate('GradeCalculator', { klass })}
      />
    </SafeAreaView>
  );
}

function GradeCalculatorScreen({ route }: GradeCalculatorScreenProps) {
  const { klass } = route.params;

  const [homeworkGrade, setHomeworkGrade] = React.useState('');
  const [midtermGrade, setMidtermGrade] = React.useState('');
  const [finalExamGrade, setFinalExamGrade] = React.useState('');

  const [homeworkWeight, setHomeworkWeight] = React.useState('40');
  const [midtermWeight, setMidtermWeight] = React.useState('25');
  const [finalExamWeight, setFinalExamWeight] = React.useState('35');

  const parseNumber = (value: string) => {
    const num = Number(value);
    return Number.isFinite(num) ? num : 0;
  };

  const calculateGrade = () => {
    const hwGrade = parseNumber(homeworkGrade);
    const midGrade = parseNumber(midtermGrade);
    const finalGrade = parseNumber(finalExamGrade);

    const hwWeight = parseNumber(homeworkWeight);
    const midWeight = parseNumber(midtermWeight);
    const finalWeight = parseNumber(finalExamWeight);

    const totalWeight = hwWeight + midWeight + finalWeight;

    if (totalWeight !== 100) {
      Alert.alert(
        'Invalid Weights',
        `The weights must add up to 100. Current total: ${totalWeight}`
      );
      return;
    }

    const result =
      hwGrade * (hwWeight / 100) +
      midGrade * (midWeight / 100) +
      finalGrade * (finalWeight / 100);

    Alert.alert(
      'Calculated Grade',
      `${klass.toUpperCase()} final grade: ${result.toFixed(2)}`
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.testTitle}>Grade Calculator</Text>
        <Text style={styles.subtitle}>Class: {klass}</Text>

        <View style={styles.field}>
          <Text style={styles.sectionTitle}>Homework</Text>
          <TextInput
            style={styles.input}
            value={homeworkGrade}
            onChangeText={setHomeworkGrade}
            placeholder="Homework grade"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={homeworkWeight}
            onChangeText={setHomeworkWeight}
            placeholder="Homework weight (%)"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.sectionTitle}>Midterm/First Semester </Text>
          <TextInput
            style={styles.input}
            value={midtermGrade}
            onChangeText={setMidtermGrade}
            placeholder="Midterm grade"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={midtermWeight}
            onChangeText={setMidtermWeight}
            placeholder="Midterm weight (%)"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.sectionTitle}>Final Exam</Text>
          <TextInput
            style={styles.input}
            value={finalExamGrade}
            onChangeText={setFinalExamGrade}
            placeholder="Final exam grade"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={finalExamWeight}
            onChangeText={setFinalExamWeight}
            placeholder="Final exam weight (%)"
            keyboardType="numeric"
          />
        </View>

        <Button title="Calculate Grade" onPress={calculateGrade} />
      </ScrollView>
    </SafeAreaView>
  );
}

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Trevor Grade Calculator' }}
        />
        <Stack.Screen
          name="GradeCalculator"
          component={GradeCalculatorScreen}
          options={{ title: 'Grade Calculator' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 24,
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
    marginBottom: 16,
    textAlign: 'center',
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 12,
  },
  selectedText: {
    fontSize: 16,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  field: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#c9c9c9',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});
