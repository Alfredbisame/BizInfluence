import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import { Avatar } from '@/components/ui/Avatar';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Settings, CreditCard as Edit, Star, Users, Instagram, Youtube, FileText, CreditCard, CircleHelp as HelpCircle, LogOut } from 'lucide-react-native';

export default function ProfileScreen() {
  // Mock user data
  const user = {
    name: 'Ama Serwaa',
    avatar: 'https://images.pexels.com/photos/1037915/pexels-photo-1037915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Fashion influencer specializing in modern African designs and accessories. Based in Kumasi, working with local and international brands.',
    location: 'Kumasi, Ghana',
    followers: '45K',
    rating: 4.9,
    completedCampaigns: 24,
    platforms: ['instagram', 'youtube', 'tiktok'],
  };

  const renderMenuItem = (icon: React.ReactNode, title: string, onPress: () => void) => {
    return (
      <TouchableOpacity style={styles.menuItem} onPress={onPress}>
        <View style={styles.menuIconContainer}>
          {icon}
        </View>
        <Text style={styles.menuItemText}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity style={styles.iconButton}>
            <Settings size={20} color={Colors.neutral[700]} />
          </TouchableOpacity>
        </View>

        <View style={styles.profileHeader}>
          <Avatar 
            source={{ uri: user.avatar }}
            name={user.name}
            size="xl"
          />
          <View style={styles.editButtonContainer}>
            <TouchableOpacity style={styles.editButton}>
              <Edit size={16} color={Colors.white} />
            </TouchableOpacity>
          </View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userLocation}>{user.location}</Text>
          
          <View style={styles.platformsRow}>
            {user.platforms.includes('instagram') && (
              <View style={styles.platformBadge}>
                <Instagram size={16} color={Colors.white} />
              </View>
            )}
            {user.platforms.includes('youtube') && (
              <View style={styles.platformBadge}>
                <Youtube size={16} color={Colors.white} />
              </View>
            )}
          </View>
          
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{user.followers}</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={[styles.statItem, styles.statDivider]}>
              <Text style={styles.statValue}>{user.rating}</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{user.completedCampaigns}</Text>
              <Text style={styles.statLabel}>Campaigns</Text>
            </View>
          </View>
        </View>

        <Card style={styles.bioCard}>
          <Text style={styles.bioText}>{user.bio}</Text>
          <Button 
            title="Edit Profile" 
            onPress={() => {}} 
            variant="outline"
            style={styles.editProfileButton}
          />
        </Card>

        <Card style={styles.menuCard}>
          <Text style={styles.menuTitle}>Account</Text>
          {renderMenuItem(
            <FileText size={20} color={Colors.primary[500]} />,
            'My Documents',
            () => {}
          )}
          {renderMenuItem(
            <CreditCard size={20} color={Colors.primary[500]} />,
            'Payment Methods',
            () => {}
          )}
          {renderMenuItem(
            <Users size={20} color={Colors.primary[500]} />,
            'Refer a Friend',
            () => {}
          )}
        </Card>

        <Card style={styles.menuCard}>
          <Text style={styles.menuTitle}>Support</Text>
          {renderMenuItem(
            <HelpCircle size={20} color={Colors.primary[500]} />,
            'Help Center',
            () => {}
          )}
          {renderMenuItem(
            <Star size={20} color={Colors.primary[500]} />,
            'Rate the App',
            () => {}
          )}
        </Card>

        <Button 
          title="Log Out" 
          onPress={() => {}} 
          variant="outline"
          leftIcon={<LogOut size={20} color={Colors.error[500]} />}
          style={styles.logoutButton}
          textStyle={{ color: Colors.error[500] }}
        />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.neutral[900],
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.neutral[100],
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileHeader: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  editButtonContainer: {
    position: 'absolute',
    top: 60,
    right: '50%',
    marginRight: -60,
  },
  editButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.secondary[500],
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.neutral[900],
    marginTop: 12,
  },
  userLocation: {
    fontSize: 14,
    color: Colors.neutral[600],
    marginTop: 4,
  },
  platformsRow: {
    flexDirection: 'row',
    marginTop: 12,
  },
  platformBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.secondary[500],
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 24,
    paddingHorizontal: 16,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statDivider: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: Colors.neutral[200],
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.neutral[900],
  },
  statLabel: {
    fontSize: 14,
    color: Colors.neutral[600],
    marginTop: 4,
  },
  bioCard: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  bioText: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.neutral[700],
    marginBottom: 16,
  },
  editProfileButton: {
    alignSelf: 'center',
  },
  menuCard: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.neutral[900],
    marginBottom: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary[50],
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  menuItemText: {
    fontSize: 16,
    color: Colors.neutral[800],
  },
  logoutButton: {
    marginHorizontal: 16,
    marginBottom: 32,
    borderColor: Colors.error[500],
  },
});