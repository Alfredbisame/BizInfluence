import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Colors from '@/constants/Colors';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ArrowLeft, Upload, Calendar, DollarSign, MessageSquare, FileText } from 'lucide-react-native';

export default function ApplyCampaignScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [formData, setFormData] = useState({
    proposal: '',
    timeline: '',
    budget: '',
    experience: '',
    portfolio: '',
    additionalNotes: '',
  });

  const handleSubmit = () => {
    Alert.alert(
      'Application Submitted',
      'Your campaign application has been submitted successfully. The brand will review your proposal and get back to you within 24-48 hours.',
      [
        {
          text: 'OK',
          onPress: () => router.back(),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color={Colors.neutral[700]} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Apply for Campaign</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Card style={styles.campaignSummary}>
          <Text style={styles.campaignTitle}>African Print Fashion Collection</Text>
          <Text style={styles.companyName}>GhanaWear</Text>
          <View style={styles.campaignMeta}>
            <Text style={styles.budget}>GHS 2,000</Text>
            <Text style={styles.deadline}>Due: 30 Aug</Text>
          </View>
        </Card>

        <Card style={styles.formCard}>
          <Text style={styles.sectionTitle}>Your Proposal</Text>
          <Text style={styles.sectionDescription}>
            Tell the brand why you're the perfect fit for this campaign
          </Text>

          <Input
            value={formData.proposal}
            onChangeText={(text) => setFormData({ ...formData, proposal: text })}
            placeholder="Describe your approach to this campaign and why you're interested..."
            leftIcon={<MessageSquare size={20} color={Colors.neutral[500]} />}
            multiline
            numberOfLines={4}
          />

          <Input
            value={formData.experience}
            onChangeText={(text) => setFormData({ ...formData, experience: text })}
            placeholder="Relevant experience (e.g., previous fashion campaigns, similar brands)"
            leftIcon={<FileText size={20} color={Colors.neutral[500]} />}
            multiline
            numberOfLines={3}
          />

          <Input
            value={formData.timeline}
            onChangeText={(text) => setFormData({ ...formData, timeline: text })}
            placeholder="Your proposed timeline for deliverables"
            leftIcon={<Calendar size={20} color={Colors.neutral[500]} />}
          />

          <Input
            value={formData.budget}
            onChangeText={(text) => setFormData({ ...formData, budget: text })}
            placeholder="Your rate for this campaign (optional)"
            leftIcon={<DollarSign size={20} color={Colors.neutral[500]} />}
          />
        </Card>

        <Card style={styles.formCard}>
          <Text style={styles.sectionTitle}>Portfolio & Samples</Text>
          <Text style={styles.sectionDescription}>
            Upload relevant content samples that showcase your style
          </Text>

          <TouchableOpacity style={styles.uploadArea}>
            <Upload size={32} color={Colors.primary[500]} />
            <Text style={styles.uploadTitle}>Upload Content Samples</Text>
            <Text style={styles.uploadDescription}>
              Upload 3-5 of your best fashion-related posts
            </Text>
            <Button title="Choose Files" onPress={() => {}} variant="outline" size="sm" />
          </TouchableOpacity>

          <Input
            value={formData.portfolio}
            onChangeText={(text) => setFormData({ ...formData, portfolio: text })}
            placeholder="Links to relevant posts or portfolio (Instagram, website, etc.)"
            multiline
            numberOfLines={3}
          />
        </Card>

        <Card style={styles.formCard}>
          <Text style={styles.sectionTitle}>Additional Information</Text>
          
          <Input
            value={formData.additionalNotes}
            onChangeText={(text) => setFormData({ ...formData, additionalNotes: text })}
            placeholder="Any additional notes or questions for the brand..."
            multiline
            numberOfLines={3}
          />
        </Card>

        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            By submitting this application, you agree to our Terms of Service and Privacy Policy. 
            If selected, you'll be contacted by the brand to finalize campaign details.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          title="Submit Application"
          onPress={handleSubmit}
          style={styles.submitButton}
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
  content: {
    flex: 1,
    padding: 16,
  },
  campaignSummary: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: Colors.primary[50],
    borderColor: Colors.primary[200],
    borderWidth: 1,
  },
  campaignTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: Colors.neutral[900],
    marginBottom: 4,
  },
  companyName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.primary[600],
    marginBottom: 8,
  },
  campaignMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  budget: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: Colors.success[600],
  },
  deadline: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.neutral[600],
  },
  formCard: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: Colors.neutral[900],
    marginBottom: 4,
  },
  sectionDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.neutral[600],
    marginBottom: 16,
    lineHeight: 20,
  },
  uploadArea: {
    alignItems: 'center',
    padding: 24,
    borderWidth: 2,
    borderColor: Colors.primary[200],
    borderStyle: 'dashed',
    borderRadius: 8,
    backgroundColor: Colors.primary[50],
    marginBottom: 16,
  },
  uploadTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: Colors.neutral[900],
    marginTop: 8,
    marginBottom: 4,
  },
  uploadDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.neutral[600],
    textAlign: 'center',
    marginBottom: 16,
  },
  termsContainer: {
    backgroundColor: Colors.neutral[100],
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  termsText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: Colors.neutral[600],
    lineHeight: 18,
    textAlign: 'center',
  },
  footer: {
    padding: 16,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.neutral[200],
  },
  submitButton: {
    width: '100%',
  },
});