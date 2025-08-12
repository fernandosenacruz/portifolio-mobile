import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Project } from '../screens/Projects';

type ProjectDetailsModalProps = {
    visible: boolean;
    onClose: () => void;
    project: Project | null;
};

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
    visible,
    onClose,
    project,
}) => {
    if (!project) return null;

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>{project.title}</Text>
                    <Text style={styles.description}>{project.description}</Text>
                    <Text style={styles.techsTitle}>Tecnologias:</Text>
                    <View style={styles.techsContainer}>
                        {project.techStack.map((tech) => (
                            <Text key={tech} style={styles.tech}>
                                {tech}
                            </Text>
                        ))}
                    </View>
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 24,
        width: '85%',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    description: {
        fontSize: 16,
        marginBottom: 16,
        textAlign: 'center',
    },
    techsTitle: {
        fontWeight: 'bold',
        marginBottom: 6,
    },
    techsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
        justifyContent: 'center',
    },
    tech: {
        backgroundColor: '#eee',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 4,
        margin: 4,
        fontSize: 14,
    },
    closeButton: {
        backgroundColor: '#007bff',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 24,
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default ProjectDetailsModal;