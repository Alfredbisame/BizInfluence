import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import { Card } from '@/components/ui/Card';
import { MessageSquare, Heart, UserPlus, Star } from 'lucide-react-native';

export default function NotificationsScreen() {
  const notifications = [
    {
      id: '1',
      type: 'message',
      title: 'New Message',
      message: 'GhanaWear sent you a message about your campaign',
      time: '2m ago',
      icon: <MessageSquare size={20} color={Colors.primary[500]} />,
      image: 'https://images.pexels.com/photos/7679657/pexels-photo-7679657.jpeg',
    },
    {
      id: '2',
      type: 'like',
      title: 'Campaign Liked',
      message: 'Your campaign "African Print Collection" was liked by AccraPay',
      time: '1h ago',
      icon: <Heart size={20} color={Colors.error[500]} />,
      image: 'https://images.pexels.com/photos/6347729/pexels-photo-6347729.jpeg',
    },
    {
      id: '3',
      type: 'follow',
      title: 'New Follower',
      message: 'Kofi Mensah started following you',
      time: '2h ago',
      icon: <UserPlus size={20} color={Colors.success[500]} />,
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    },
    {
      id: '4',
      type: 'review',
      title: 'New Review',
      message: 'KumasiEats left a 5-star review on your campaign',
      time: '1d ago',
      icon: <Star size={20} color={Colors.warning[500]} />,
      image: 'https://images.pexels.com/photos/5824530/pexels-photo-5824530.jpeg',
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {notifications.map((notification) => (
          <TouchableOpacity key={notification.id} activeOpacity={0.8}>
            <Card style={styles.notificationCard}>
              <View style={styles.notificationContent}>
                <Image 
                  source={{ uri: notification.image }}
                  style={styles.notificationImage}
                />
                <View style={styles.notificationInfo}>
                  <Text style={styles.notificationTitle}>{notification.title}</Text>
                  <Text style={styles.notificationMessage}>{notification.message}</Text>
                  <Text style={styles.notificationTime}>{notification.time}</Text>
                </View>
                <View style={styles.notificationIcon}>
                  {notification.icon}
                </View>
              </View>
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral[50],
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  headerTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: Colors.neutral[900],
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  notificationCard: {
    marginBottom: 12,
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  notificationInfo: {
    flex: 1,
    marginLeft: 12,
  },
  notificationTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: Colors.neutral[900],
  },
  notificationMessage: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: Colors.neutral[600],
    marginTop: 2,
  },
  notificationTime: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: Colors.neutral[500],
    marginTop: 4,
  },
  notificationIcon: {
    marginLeft: 12,
  },
});