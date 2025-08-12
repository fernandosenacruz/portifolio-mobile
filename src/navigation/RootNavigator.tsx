import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { Projects } from '../screens/Projects';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

type TabBarIconProps = {
    readonly color: string;
    readonly size: number;
    readonly routeName: string;
};

function TabBarIcon({ color, size, routeName }: TabBarIconProps) {
    let iconName: React.ComponentProps<typeof Ionicons>['name'] = 'home';
    if (routeName === 'Profile') iconName = 'person';
    return <Ionicons name={iconName} size={size} color={color} />;
}

function renderTabBarIcon(routeName: string) {
    return ({ color, size }: { color: string; size: number }) => (
        <TabBarIcon color={color} size={size} routeName={routeName} />
    );
}

function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: renderTabBarIcon(route.name),
                headerShown: false,
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Tabs" component={BottomTabs} options={{ headerShown: false }} />
            <Stack.Screen name="Projects" component={Projects} />
        </Stack.Navigator>
    );
}
