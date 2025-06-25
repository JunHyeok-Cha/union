import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>안녕 지현! 드디어 앱 화면이 떴어</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SubjectListScreen from './screens/SubjectListScreen';
import SubjectDetailScreen from './screens/SubjectDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SubjectList">
        <Stack.Screen name="SubjectList" component={SubjectListScreen} options={{ title: '과목 선택' }} />
        <Stack.Screen name="SubjectDetail" component={SubjectDetailScreen} options={{ title: '과목 상세' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
