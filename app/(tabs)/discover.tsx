import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input } from '@/components/ui/Input';
import Colors from '@/constants/Colors';
import { Search, Filter } from 'lucide-react-native';
import { CampaignCard } from '@/components/campaign/CampaignCard';
import { InfluencerCard } from '@/components/influencer/InfluencerCard';
import { Button } from '@/components/ui/Button';

type TabType = 'campaigns' | 'influencers';

export default function DiscoverScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<TabType>('campaigns');

  // Mock data
  const campaigns: Array<{
    id: string;
    title: string;
    company: { id: string; name: string; logo: string };
    image: string;
    budget: string;
    deadline: string;
    category: string;
    requiredFollowers: string;
    status: "completed" | "in-progress" | "open";
  }> = [
    {
      id: '1',
      title: 'Promote our new African print fashion collection',
      company: {
        id: 'c1',
        name: 'GhanaWear',
        logo: 'https://images.pexels.com/photos/7679657/pexels-photo-7679657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      image: 'https://images.pexels.com/photos/6140144/pexels-photo-6140144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      budget: 'GHS 2,000',
      deadline: '30 Aug',
      category: 'Fashion',
      requiredFollowers: '5K+',
      status: 'open',
    },
    {
      id: '2',
      title: 'Review our mobile money app for young professionals',
      company: {
        id: 'c2',
        name: 'AccraPay',
        logo: 'https://images.pexels.com/photos/6347729/pexels-photo-6347729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      image: 'https://images.pexels.com/photos/6347723/pexels-photo-6347723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      budget: 'GHS 3,500',
      deadline: '15 Sep',
      category: 'Technology',
      requiredFollowers: '10K+',
      status: 'open',
    },
    {
      id: '3',
      title: 'Create content for our local food delivery service',
      company: {
        id: 'c3',
        name: 'KumasiEats',
        logo: 'https://images.pexels.com/photos/5824530/pexels-photo-5824530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      image: 'https://images.pexels.com/photos/5824530/pexels-photo-5824530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      budget: 'GHS 1,500',
      deadline: '5 Sep',
      category: 'Food',
      requiredFollowers: '3K+',
      status: 'open',
    },
  ];

  const influencers: Array<{
    id: string;
    name: string;
    avatar: string;
    bio: string;
    category: string;
    followers: string;
    rating: number;
    platforms: Array<'instagram' | 'youtube' | 'tiktok' | 'facebook'>;
    location: string;
  }> = [
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
  ];

  const renderTabs = () => {
    return (
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'campaigns' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('campaigns')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'campaigns' && styles.activeTabText,
            ]}
          >
            Campaigns
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'influencers' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('influencers')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'influencers' && styles.activeTabText,
            ]}
          >
            Influencers
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderContent = () => {
    if (activeTab === 'campaigns') {
      return (
        <View>
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
                <Text style={styles.filterChipText}>Fashion</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterChip}>
                <Text style={styles.filterChipText}>Technology</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterChip}>
                <Text style={styles.filterChipText}>Food</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterChip}>
                <Text style={styles.filterChipText}>Beauty</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterChip}>
                <Text style={styles.filterChipText}>Health</Text>
              </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity style={styles.filterButton}>
              <Filter size={20} color={Colors.neutral[700]} />
            </TouchableOpacity>
          </View>
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} {...campaign} />
          ))}
        </View>
      );
    } else {
      return (
        <View>
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
          {influencers.map((influencer) => (
            <InfluencerCard key={influencer.id} {...influencer} />
          ))}
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Discover</Text>
      </View>

      <View style={styles.searchContainer}>
        <Input
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search campaigns or influencers"
          leftIcon={<Search size={20} color={Colors.neutral[500]} />}
        />
      </View>

      {renderTabs()}

      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {renderContent()}
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
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.neutral[900],
  },
  searchContainer: {
    paddingHorizontal: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: Colors.neutral[200],
  },
  activeTab: {
    borderBottomColor: Colors.primary[500],
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.neutral[600],
  },
  activeTabText: {
    color: Colors.primary[500],
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  filterContainer: {
    flexDirection: 'row',
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
  },
  activeFilterChipText: {
    color: Colors.white,
    fontWeight: '500',
  },
  filterButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.neutral[100],
    alignItems: 'center',
    justifyContent: 'center',
  },
});