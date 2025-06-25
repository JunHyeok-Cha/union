import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const subjects = [
  { id: '1', title: '객체지향', progress: 0.56 },
  { id: '2', title: '구조', progress: 0.40 },
  { id: '3', title: '선형대수', progress: 0.60 },
];

export default function SubjectListScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={subjects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('SubjectDetail', { subject: item })}
            style={{ marginVertical: 10, padding: 16, backgroundColor: '#eef', borderRadius: 10 }}
          >
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
            <Text>진도율: {(item.progress * 100).toFixed(1)}%</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
