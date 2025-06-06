import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ArrowLeft, User, MapPin, Phone, Mail, Instagram, Youtube, Upload, Star } from 'lucide-react-native';

export default function InfluencerApplicationScreen() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    bio: '',
    niche: '',
    instagramHandle: '',
    instagramFollowers: '',
    youtubeChannel: '',
    youtubeSubscribers: '',
    tiktokHandle: '',
    tiktokFollowers: '',
    experience: '',
    rateCard: '',
  });

  const steps = [
    { id: 1, title: 'Personal Info', description: 'Basic personal details' },
    { id: 2, title: 'Social Media', description: 'Your social platforms' },
    { id: 3, title: 'Content & Rates', description: 'Your expertise' },
    { id: 4, title: 'Portfolio', description: 'Showcase your work' },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit application
      Alert.alert(
        'Application Submitted',
        'Your influencer application has been submitted successfully. We will review your profile and get back to you within 24-48 hours.',
        [
          {
            text: 'Continue to Login',
            onPress: () => router.replace('/login'),
          },
        ]
      );
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      router.back();
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Personal Information</Text>
            <Text style={styles.stepDescription}>Tell us about yourself</Text>
            
            <Input
              value={formData.fullName}
              onChangeText={(text) => setFormData({ ...formData, fullName: text })}
              placeholder="Full Name"
              leftIcon={<User size={20} color={Colors.neutral[500]} />}
            />
            
            <Input
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              placeholder="Email Address"
              leftIcon={<Mail size={20} color={Colors.neutral[500]} />}
              keyboardType="email-address"
            />
            
            <Input
              value={formData.phone}
              onChangeText={(text) => setFormData({ ...formData, phone: text })}
              placeholder="Phone Number"
              leftIcon={<Phone size={20} color={Colors.neutral[500]} />}
              keyboardType="phone-pad"
            />
            
            <Input
              value={formData.location}
              onChangeText={(text) => setFormData({ ...formData, location: text })}
              placeholder="Location (e.g., Accra, Ghana)"
              leftIcon={<MapPin size={20} color={Colors.neutral[500]} />}
            />
            
            <Input
              value={formData.bio}
              onChangeText={(text) => setFormData({ ...formData, bio: text })}
              placeholder="Bio - Tell us about yourself and your content style"
              multiline
              numberOfLines={4}
            />
          </View>
        );
      
      case 2:
        return (
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Social Media Presence</Text>
            <Text style={styles.stepDescription}>Connect your social media accounts</Text>
            
            <View style={styles.platformSection}>
              <Text style={styles.platformTitle}>Instagram</Text>
              <Input
                value={formData.instagramHandle}
                onChangeText={(text) => setFormData({ ...formData, instagramHandle: text })}
                placeholder="@username"
                leftIcon={<Instagram size={20} color={Colors.neutral[500]} />}
              />
              <Input
                value={formData.instagramFollowers}
                onChangeText={(text) => setFormData({ ...formData, instagramFollowers: text })}
                placeholder="Number of followers"
                keyboardType="numeric"
              />
            </View>
            
            <View style={styles.platformSection}>
              <Text style={styles.platformTitle}>YouTube (Optional)</Text>
              <Input
                value={formData.youtubeChannel}
                onChangeText={(text) => setFormData({ ...formData, youtubeChannel: text })}
                placeholder="Channel name or URL"
                leftIcon={<Youtube size={20} color={Colors.neutral[500]} />}
              />
              <Input
                value={formData.youtubeSubscribers}
                onChangeText={(text) => setFormData({ ...formData, youtubeSubscribers: text })}
                placeholder="Number of subscribers"
                keyboardType="numeric"
              />
            </View>
            
            <View style={styles.platformSection}>
              <Text style={styles.platformTitle}>TikTok (Optional)</Text>
              <Input
                value={formData.tiktokHandle}
                onChangeText={(text) => setFormData({ ...formData, tiktokHandle: text })}
                placeholder="@username"
              />
              <Input
                value={formData.tiktokFollowers}
                onChangeText={(text) => setFormData({ ...formData, tiktokFollowers: text })}
                placeholder="Number of followers"
                keyboardType="numeric"
              />
            </View>
          </View>
        );
      
      case 3:
        return (
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Content & Expertise</Text>
            <Text style={styles.stepDescription}>What type of content do you create?</Text>
            
            <View style={styles.selectContainer}>
              <Text style={styles.selectLabel}>Content Niche</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.nicheScroll}>
                {['Fashion', 'Beauty', 'Technology', 'Food', 'Travel', 'Lifestyle', 'Fitness', 'Education', 'Entertainment'].map((niche) => (
                  <TouchableOpacity
                    key={niche}
                    style={[
                      styles.nicheChip,
                      formData.niche === niche && styles.nicheChipSelected,
                    ]}
                    onPress={() => setFormData({ ...formData, niche })}
                  >
                    <Text
                      style={[
                        styles.nicheChipText,
                        formData.niche === niche && styles.nicheChipTextSelected,
                      ]}
                    >
                      {niche}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            
            <Input
              value={formData.experience}
              onChangeText={(text) => setFormData({ ...formData, experience: text })}
              placeholder="Content creation experience (e.g., 2 years creating fashion content)"
              multiline
              numberOfLines={3}
            />
            
            <Input
              value={formData.rateCard}
              onChangeText={(text) => setFormData({ ...formData, rateCard: text })}
              placeholder="Your rates (e.g., GHS 500 per Instagram post)"
              multiline
              numberOfLines={3}
            />
            
            <View style={styles.tipsCard}>
              <Star size={20} color={Colors.warning[500]} />
              <Text style={styles.tipsTitle}>Pro Tips</Text>
              <Text style={styles.tipsText}>
                • Be specific about your content style{'\n'}
                • Include your engagement rates{'\n'}
                • Mention any brand collaborations{'\n'}
                • Set competitive but fair rates
              </Text>
            </View>
          </View>
        );
      
      case 4:
        return (
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Portfolio Showcase</Text>
            <Text style={styles.stepDescription}>Upload your best content samples</Text>
            
            <Card style={styles.uploadCard}>
              <Upload size={32} color={Colors.primary[500]} />
              <Text style={styles.uploadTitle}>Content Samples</Text>
              <Text style={styles.uploadDescription}>Upload 3-5 of your best posts or videos</Text>
              <Button title="Upload Content" onPress={() => {}} variant="outline" size="sm" />
            </Card>
            
            <Card style={styles.uploadCard}>
              <Upload size={32} color={Colors.primary[500]} />
              <Text style={styles.uploadTitle}>Media Kit (Optional)</Text>
              <Text style={styles.uploadDescription}>Upload your media kit or portfolio PDF</Text>
              <Button title="Upload Media Kit" onPress={() => {}} variant="outline" size="sm" />
            </Card>
            
            <View style={styles.portfolioNote}>
              <Text style={styles.portfolioText}>
                📸 High-quality content samples help brands understand your style and increase your chances of getting selected for campaigns.
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
        <Text style={styles.headerTitle}>Influencer Application</Text>
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
          title={currentStep === steps.length ? 'Submit Application' : 'Continue'}
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
  platformSection: {
    marginBottom: 24,
  },
  platformTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: Colors.neutral[900],
    marginBottom: 12,
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
  nicheScroll: {
    flexDirection: 'row',
  },
  nicheChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.neutral[100],
    marginRight: 8,
  },
  nicheChipSelected: {
    backgroundColor: Colors.primary[500],
  },
  nicheChipText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.neutral[700],
  },
  nicheChipTextSelected: {
    color: Colors.white,
  },
  tipsCard: {
    backgroundColor: Colors.warning[50],
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  tipsTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: Colors.warning[700],
    marginBottom: 8,
  },
  tipsText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.warning[700],
    lineHeight: 20,
  },
  uploadCard: {
    alignItems: 'center',
    padding: 24,
    marginBottom: 16,
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
  portfolioNote: {
    backgroundColor: Colors.primary[50],
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  portfolioText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.primary[700],
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