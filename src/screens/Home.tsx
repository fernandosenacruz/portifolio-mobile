import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Projects: undefined;
};

export function Home() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text>FATfólio - O Portfólio mobile do FATnando!</Text>
      <Button title="Ver perfil" onPress={() => navigation.navigate('Profile')} />
      <Button title="Ver Projetos" onPress={() => navigation.navigate('Projects')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 },
});
