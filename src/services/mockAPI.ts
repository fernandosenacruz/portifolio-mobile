import userProfile from '../mocks/userProfile.json';
import projects from '../mocks/projects.json';

// simula um delay de rede
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export async function fetchUserProfile() {
  await delay(500);
  return Promise.resolve({ ...userProfile, photoUrl: require('../assets/avatar.jpeg') });
}

const assetMap: Record<string, any> = {
  'cdd.png': require('../assets/cdd.png'),
  'portfolio-web.mp4': require('../assets/portfolio-web.mp4'),
};


export async function fetchProjects() {
  await delay(500);
  return Promise.resolve(
    projects.map(project => {
      let type: 'image' | 'video' | 'unknown' = 'unknown';
      if (project.imageUrl?.endsWith('.png') || project.imageUrl?.endsWith('.gif')) {
        type = 'image';
      } else if (project.imageUrl?.endsWith('.mp4')) {
        type = 'video';
      }

      return {
        ...project,
        type,
        imageUrl: assetMap[project.imageUrl] || null,
      };
    })
  );
}

export async function sendContactMessage(data: {
  name: string;
  email: string;
  message: string;
}) {
  await delay(500);
  console.log('Mock envio de contato:', data);
  return { success: true, sentAt: new Date().toISOString() };
}
