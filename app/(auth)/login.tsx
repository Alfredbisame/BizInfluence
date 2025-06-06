import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Mail, Lock, ArrowRight } from 'lucide-react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://images.pexels.com/photos/6347723/pexels-photo-6347723.jpeg' }}
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>
      </View>

      <View style={styles.form}>
        <Input
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          leftIcon={<Mail size={20} color={Colors.neutral[500]} />}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          leftIcon={<Lock size={20} color={Colors.neutral[500]} />}
          secureTextEntry
        />

        <Button
          title="Sign In"
          onPress={handleLogin}
          rightIcon={<ArrowRight size={20} color={Colors.white} />}
          style={styles.button}
        />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => router.push('/register')}>
          <Text style={styles.footerLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 24,
  },
  header: {
    alignItems: 'center',
    marginTop: 64,
    marginBottom: 48,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 24,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: Colors.neutral[900],
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: Colors.neutral[600],
  },
  form: {
    gap: 16,
  },
  button: {
    marginTop: 8,
  },
  forgotPassword: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.primary[500],
    textAlign: 'center',
    marginTop: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    gap: 8,
  },
  footerText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.neutral[600],
  },
  footerLink: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: Colors.primary[500],
  },
});