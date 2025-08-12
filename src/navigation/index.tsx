// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {
//   createStaticNavigation,
//   StaticParamList,
// } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Image } from 'react-native';
// import bell from '../assets/bell.png';
// import newspaper from '../assets/newspaper.png';
// import { Home } from '../screens/Home';
// import { Profile } from '../screens/Profile';
// import { Settings } from '../screens/Settings';
// import { NotFound } from '../screens/NotFound';
// import { Projects } from '../screens/Projects';

// const HomeTabs = createBottomTabNavigator({
//   screens: {
//     Home: {
//       screen: Home,
//       options: {
//         title: 'Feed',
//         tabBarIcon: ({ color, size }) => (
//           <Image
//             source={newspaper}
//             tintColor={color}
//             style={{
//               width: size,
//               height: size,
//             }}
//           />
//         ),
//       },
//     },
//     Profile: {
//       screen: Profile,
//       options: {
//         title: 'Perfil',
//         tabBarIcon: ({ color, size }) => (
//           <Image
//             source={bell}
//             tintColor={color}
//             style={{
//               width: size,
//               height: size,
//             }}
//           />
//         ),
//       },
//     },
//   },
// });

// const RootStack = createNativeStackNavigator({
//   screens: {
//     HomeTabs: {
//       screen: HomeTabs,
//       options: {
//         title: 'Home',
//         headerShown: false,
//       },
//     },
//     Projects: {
//       screen: Projects,
//       options: {
//         title: 'Projetos',
//       },
//     },
//     Settings: {
//       screen: Settings,
//       options: {
//         title: 'Configurações',
//       },
//     },
//     NotFound: {
//       screen: NotFound,
//       options: {
//         title: '404',
//       },
//       linking: {
//         path: '*',
//       },
//     },
//   },
// });

// export const Navigation = createStaticNavigation(RootStack);

// type RootStackParamList = StaticParamList<typeof RootStack>;

// declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends RootStackParamList { }
//   }
// }
