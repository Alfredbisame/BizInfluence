import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ArrowLeft, Target, Calendar, DollarSign, Users, Tag, FileText, Upload, MapPin } from 'lucide-react-native';

export default function CreateCampaignScreen() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    objectives: '',
    budget: '',
    deadline: '',
    requiredFollowers: '',
    targetAudience: '',
    location: '',
    requirements: '',
    deliverables: '',
    brandGuidelines: '',
  });

  const steps = [
    { id: 1, title: 'Basic Info', description: 'Campaign details' },
    { id: 2, title: 'Requirements', description: 'What you need' },
    { id: 3, title: 'Budget & Timeline', description: 'Financial details' },
    { id: 4, title: 'Review', description: 'Final review' },
  ];

  const categories = [
    'Fashion', 'Beauty', 'Technology', 'Food & Beverage', 'Health & Wellness',
    'Travel', 'Lifestyle', 'Education', 'Finance', 'Entertainment', 'Sports', 'Other'
  ];

  const followerRanges = [
    '1K - 5K', '5K - 10K', '10K - 25K', '25K - 50K', '50K - 100K', '100K+'
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      router.back();
    }
  };

  const handleSubmit = () => {
    Alert.alert(
      'Campaign Created',
      'Your campaign has been created successfully and is now live on the platform. Influencers can start applying immediately.',
      [
        {
          text: 'View Campaign',
          onPress: () => router.replace('/(tabs)/campaigns'),
        },
      ]
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Campaign Basic Information</Text>
            <Text style={styles.stepDescription}>Tell us about your campaign</Text>
            
            <Input
              value={formData.title}
              onChangeText={(text) => setFormData({ ...formData, title: text })}
              placeholder="Campaign Title (e.g., Promote our new product line)"
              leftIcon={<Target size={20} color={Colors.neutral[500]} />}
            />

            <View style={styles.selectContainer}>
              <Text style={styles.selectLabel}>Category</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
                {categories.map((category) => (
                  <TouchableOpacity
                    key={category}
                    style={[
                      styles.categoryChip,
                      formData.category === category && styles.categoryChipSelected,
                    ]}
                    onPress={() => setFormData({ ...formData, category })}
                  >
                    <Text
                      style={[
                        styles.categoryChipText,
                        formData.category === category && styles.categoryChipTextSelected,
                      ]}
                    >
                      {category}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            
            <Input
              value={formData.description}
              onChangeText={(text) => setFormData({ ...formData, description: text })}
              placeholder="Campaign Description - What is this campaign about?"
              leftIcon={<FileText size={20} color={Colors.neutral[500]} />}
              multiline
              numberOfLines={4}
            />
            
            <Input
              value={formData.objectives}
              onChangeText={(text) => setFormData({ ...formData, objectives: text })}
              placeholder="Campaign Objectives (e.g., Brand awareness, Product launch, Sales)"
              multiline
              numberOfLines={3}
            />

            <Input
              value={formData.location}
              onChangeText={(text) => setFormData({ ...formData, location: text })}
              placeholder="Target Location (e.g., Accra, Ghana or Nationwide)"
              leftIcon={<MapPin size={20} color={Colors.neutral[500]} />}
            />
          </View>
        );
      
      case 2:
        return (
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Campaign Requirements</Text>
            <Text style={styles.stepDescription}>What do you need from influencers?</Text>
            
            <Input
              value={formData.targetAudience}
              onChangeText={(text) => setFormData({ ...formData, targetAudience: text })}
              placeholder="Target Audience (e.g., Young professionals aged 25-35)"
              leftIcon={<Users size={20} color={Colors.neutral[500]} />}
              multiline
              numberOfLines={2}
            />

            <View style={styles.selectContainer}>
              <Text style={styles.selectLabel}>Required Followers</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.followersScroll}>
                {followerRanges.map((range) => (
                  <TouchableOpacity
                    key={range}
                    style={[
                      styles.followersChip,
                      formData.requiredFollowers === range && styles.followersChipSelected,
                    ]}
                    onPress={() => setFormData({ ...formData, requiredFollowers: range })}
                  >
                    <Text
                      style={[
                        styles.followersChipText,
                        formData.requiredFollowers === range && styles.followersChipTextSelected,
                      ]}
                    >
                      {range}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            
            <Input
              value={formData.requirements}
              onChangeText={(text) => setFormData({ ...formData, requirements: text })}
              placeholder="Specific Requirements (e.g., 3 Instagram posts, 2 stories, specific hashtags)"
              multiline
              numberOfLines={4}
            />
            
            <Input
              value={formData.deliverables}
              onChangeText={(text) => setFormData({ ...formData, deliverables: text })}
              placeholder="Expected Deliverables (e.g., High-quality photos, usage rights, analytics)"
              multiline
              numberOfLines={3}
            />

            <Input
              value={formData.brandGuidelines}
              onChangeText={(text) => setFormData({ ...formData, brandGuidelines: text })}
              placeholder="Brand Guidelines (tone, style, dos and don'ts)"
              multiline
              numberOfLines={3}
            />
          </View>
        );
      
      case 3:
        return (
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Budget & Timeline</Text>
            <Text style={styles.stepDescription}>Set your budget and campaign timeline</Text>
            
            <Input
              value={formData.budget}
              onChangeText={(text) => setFormData({ ...formData, budget: text })}
              placeholder="Campaign Budget (e.g., GHS 2,000 - 5,000)"
              leftIcon={<DollarSign size={20} color={Colors.neutral[500]} />}
            />
            
            <Input
              value={formData.deadline}
              onChangeText={(text) => setFormData({ ...formData, deadline: text })}
              placeholder="Application Deadline (e.g., 30 Aug 2024)"
              leftIcon={<Calendar size={20} color={Colors.neutral[500]} />}
            />

            <Card style={styles.budgetTips}>
              <Text style={styles.tipsTitle}>💡 Budget Tips</Text>
              <Text style={styles.tipsText}>
                • Consider follower count and engagement rates{'\n'}
                • Factor in content creation time and effort{'\n'}
                • Include usage rights in your budget{'\n'}
                • Be competitive but fair with your rates
              </Text>
            </Card>

            <Card style={styles.uploadCard}>
              <Upload size={32} color={Colors.primary[500]} />
              <Text style={styles.uploadTitle}>Campaign Assets</Text>
              <Text style={styles.uploadDescription}>
                Upload product images, brand assets, or reference materials
              </Text>
              <Button title="Upload Files" onPress={() => {}} variant="outline" size="sm" />
            </Card>
          </View>
        );
      
      case 4:
        return (
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Review Your Campaign</Text>
            <Text style={styles.stepDescription}>Review all details before publishing</Text>
            
            <Card style={styles.reviewCard}>
              <Text style={styles.reviewTitle}>{formData.title}</Text>
              <Text style={styles.reviewCategory}>{formData.category}</Text>
              <Text style={styles.reviewDescription}>{formData.description}</Text>
              
              <View style={styles.reviewMeta}>
                <View style={styles.reviewMetaItem}>
                  <Text style={styles.reviewMetaLabel}>Budget:</Text>
                  <Text style={styles.reviewMetaValue}>{formData.budget}</Text>
                </View>
                <View style={styles.reviewMetaItem}>
                  <Text style={styles.reviewMetaLabel}>Deadline:</Text>
                  <Text style={styles.reviewMetaValue}>{formData.deadline}</Text>
                </View>
                <View style={styles.reviewMetaItem}>
                  <Text style={styles.reviewMetaLabel}>Required Followers:</Text>
                  <Text style={styles.reviewMetaValue}>{formData.requiredFollowers}</Text>
                </View>
              </View>
            </Card>

            <View style={styles.publishNote}>
              <Text style={styles.publishText}>
                🚀 Once published, your campaign will be visible to all influencers on the platform. 
                You'll start receiving applications immediately.
              </Text>
            </View>
          </View>
        );
      
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePrevious} style={styles.backButton}>
          <ArrowLeft size={24} color={Colors.neutral[700]} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Campaign</Text>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${(currentStep / steps.length) * 100}%` }]} />
        </View>
        <Text style={styles.progressText}>Step {currentStep} of {steps.length}</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {renderStepContent()}
      </ScrollView>

      <View style={styles.footer}>
        <Button
          title={currentStep === steps.length ? 'Publish Campaign' : 'Continue'}
          onPress={handleNext}
          style={styles.continueButton}
        />
      </View>
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
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral[200],
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: Colors.neutral[900],
  },
  progressContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: Colors.white,
  },
  progressBar: {
    height: 4,
    backgroundColor: Colors.neutral[200],
    borderRadius: 2,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.primary[500],
    borderRadius: 2,
  },
  progressText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: Colors.neutral[600],
  },
  content: {
    flex: 1,
    padding: 16,
  },
  stepContent: {
    gap: 16,
  },
  stepTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: Colors.neutral[900],
  },
  stepDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: Colors.neutral[600],
    marginBottom: 8,
  },
  selectContainer: {
    marginBottom: 16,
  },
  selectLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.neutral[700],
    marginBottom: 8,
  },
  categoryScroll: {
    flexDirection: 'row',
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.neutral[100],
    marginRight: 8,
  },
  categoryChipSelected: {
    backgroundColor: Colors.primary[500],
  },
  categoryChipText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.neutral[700],
  },
  categoryChipTextSelected: {
    color: Colors.white,
  },
  followersScroll: {
    flexDirection: 'row',
  },
  followersChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.neutral[100],
    marginRight: 8,
  },
  followersChipSelected: {
    backgroundColor: Colors.secondary[500],
  },
  followersChipText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.neutral[700],
  },
  followersChipTextSelected: {
    color: Colors.white,
  },
  budgetTips: {
    backgroundColor: Colors.accent[50],
    padding: 16,
    marginTop: 16,
  },
  tipsTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: Colors.accent[700],
    marginBottom: 8,
  },
  tipsText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.accent[700],
    lineHeight: 20,
  },
  uploadCard: {
    alignItems: 'center',
    padding: 24,
    marginTop: 16,
    borderWidth: 2,
    borderColor: Colors.primary[200],
    borderStyle: 'dashed',
    backgroundColor: Colors.primary[50],
  },
  uploadTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: Colors.neutral[900],
    marginTop: 12,
    marginBottom: 4,
  },
  uploadDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.neutral[600],
    textAlign: 'center',
    marginBottom: 16,
  },
  reviewCard: {
    padding: 20,
    backgroundColor: Colors.primary[50],
    borderColor: Colors.primary[200],
    borderWidth: 1,
  },
  reviewTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: Colors.neutral[900],
    marginBottom: 4,
  },
  reviewCategory: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.primary[600],
    marginBottom: 8,
  },
  reviewDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.neutral[700],
    lineHeight: 20,
    marginBottom: 16,
  },
  reviewMeta: {
    gap: 8,
  },
  reviewMetaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reviewMetaLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.neutral[700],
  },
  reviewMetaValue: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: Colors.neutral[900],
  },
  publishNote: {
    backgroundColor: Colors.success[50],
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  publishText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.success[700],
    lineHeight: 20,
  },
  footer: {
    padding: 16,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.neutral[200],
  },
  continueButton: {
    width: '100%',
  },
});