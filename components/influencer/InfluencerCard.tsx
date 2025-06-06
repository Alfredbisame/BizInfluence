import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Card } from '@/components/ui/Card';
import Colors from '@/constants/Colors';
import { Avatar } from '@/components/ui/Avatar';
import { Instagram, Youtube, Star, Users } from 'lucide-react-native';

export interface InfluencerCardProps {
  id: string;
  name: string;
  avatar?: string;
  bio: string;
  category: string;
  followers: string;
  rating: number;
  platforms: Array<'instagram' | 'youtube' | 'tiktok' | 'facebook'>;
  location: string;
  onPress?: () => void;
}

export function InfluencerCard({
  id,
  name,
  avatar,
  bio,
  category,
  followers,
  rating,
  platforms,
  location,
  onPress,
}: InfluencerCardProps) {
  const router = useRouter();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      router.push(`/influencer/${id}`);
    }
  };

  const renderPlatformIcons = () => {
    return (
      <View style={styles.platformContainer}>
        {platforms.includes('instagram') && (
          <Instagram size={16} color={Colors.secondary[500]} style={styles.platformIcon} />
        )}
        {platforms.includes('youtube') && (
          <Youtube size={16} color={Colors.secondary[500]} style={styles.platformIcon} />
        )}
        {/* Add other platform icons as needed */}
      </View>
    );
  };

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={handlePress}>
      <Card style={styles.card}>
        <View style={styles.header}>
          <Avatar 
            source={avatar ? { uri: avatar } : null} 
            name={name}
            size="md"
          />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.location}>{location}</Text>
          </View>
        </View>
        
        <Text style={styles.bio} numberOfLines={2}>{bio}</Text>
        
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryText}>{category}</Text>
          {renderPlatformIcons()}
        </View>
        
        <View style={styles.metaContainer}>
          <View style={styles.metaItem}>
            <Users size={16} color={Colors.neutral[600]} />
            <Text style={styles.metaText}>{followers}</Text>
          </View>
          
          <View style={styles.metaItem}>
            <Star size={16} color={Colors.warning[500]} />
            <Text style={styles.metaText}>{rating.toFixed(1)}</Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  nameContainer: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.neutral[900],
  },
  location: {
    fontSize: 13,
    color: Colors.neutral[600],
    marginTop: 2,
  },
  bio: {
    fontSize: 14,
    color: Colors.neutral[700],
    marginBottom: 12,
    lineHeight: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  categoryText: {
    fontSize: 14,
    color: Colors.primary[500],
    fontWeight: '500',
  },
  platformContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  platformIcon: {
    marginLeft: 8,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    fontSize: 13,
    color: Colors.neutral[600],
    marginLeft: 4,
  },
});