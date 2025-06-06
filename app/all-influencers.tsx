import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import { Input } from '@/components/ui/Input';
import { InfluencerCard } from '@/components/influencer/InfluencerCard';
import { Search, ArrowLeft, Filter } from 'lucide-react-native';

export default function AllInfluencersScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for influencers
  type Platform = 'instagram' | 'youtube' | 'tiktok' | 'facebook';

  interface Influencer {
    id: string;
    name: string;
    avatar: string;
    bio: string;
    category: string;
    followers: string;
    rating: number;
    platforms: Platform[];
    location: string;
  }

  const influencers: Influencer[] = [
    {
      id: 'i1',
      name: 'Kofi Mensah',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Tech enthusiast sharing the latest gadgets and digital solutions for Ghana.',
      category: 'Technology',
      followers: '25K',
      rating: 4.8,
      platforms: ['instagram', 'youtube'],
      location: 'Accra',
    },
    {
      id: 'i2',
      name: 'Ama Serwaa',
      avatar: 'https://images.pexels.com/photos/1037915/pexels-photo-1037915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Fashion influencer specializing in modern African designs and accessories.',
      category: 'Fashion',
      followers: '45K',
      rating: 4.9,
      platforms: ['instagram', 'tiktok'],
      location: 'Kumasi',
    },
    {
      id: 'i3',
      name: 'Daniel Owusu',
      avatar: 'https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Food vlogger showcasing the best local Ghanaian cuisine and restaurants.',
      category: 'Food',
      followers: '18K',
      rating: 4.6,
      platforms: ['instagram', 'youtube'],
      location: 'Tamale',
    },
    {
      id: 'i4',
      name: 'Efua Mensah',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Beauty and lifestyle content creator focusing on natural products.',
      category: 'Beauty',
      followers: '35K',
      rating: 4.7,
      platforms: ['instagram', 'tiktok'],
      location: 'Cape Coast',
    },
    {
      id: 'i5',
      name: 'Kwame Adinkra',
      avatar: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Sports and fitness enthusiast promoting healthy living in Ghana.',
      category: 'Sports',
      followers: '30K',
      rating: 4.5,
      platforms: ['instagram', 'youtube'],
      location: 'Accra',
    },
    {
      id: 'i6',
      name: 'Abena Korkor',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Travel vlogger exploring hidden gems across West Africa.',
      category: 'Travel',
      followers: '28K',
      rating: 4.8,
      platforms: ['instagram', 'youtube'],
      location: 'Kumasi',
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color={Colors.neutral[700]} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>All Influencers</Text>
      </View>

      <View style={styles.searchContainer}>
        <Input
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search influencers"
          leftIcon={<Search size={20} color={Colors.neutral[500]} />}
        />
      </View>

      <View style={styles.filterContainer}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtersScrollContent}
        >
          <TouchableOpacity style={[styles.filterChip, styles.activeFilterChip]}>
            <Text style={[styles.filterChipText, styles.activeFilterChipText]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterChipText}>5K+ Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterChipText}>10K+ Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterChipText}>25K+ Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterChipText}>50K+ Followers</Text>
          </TouchableOpacity>
        </ScrollView>
        <TouchableOpacity style={styles.filterButton}>
          <Filter size={20} color={Colors.neutral[700]} />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {influencers.map((influencer) => (
          <InfluencerCard key={influencer.id} {...influencer} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral[50],
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: Colors.neutral[900],
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingLeft: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  filtersScrollContent: {
    paddingRight: 16,
  },
  filterChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: Colors.neutral[100],
    marginRight: 8,
  },
  activeFilterChip: {
    backgroundColor: Colors.primary[500],
  },
  filterChipText: {
    fontSize: 14,
    color: Colors.neutral[700],
    fontFamily: 'Poppins-Medium',
  },
  activeFilterChipText: {
    color: Colors.white,
  },
  filterButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.neutral[100],
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
});