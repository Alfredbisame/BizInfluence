import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '@/constants/Colors';
import { Button } from '@/components/ui/Button';
import { ArrowRight, ArrowLeft } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const onboardingData = [
  {
    id: 1,
    title: 'Connect with Brands',
    subtitle: 'Join Ghana\'s leading influencer marketing platform',
    description: 'Discover amazing brands and create authentic content that resonates with your audience.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'Grow Your Business',
    subtitle: 'Reach your target audience effectively',
    description: 'Partner with talented content creators to showcase your products and services to the right people.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'Track Your Success',
    subtitle: 'Measure impact with detailed analytics',
    description: 'Get comprehensive insights into campaign performance and audience engagement.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export default function OnboardingScreen() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      scrollViewRef.current?.scrollTo({ x: nextIndex * width, animated: true });
    } else {
      router.replace('/user-type');
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      scrollViewRef.current?.scrollTo({ x: prevIndex * width, animated: true });
    }
  };

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / width);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        style={styles.scrollView}
      >
        {onboardingData.map((item, index) => (
          <View key={item.id} style={styles.slide}>
            <LinearGradient
              colors={[Colors.primary[50], Colors.secondary[50]]}
              style={styles.imageContainer}
            >
              <Image source={{ uri: item.image }} style={styles.image} />
            </LinearGradient>
            
            <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.pagination}>
          {onboardingData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                index === currentIndex && styles.paginationDotActive,
              ]}
            />
          ))}
        </View>

        <View style={styles.navigation}>
          {currentIndex > 0 && (
            <TouchableOpacity onPress={handlePrevious} style={styles.backButton}>
              <ArrowLeft size={20} color={Colors.neutral[600]} />
            </TouchableOpacity>
          )}
          
          <Button
            title={currentIndex === onboardingData.length - 1 ? 'Get Started' : 'Next'}
            onPress={handleNext}
            rightIcon={<ArrowRight size={20} color={Colors.white} />}
            style={styles.nextButton}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollView: {
    flex: 1,
  },
  slide: {
    width,
    flex: 1,
    paddingHorizontal: 24,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 24,
    overflow: 'hidden',
    marginTop: 60,
    marginBottom: 40,
    padding: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  content: {
    paddingBottom: 40,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: Colors.neutral[900],
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: Colors.primary[500],
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: Colors.neutral[600],
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.neutral[300],
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: Colors.primary[500],
    width: 24,
  },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.neutral[100],
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButton: {
    flex: 1,
    marginLeft: 16,
  },
});