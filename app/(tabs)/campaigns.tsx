import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { CampaignCard } from '@/components/campaign/CampaignCard';
import { Plus, Settings } from 'lucide-react-native';

type TabType = 'active' | 'applied' | 'completed';

interface Campaign {
  id: string;
  title: string;
  company: {
    id: string;
    name: string;
    logo: string;
  };
  image: string;
  budget: string;
  deadline: string;
  category: string;
  requiredFollowers: string;
  status: string;
}

export default function CampaignsScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('active');

  // Mock data
  const activeCampaigns = [
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
      status: 'in-progress',
    },
  ];

  const appliedCampaigns = [
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

  const completedCampaigns = [
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
      status: 'completed',
    },
  ];

  const handleCreateCampaign = () => {
    router.push('/create-campaign');
  };

  const renderTabs = () => {
    return (
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'active' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('active')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'active' && styles.activeTabText,
            ]}
          >
            Active
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'applied' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('applied')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'applied' && styles.activeTabText,
            ]}
          >
            Applied
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'completed' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('completed')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'completed' && styles.activeTabText,
            ]}
          >
            Completed
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderContent = () => {
    let campaigns: Campaign[];
    let emptyText;

    switch (activeTab) {
      case 'active':
        campaigns = activeCampaigns;
        emptyText = "You don't have any active campaigns";
        break;
      case 'applied':
        campaigns = appliedCampaigns;
        emptyText = "You haven't applied to any campaigns yet";
        break;
      case 'completed':
        campaigns = completedCampaigns;
        emptyText = "You don't have any completed campaigns";
        break;
      default:
        campaigns = [];
        emptyText = "No campaigns found";
    }

    if (campaigns.length === 0) {
      return (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>{emptyText}</Text>
          <Button
            title="Browse Campaigns"
            onPress={() => router.push('/(tabs)/discover')}
            variant="primary"
            style={styles.emptyButton}
          />
        </View>
      );
    }

    return (
      <View>
        {campaigns.map((campaign) => (
          <CampaignCard
            key={campaign.id}
            {...campaign}
            status={campaign.status as 'completed' | 'in-progress' | 'open'}
          />
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Campaigns</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.iconButton}>
            <Settings size={20} color={Colors.neutral[700]} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.createButtonContainer}>
        <Button
          title="Create New Campaign"
          onPress={handleCreateCampaign}
          variant="primary"
          leftIcon={<Plus size={20} color={Colors.white} />}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.neutral[900],
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.neutral[100],
    alignItems: 'center',
    justifyContent: 'center',
  },
  createButtonContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
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
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
  },
  emptyText: {
    fontSize: 16,
    color: Colors.neutral[600],
    marginBottom: 16,
    textAlign: 'center',
  },
  emptyButton: {
    minWidth: 200,
  },
});