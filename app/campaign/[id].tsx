import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '@/constants/Colors';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Avatar } from '@/components/ui/Avatar';
import { ArrowLeft, Calendar, Target, Users, MapPin, Clock, Star, Share2 } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function CampaignDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Mock campaign data - in real app, fetch based on id
  const campaign = {
    id: '1',
    title: 'Promote our new African print fashion collection',
    company: {
      id: 'c1',
      name: 'GhanaWear',
      logo: 'https://images.pexels.com/photos/7679657/pexels-photo-7679657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Leading African fashion brand specializing in modern traditional wear',
      location: 'Accra, Ghana',
      rating: 4.8,
      campaigns: 12,
    },
    image: 'https://images.pexels.com/photos/6140144/pexels-photo-6140144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    budget: 'GHS 2,000',
    deadline: '30 Aug 2024',
    category: 'Fashion',
    requiredFollowers: '5K+',
    status: 'open',
    description: 'We are launching our new African print collection and looking for fashion influencers to showcase our beautiful designs. This collection celebrates Ghanaian heritage with modern cuts and vibrant patterns.',
    requirements: [
      'Create 3 Instagram posts featuring our products',
      'Share 2 Instagram stories with product tags',
      'Include specific hashtags and mentions',
      'Authentic styling that matches your aesthetic',
      'High-quality photography or professional shots'
    ],
    deliverables: [
      '3 Instagram feed posts',
      '2 Instagram stories',
      'Usage rights for 6 months',
      'Performance analytics report'
    ],
    timeline: '2 weeks from acceptance',
    targetAudience: 'Fashion-conscious women aged 18-35 in Ghana',
    brandGuidelines: 'Maintain authentic voice while highlighting quality and cultural significance',
  };

  const handleApply = () => {
    router.push(`/apply-campaign/${id}`);
  };

  const handleShare = () => {
    // Implement share functionality
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Image */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: campaign.image }} style={styles.headerImage} />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.7)']}
            style={styles.imageOverlay}
          />
          
          <SafeAreaView style={styles.headerActions} edges={['top']}>
            <TouchableOpacity onPress={() => router.back()} style={styles.actionButton}>
              <ArrowLeft size={24} color={Colors.white} />
            </TouchableOpacity>
            <View style={styles.rightActions}>
              <TouchableOpacity onPress={handleShare} style={styles.actionButton}>
                <Share2 size={24} color={Colors.white} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleBookmark} style={styles.actionButton}>
                <Star size={24} color={isBookmarked ? Colors.warning[500] : Colors.white} />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>

        <View style={styles.content}>
          {/* Campaign Header */}
          <View style={styles.campaignHeader}>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>Open</Text>
            </View>
            <Text style={styles.category}>{campaign.category}</Text>
            <Text style={styles.title}>{campaign.title}</Text>
            
            <View style={styles.metaRow}>
              <View style={styles.metaItem}>
                <Target size={16} color={Colors.primary[500]} />
                <Text style={styles.metaText}>{campaign.budget}</Text>
              </View>
              <View style={styles.metaItem}>
                <Calendar size={16} color={Colors.primary[500]} />
                <Text style={styles.metaText}>{campaign.deadline}</Text>
              </View>
              <View style={styles.metaItem}>
                <Users size={16} color={Colors.primary[500]} />
                <Text style={styles.metaText}>{campaign.requiredFollowers}</Text>
              </View>
            </View>
          </View>

          {/* Company Info */}
          <Card style={styles.companyCard}>
            <View style={styles.companyHeader}>
              <Avatar source={{ uri: campaign.company.logo }} name={campaign.company.name} size="md" />
              <View style={styles.companyInfo}>
                <Text style={styles.companyName}>{campaign.company.name}</Text>
                <View style={styles.companyMeta}>
                  <MapPin size={14} color={Colors.neutral[500]} />
                  <Text style={styles.companyLocation}>{campaign.company.location}</Text>
                </View>
                <View style={styles.companyStats}>
                  <Star size={14} color={Colors.warning[500]} />
                  <Text style={styles.companyRating}>{campaign.company.rating}</Text>
                  <Text style={styles.companyCampaigns}>• {campaign.company.campaigns} campaigns</Text>
                </View>
              </View>
            </View>
            <Text style={styles.companyDescription}>{campaign.company.description}</Text>
          </Card>

          {/* Campaign Description */}
          <Card style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Campaign Description</Text>
            <Text style={styles.description}>{campaign.description}</Text>
          </Card>

          {/* Requirements */}
          <Card style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Requirements</Text>
            {campaign.requirements.map((requirement, index) => (
              <View key={index} style={styles.listItem}>
                <View style={styles.bullet} />
                <Text style={styles.listText}>{requirement}</Text>
              </View>
            ))}
          </Card>

          {/* Deliverables */}
          <Card style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Deliverables</Text>
            {campaign.deliverables.map((deliverable, index) => (
              <View key={index} style={styles.listItem}>
                <View style={styles.bullet} />
                <Text style={styles.listText}>{deliverable}</Text>
              </View>
            ))}
          </Card>

          {/* Additional Info */}
          <Card style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Additional Information</Text>
            
            <View style={styles.infoRow}>
              <Clock size={16} color={Colors.neutral[600]} />
              <Text style={styles.infoLabel}>Timeline:</Text>
              <Text style={styles.infoValue}>{campaign.timeline}</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Users size={16} color={Colors.neutral[600]} />
              <Text style={styles.infoLabel}>Target Audience:</Text>
              <Text style={styles.infoValue}>{campaign.targetAudience}</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Brand Guidelines:</Text>
            </View>
            <Text style={styles.infoValue}>{campaign.brandGuidelines}</Text>
          </Card>
        </View>
      </ScrollView>

      {/* Apply Button */}
      <View style={styles.applyContainer}>
        <Button
          title="Apply for Campaign"
          onPress={handleApply}
          style={styles.applyButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  imageContainer: {
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: 300,
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
  },
  headerActions: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  rightActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 16,
  },
  campaignHeader: {
    marginBottom: 16,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.success[500],
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  statusText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: Colors.white,
  },
  category: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.primary[500],
    marginBottom: 4,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: Colors.neutral[900],
    marginBottom: 16,
    lineHeight: 32,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  metaText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: Colors.neutral[700],
    marginLeft: 4,
  },
  companyCard: {
    marginBottom: 16,
  },
  companyHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  companyInfo: {
    flex: 1,
    marginLeft: 12,
  },
  companyName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: Colors.neutral[900],
  },
  companyMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  companyLocation: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: Colors.neutral[600],
    marginLeft: 4,
  },
  companyStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  companyRating: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: Colors.neutral[700],
    marginLeft: 4,
  },
  companyCampaigns: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: Colors.neutral[600],
    marginLeft: 4,
  },
  companyDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.neutral[700],
    lineHeight: 20,
  },
  sectionCard: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: Colors.neutral[900],
    marginBottom: 12,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.neutral[700],
    lineHeight: 22,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.primary[500],
    marginTop: 6,
    marginRight: 12,
  },
  listText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.neutral[700],
    lineHeight: 20,
    flex: 1,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.neutral[800],
    marginLeft: 8,
    marginRight: 8,
  },
  infoValue: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.neutral[700],
    flex: 1,
    lineHeight: 20,
  },
  applyContainer: {
    padding: 16,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.neutral[200],
  },
  applyButton: {
    width: '100%',
  },
});