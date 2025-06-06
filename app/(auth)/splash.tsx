import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '@/constants/Colors';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/onboarding');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={[Colors.primary[500], Colors.secondary[500]]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
            style={styles.logo}
          />
          <View style={styles.logoOverlay} />
        </View>
        
        <Text style={styles.title}>Bisame</Text>
        <Text style={styles.subtitle}>Influencer Marketing Platform</Text>
        
        <View style={styles.taglineContainer}>
          <Text style={styles.tagline}>Connecting Ghanaian Brands</Text>
          <Text style={styles.tagline}>with Content Creators</Text>
        </View>
      </View>
      
      <View style={styles.decorativeElements}>
        <View style={[styles.blob, styles.blob1]} />
        <View style={[styles.blob, styles.blob2]} />
        <View style={[styles.blob, styles.blob3]} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    zIndex: 2,
  },
  logoContainer: {
    position: 'relative',
    marginBottom: 32,
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  logoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.white,
    opacity: 0.1,
    borderRadius: 70,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 42,
    color: Colors.white,
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: Colors.white,
    opacity: 0.9,
    marginBottom: 24,
  },
  taglineContainer: {
    alignItems: 'center',
  },
  tagline: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: Colors.white,
    opacity: 0.8,
    textAlign: 'center',
  },
  decorativeElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  blob: {
    position: 'absolute',
    borderRadius: 100,
    backgroundColor: Colors.white,
    opacity: 0.1,
  },
  blob1: {
    width: 200,
    height: 200,
    top: -100,
    right: -100,
  },
  blob2: {
    width: 150,
    height: 150,
    bottom: -75,
    left: -75,
  },
  blob3: {
    width: 100,
    height: 100,
    top: height * 0.3,
    left: -50,
  },
});