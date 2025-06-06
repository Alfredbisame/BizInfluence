import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '@/constants/Colors';
import { Card } from '@/components/ui/Card';
import { Building2, Users, ArrowRight, Sparkles, TrendingUp, Target } from 'lucide-react-native';

const { height: screenHeight } = Dimensions.get('window');

export default function UserTypeScreen() {
  const router = useRouter();

  const handleUserTypeSelection = (type: 'company' | 'influencer') => {
    if (type === 'company') {
      router.push('/company-application');
    } else {
      router.push('/influencer-application');
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.primary[50], Colors.white, Colors.secondary[100] || '#fafafa']}
        style={styles.gradient}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          bounces={true}
        >
          <View style={styles.header}>
            <View style={styles.imageContainer}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
                style={styles.headerImage}
              />
              <View style={styles.imageOverlay}>
                <Sparkles size={24} color={Colors.white} />
              </View>
            </View>
            <Text style={styles.title}>Join BizInfluence</Text>
            <Text style={styles.subtitle}>
              Choose your path to success and start building meaningful connections
            </Text>
          </View>

          <View style={styles.optionsContainer}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => handleUserTypeSelection('company')}
              style={styles.optionWrapper}
            >
              <Card style={[styles.optionCard, styles.businessCard]} elevation={3}>
                <LinearGradient
                  colors={[Colors.primary[500], Colors.primary[600]]}
                  style={styles.cardGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <View style={styles.optionHeader}>
                    <View style={styles.iconContainer}>
                      <Building2 size={28} color={Colors.white} />
                    </View>
                    <View style={styles.arrowContainer}>
                      <ArrowRight size={18} color={Colors.white} opacity={0.8} />
                    </View>
                  </View>
                  
                  <Text style={styles.optionTitle}>I'm a Business</Text>
                  <Text style={styles.optionDescription}>
                    Scale your brand with authentic influencer partnerships and data-driven campaigns
                  </Text>
                  
                  <View style={styles.featuresList}>
                    <View style={styles.featureItem}>
                      <Target size={14} color={Colors.white} opacity={0.9} />
                      <Text style={styles.featureText}>Launch targeted campaigns</Text>
                    </View>
                    <View style={styles.featureItem}>
                      <Users size={14} color={Colors.white} opacity={0.9} />
                      <Text style={styles.featureText}>Access verified influencers</Text>
                    </View>
                    <View style={styles.featureItem}>
                      <TrendingUp size={14} color={Colors.white} opacity={0.9} />
                      <Text style={styles.featureText}>Real-time analytics</Text>
                    </View>
                  </View>
                </LinearGradient>
              </Card>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => handleUserTypeSelection('influencer')}
              style={styles.optionWrapper}
            >
              <Card style={[styles.optionCard, styles.influencerCard]} elevation={3}>
                <LinearGradient
                  colors={[Colors.secondary[500] || '#8B5CF6', Colors.secondary[600] || '#7C3AED']}
                  style={styles.cardGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <View style={styles.optionHeader}>
                    <View style={styles.iconContainer}>
                      <Sparkles size={28} color={Colors.white} />
                    </View>
                    <View style={styles.arrowContainer}>
                      <ArrowRight size={18} color={Colors.white} opacity={0.8} />
                    </View>
                  </View>
                  
                  <Text style={styles.optionTitle}>I'm an Influencer</Text>
                  <Text style={styles.optionDescription}>
                    Monetize your creativity and build lasting partnerships with premium brands
                  </Text>
                  
                  <View style={styles.featuresList}>
                    <View style={styles.featureItem}>
                      <Target size={14} color={Colors.white} opacity={0.9} />
                      <Text style={styles.featureText}>Discover brand collaborations</Text>
                    </View>
                    <View style={styles.featureItem}>
                      <Users size={14} color={Colors.white} opacity={0.9} />
                      <Text style={styles.featureText}>Build your media kit</Text>
                    </View>
                    <View style={styles.featureItem}>
                      <TrendingUp size={14} color={Colors.white} opacity={0.9} />
                      <Text style={styles.featureText}>Track your earnings</Text>
                    </View>
                  </View>
                </LinearGradient>
              </Card>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity 
              style={styles.loginLink}
              onPress={() => router.push('/login')}
            >
              <Text style={styles.loginText}>Already have an account? </Text>
              <Text style={styles.loginTextBold}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  gradient: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 32,
  },
  headerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: Colors.white,
  },
  imageOverlay: {
    position: 'absolute',
    bottom: -8,
    right: -8,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary[500],
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: Colors.white,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    color: Colors.neutral[900],
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: Colors.neutral[600],
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  optionsContainer: {
    gap: 24,
    marginBottom: 40,
  },
  optionWrapper: {
    transform: [{ scale: 1 }],
  },
  optionCard: {
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: Colors.neutral[900],
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },
  businessCard: {
    borderWidth: 1,
    borderColor: Colors.primary[200],
  },
  influencerCard: {
    borderWidth: 1,
    borderColor: Colors.secondary[200] || '#E9D5FF',
  },
  cardGradient: {
    padding: 28,
    minHeight: 200,
  },
  optionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  arrowContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: Colors.white,
    marginBottom: 12,
  },
  optionDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: Colors.white,
    lineHeight: 22,
    marginBottom: 24,
    opacity: 0.9,
  },
  featuresList: {
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  featureText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.white,
    opacity: 0.95,
  },
  footer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  loginLink: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderWidth: 1,
    borderColor: Colors.primary[200],
  },
  loginText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: Colors.neutral[600],
  },
  loginTextBold: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    color: Colors.primary[600],
  },
});
