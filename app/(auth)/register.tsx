import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { User, Mail, Lock, ArrowRight } from 'lucide-react-native';

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    router.replace('/(tabs)');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/6347723/pexels-photo-6347723.jpeg' }}
            style={styles.logo}
          />
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Join the Bisame community</Text>
        </View>

        <View style={styles.form}>
          <Input
            value={name}
            onChangeText={setName}
            placeholder="Full Name"
            leftIcon={<User size={20} color={Colors.neutral[500]} />}
          />
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
          <Input
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
            leftIcon={<Lock size={20} color={Colors.neutral[500]} />}
            secureTextEntry
          />

          <Button
            title="Sign Up"
            onPress={handleRegister}
            rightIcon={<ArrowRight size={20} color={Colors.white} />}
            style={styles.button}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text style={styles.footerLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    padding: 24,
    minHeight: '100%',
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
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