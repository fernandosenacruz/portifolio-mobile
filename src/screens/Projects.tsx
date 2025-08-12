import { useEffect, useState } from 'react';
import { Text } from '@react-navigation/elements';
import { StyleSheet, TouchableOpacity, View, FlatList, Image } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

import ProjectDetailsModal from '../components/ProjectDetailsModal';

import { fetchProjects } from '../services/mockAPI';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: any;
  type: 'image' | 'video' | 'unknown';
  link: string;
  techStack: string[];
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchProjects().then(fetchedProjects => {
      setProjects(fetchedProjects.map(p => ({ ...p, id: p.id.toString() })));
    });
  }, []);

  const handleProjectDetail = (item: Project) => {
    setSelectedProject(item);
    setModalVisible(true);
  };

  if (!projects.length) return <Text>Carregando projetos…</Text>;
  return (
    <View style={styles.modalContainer}>
      {selectedProject && (
        <ProjectDetailsModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          project={selectedProject}
        />
      )}

      <FlatList
        data={projects}
        contentContainerStyle={styles.container}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleProjectDetail(item)}>
            <Text style={styles.projectTitle}>{item.title}</Text>

            {item.type === 'video' && (
              <Video
                source={item.imageUrl}
                style={styles.projectVideo}
                resizeMode={ResizeMode.COVER}
                isLooping
                shouldPlay
              />
            )}

            {item.type === 'image' && (
              <Image source={item.imageUrl} style={styles.projectImage} resizeMode="cover" />
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    gap: 5,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  projectTechStack: {
    fontSize: 12,
    color: '#999',
  },
  projectImage: {
    width: '100%',
    aspectRatio: 16 / 9,
    height: 'auto',
    borderRadius: 10,
    marginBottom: 10,
  },
  projectVideo: {
    width: 'auto',
    aspectRatio: 9 / 16,
    height: 'auto',
    borderRadius: 10,
    marginBottom: 10,
  },
});
