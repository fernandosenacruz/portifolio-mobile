import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

import ProfileCard from '../components/ProfileCard';

import { fetchUserProfile } from '../services/mockAPI';


export interface Contact {
  email: string;
  linkedin: string;
  github: string;
  phone?: string;
}

export interface ProfileProps {
  name: string;
  bio: string;
  photoUrl: string;
  contacts: Contact;
}
type RootStackParamList = {
  Profile: undefined;
  Projects: undefined;
};

export function Profile() {
  const [profile, setProfile] = useState<ProfileProps | null>(null);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    fetchUserProfile().then(setProfile);
  }, []);

  if (!profile) return <Text>Carregando...</Text>;

  return (
    <View style={styles.container}>
      <ProfileCard
        styles={styles.card}
        avatarUrl={profile.photoUrl}
        name={profile.name}
        bio={profile.bio}
        email={profile.contacts.email}
        linkedin={profile.contacts.linkedin}
        github={profile.contacts.github}
        onPress={() => navigation.navigate('Projects')}
        buttonText="Ver Projetos"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  card: {
    width: '90%',
    marginVertical: 10,
  },
});
