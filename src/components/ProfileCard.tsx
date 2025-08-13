import * as React from 'react';
import { Card, Text, Button } from 'react-native-paper';

import { StyleProp, ViewStyle } from 'react-native';

export interface ProfileCardProps {
    avatarUrl: string;
    name: string;
    bio: string;
    email: string;
    linkedin: string;
    github: string;
    onPress?: () => void;
    buttonText?: string;
    styles?: StyleProp<ViewStyle>;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
    avatarUrl,
    name,
    bio,
    email,
    linkedin,
    github,
    onPress,
    buttonText,
    styles,
}) => {
    return (
        <Card style={styles}>
            <Card.Cover
                source={typeof avatarUrl === 'string'
                    ? { uri: avatarUrl }
                    : avatarUrl}
                style={{ alignItems: 'center'}}
                resizeMode='cover'
            />
            <Card.Content style={{ alignItems: 'flex-start', justifyContent: 'center', marginTop: 10 }}>
                <Text variant="titleLarge">{name}</Text>
                <Text variant="bodyMedium">{bio}</Text>
                <Text variant="bodySmall">Email: {email}</Text>
                <Text variant="bodySmall">LinkedIn: {linkedin}</Text>
                <Text variant="bodySmall">GitHub: {github}</Text>
            </Card.Content>
            <Card.Actions>
                <Button onPress={onPress}>{buttonText}</Button>
            </Card.Actions>
        </Card>
    );
};

export default ProfileCard;
