import React from 'react';
import { View, Text, StyleSheet, Image, StyleProp, ViewStyle } from 'react-native';
import Colors from '@/constants/Colors';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface AvatarProps {
  source?: { uri: string } | null;
  name?: string;
  size?: AvatarSize;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  textColor?: string;
}

export function Avatar({
  source,
  name = '',
  size = 'md',
  style,
  backgroundColor,
  textColor = Colors.white,
}: AvatarProps) {
  const getInitials = (name: string) => {
    if (!name) return '';
    
    const names = name.split(' ');
    if (names.length === 1) {
      return names[0].charAt(0).toUpperCase();
    }
    
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
  };

  const getDimensions = () => {
    switch (size) {
      case 'xs':
        return { width: 24, height: 24, fontSize: 10 };
      case 'sm':
        return { width: 32, height: 32, fontSize: 12 };
      case 'lg':
        return { width: 56, height: 56, fontSize: 20 };
      case 'xl':
        return { width: 80, height: 80, fontSize: 28 };
      case 'md':
      default:
        return { width: 40, height: 40, fontSize: 16 };
    }
  };

  const getRandomColor = () => {
    if (backgroundColor) return backgroundColor;
    
    const colors = [
      Colors.primary[500],
      Colors.secondary[500],
      Colors.accent[500],
      Colors.success[500],
      Colors.warning[500],
    ];
    
    // Use the first character of the name to deterministically select a color
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const { width, height, fontSize } = getDimensions();

  return (
    <View
      style={[
        styles.container,
        { width, height, borderRadius: width / 2, backgroundColor: getRandomColor() },
        style,
      ]}
    >
      {source ? (
        <Image
          source={source}
          style={[styles.image, { width, height, borderRadius: width / 2 }]}
        />
      ) : (
        <Text style={[styles.initials, { fontSize, color: textColor }]}>
          {getInitials(name)}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  initials: {
    fontWeight: '600',
  },
});