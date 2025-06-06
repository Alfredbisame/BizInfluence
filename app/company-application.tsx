import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ArrowLeft, Building2, MapPin, Phone, Mail, Globe, Upload, CircleCheck as CheckCircle } from 'lucide-react-native';

export default function CompanyApplicationScreen() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    location: '',
    phone: '',
    email: '',
    website: '',
    description: '',
    targetAudience: '',
    marketingGoals: '',
  });

  const steps = [
    { id: 1, title: 'Company Info', description: 'Basic company details' },
    { id: 2, title: 'Business Details', description: 'Industry and location' },
    { id: 3, title: 'Marketing Goals', description: 'Your objectives' },
    { id: 4, title: 'Verification', description: 'Upload documents' },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit application
      Alert.alert(
        'Application Submitted',
        'Your company application has been submitted successfully. We will review it and get back to you within 24-48 hours.',
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
            <Text style={styles.stepTitle}>Company Information</Text>
            <Text style={styles.stepDescription}>Tell us about your company</Text>
            
            <Input
              value={formData.companyName}
              onChangeText={(text) => setFormData({ ...formData, companyName: text })}
              placeholder="Company Name"
              leftIcon={<Building2 size={20} color={Colors.neutral[500]} />}
            />
            
            <Input
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              placeholder="Business Email"
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
              value={formData.website}
              onChangeText={(text) => setFormData({ ...formData, website: text })}
              placeholder="Website (Optional)"
              leftIcon={<Globe size={20} color={Colors.neutral[500]} />}
            />
          </View>
        );
      
      case 2:
        return (
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Business Details</Text>
            <Text style={styles.stepDescription}>Help us understand your business better</Text>
            
            <View style={styles.selectContainer}>
              <Text style={styles.selectLabel}>Industry</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.industryScroll}>
                {['Fashion', 'Technology', 'Food & Beverage', 'Health & Beauty', 'Education', 'Agriculture', 'Finance', 'Entertainment'].map((industry) => (
                  <TouchableOpacity
                    key={industry}
                    style={[
                      styles.industryChip,
                      formData.industry === industry && styles.industryChipSelected,
                    ]}
                    onPress={() => setFormData({ ...formData, industry })}
                  >
                    <Text
                      style={[
                        styles.industryChipText,
                        formData.industry === industry && styles.industryChipTextSelected,
                      ]}
                    >
                      {industry}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            
            <Input
              value={formData.location}
              onChangeText={(text) => setFormData({ ...formData, location: text })}
              placeholder="Business Location"
              leftIcon={<MapPin size={20} color={Colors.neutral[500]} />}
            />
            
            <Input
              value={formData.description}
              onChangeText={(text) => setFormData({ ...formData, description: text })}
              placeholder="Company Description"
              multiline
              numberOfLines={4}
            />
          </View>
        );
      
      case 3:
        return (
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Marketing Goals</Text>
            <Text style={styles.stepDescription}>What do you want to achieve?</Text>
            
            <Input
              value={formData.targetAudience}
              onChangeText={(text) => setFormData({ ...formData, targetAudience: text })}
              placeholder="Target Audience (e.g., Young professionals in Accra)"
              multiline
              numberOfLines={3}
            />
            
            <Input
              value={formData.marketingGoals}
              onChangeText={(text) => setFormData({ ...formData, marketingGoals: text })}
              placeholder="Marketing Goals (e.g., Increase brand awareness, Drive sales)"
              multiline
              numberOfLines={3}
            />
            
            <View style={styles.goalsList}>
              <Text style={styles.goalsTitle}>Common Goals:</Text>
              {['Brand Awareness', 'Product Launch', 'Sales Growth', 'Social Media Growth', 'Event Promotion'].map((goal) => (
                <TouchableOpacity key={goal} style={styles.goalItem}>
                  <CheckCircle size={16} color={Colors.primary[500]} />
                  <Text style={styles.goalText}>{goal}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );
      
      case 4:
        return (
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Document Verification</Text>
            <Text style={styles.stepDescription}>Upload required documents for verification</Text>
            
            <Card style={styles.uploadCard}>
              <Upload size={32} color={Colors.primary[500]} />
              <Text style={styles.uploadTitle}>Business Registration Certificate</Text>
              <Text style={styles.uploadDescription}>Upload your official business registration document</Text>
              <Button title="Upload Document" onPress={() => {}} variant="outline" size="sm" />
            </Card>
            
            <Card style={styles.uploadCard}>
              <Upload size={32} color={Colors.primary[500]} />
              <Text style={styles.uploadTitle}>Tax Clearance Certificate</Text>
              <Text style={styles.uploadDescription}>Upload your current tax clearance certificate</Text>
              <Button title="Upload Document" onPress={() => {}} variant="outline" size="sm" />
            </Card>
            
            <View style={styles.verificationNote}>
              <Text style={styles.verificationText}>
                📋 All documents will be reviewed within 24-48 hours. You'll receive an email confirmation once approved.
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
        <Text style={styles.headerTitle}>Company Application</Text>
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
  selectContainer: {
    marginBottom: 16,
  },
  selectLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.neutral[700],
    marginBottom: 8,
  },
  industryScroll: {
    flexDirection: 'row',
  },
  industryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.neutral[100],
    marginRight: 8,
  },
  industryChipSelected: {
    backgroundColor: Colors.primary[500],
  },
  industryChipText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.neutral[700],
  },
  industryChipTextSelected: {
    color: Colors.white,
  },
  goalsList: {
    marginTop: 16,
  },
  goalsTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: Colors.neutral[900],
    marginBottom: 12,
  },
  goalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  goalText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.neutral[700],
    marginLeft: 8,
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
  verificationNote: {
    backgroundColor: Colors.primary[50],
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  verificationText: {
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