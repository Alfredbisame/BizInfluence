import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Colors from '@/constants/Colors';
import { Bell, Search, ChevronRight } from 'lucide-react-native';
import { CampaignCard } from '@/components/campaign/CampaignCard';
import { InfluencerCard } from '@/components/influencer/InfluencerCard';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();

  // Mock data
  const campaigns = [
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
  ];

  const featuredInfluencers: {
    id: string;
    name: string;
    avatar: string;
    bio: string;
    category: string;
    followers: string;
    rating: number;
    platforms: ('instagram' | 'youtube' | 'tiktok' | 'facebook')[];
    location: string;
  }[] = [
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
  ];

 const renderGradientHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <LinearGradient
          colors={[Colors.primary[600], Colors.primary[400]]}
          style={styles.gradientHeader}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.blobContainer}>
            <View style={[styles.blob, styles.blob1]} />
            <View style={[styles.blob, styles.blob2]} />
            <View style={[styles.blob, styles.blob3]} />
          </View>
          <View style={styles.headerContent}>
            <View style={styles.headerTop}>
              <View>
                <Text style={styles.greeting}>Welcome back,</Text>
                <Text style={styles.userName}>Fred</Text>
              </View>
              <TouchableOpacity 
                style={styles.notificationButton}
                onPress={() => router.push('/notifications')}
              >
                <Bell size={24} color={Colors.white} />
                <View style={styles.notificationBadge} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.searchBar} onPress={() => router.push('/discover')}>
              <Search size={20} color={Colors.neutral[300]} />
              <Text style={styles.searchText}>Search campaigns or influencers...</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderGradientHeader()}
      <ScrollView 
        style={styles.content} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.bannerContainer}>
          <Card style={styles.banner} elevation={3}>
            <LinearGradient
              colors={[Colors.primary[500], Colors.primary[600]]}
              style={styles.bannerGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <View style={styles.bannerContent}>
                <View style={styles.bannerTextContainer}>
                  <Text style={styles.bannerTitle}>Upgrade to Pro</Text>
                  <Text style={styles.bannerDescription}>
                    Unlock premium features and advanced analytics
                  </Text>
                  <View style={styles.bannerButtonContainer}>
                    <Button 
                      title="Upgrade Now" 
                      onPress={() => {}} 
                      variant="secondary"
                      style={styles.upgradeButton}
                    />
                  </View>
                </View>
                <Image 
                  source={{ uri: 'https://images.pexels.com/photos/6192357/pexels-photo-6192357.jpeg'  }} 
                  style={styles.bannerImage}
                />
              </View>
            </LinearGradient>
          </Card>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommended Campaigns</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          {campaigns.map((campaign) => (
            <CampaignCard 
              key={campaign.id} 
              {...campaign} 
              status={campaign.status as 'open' | 'completed' | 'in-progress'}
            />
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Influencers</Text>
            <TouchableOpacity onPress={() => router.push('/all-influencers')}>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          {featuredInfluencers.map((influencer) => (
            <InfluencerCard 
              key={influencer.id} 
              {...influencer}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral[50],
  },
  scrollContent: {
    paddingBottom: 80,
  },
  headerContainer: {
    position: 'relative',
  },
  gradientHeader: {
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 16,
    position: 'relative',
    overflow: 'hidden',
  },
  blobContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  blob: {
    position: 'absolute',
    borderRadius: 100,
    backgroundColor: Colors.white,
    opacity: 0.1,
  },
  blob1: {
    width: 180,
    height: 180,
    top: -90,
    right: -60,
  },
  blob2: {
    width: 120,
    height: 120,
    top: 30,
    left: -40,
  },
  blob3: {
    width: 100,
    height: 100,
    bottom: -30,
    right: 30,
  },
  headerContent: {
    zIndex: 2,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  greeting: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: 'Poppins-Regular',
    opacity: 0.9,
  },
  userName: {
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    color: Colors.white,
  },
  notificationButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 14,
    right: 14,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.error[400],
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchText: {
    marginLeft: 12,
    fontSize: 15,
    color: Colors.white,
    fontFamily: 'Poppins-Regular',
    opacity: 0.9,
  },
  content: {
    flex: 1,
  },
  bannerContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 24,
  },
  banner: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  bannerGradient: {
    padding: 24,
  },
  bannerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bannerTextContainer: {
    flex: 1,
    paddingRight: 16,
  },
  bannerTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: Colors.white,
    marginBottom: 6,
  },
  bannerDescription: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.white,
    opacity: 0.95,
    marginBottom: 16,
  },
  bannerButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  upgradeButton: {
    backgroundColor: Colors.primary[500],
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  bannerImage: {
    width: 90,
    height: 90,
    borderRadius: 12,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 28,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.neutral[900],
  },
  seeAllText: {
    fontSize: 14,
    color: Colors.primary[600],
    fontFamily: 'Poppins-Medium',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardElevation: {
    marginVertical: 8,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
});