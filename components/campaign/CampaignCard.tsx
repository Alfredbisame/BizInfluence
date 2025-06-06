import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Card } from '@/components/ui/Card';
import Colors from '@/constants/Colors';
import { Avatar } from '@/components/ui/Avatar';
import { Calendar, Target, Users } from 'lucide-react-native';

export interface CampaignCardProps {
  id: string;
  title: string;
  company: {
    id: string;
    name: string;
    logo?: string;
  };
  image?: string;
  budget: string;
  deadline: string;
  category: string;
  requiredFollowers: string;
  status?: 'open' | 'in-progress' | 'completed';
  onPress?: () => void;
}

export function CampaignCard({
  id,
  title,
  company,
  image,
  budget,
  deadline,
  category,
  requiredFollowers,
  status = 'open',
  onPress,
}: CampaignCardProps) {
  const router = useRouter();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      router.push(`/campaign/${id}`);
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'open':
        return Colors.success[500];
      case 'in-progress':
        return Colors.warning[500];
      case 'completed':
        return Colors.neutral[500];
      default:
        return Colors.success[500];
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'open':
        return 'Open';
      case 'in-progress':
        return 'In Progress';
      case 'completed':
        return 'Completed';
      default:
        return 'Open';
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={handlePress}>
      <Card style={styles.card} noPadding>
        {image && (
          <Image 
            source={{ uri: image }} 
            style={styles.coverImage}
            resizeMode="cover"
          />
        )}
        
        <View style={styles.content}>
          <View style={styles.header}>
            <Avatar 
              source={company.logo ? { uri: company.logo } : null} 
              name={company.name}
              size="sm"
            />
            <View style={styles.companyContainer}>
              <Text style={styles.companyName}>{company.name}</Text>
              <View style={[styles.statusBadge, { backgroundColor: getStatusColor() }]}>
                <Text style={styles.statusText}>{getStatusText()}</Text>
              </View>
            </View>
          </View>
          
          <Text style={styles.title}>{title}</Text>
          
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
          
          <View style={styles.metaContainer}>
            <View style={styles.metaItem}>
              <Calendar size={16} color={Colors.neutral[600]} />
              <Text style={styles.metaText}>{deadline}</Text>
            </View>
            
            <View style={styles.metaItem}>
              <Target size={16} color={Colors.neutral[600]} />
              <Text style={styles.metaText}>{budget}</Text>
            </View>
            
            <View style={styles.metaItem}>
              <Users size={16} color={Colors.neutral[600]} />
              <Text style={styles.metaText}>{requiredFollowers}</Text>
            </View>
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
  coverImage: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  companyContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 8,
  },
  companyName: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.neutral[700],
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.white,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.neutral[900],
    marginBottom: 8,
  },
  categoryContainer: {
    marginBottom: 12,
  },
  categoryText: {
    fontSize: 14,
    color: Colors.primary[500],
    fontWeight: '500',
  },
  metaContainer: {
    flexDirection: 'row',
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