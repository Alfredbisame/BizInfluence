import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import { Card } from '@/components/ui/Card';
import { TrendingUp, Users, DollarSign, Calendar } from 'lucide-react-native';

type PeriodType = 'week' | 'month' | 'year';

export default function AnalyticsScreen() {
  const [activePeriod, setActivePeriod] = useState<PeriodType>('month');

  const renderPeriodTabs = () => {
    return (
      <View style={styles.periodTabsContainer}>
        <TouchableOpacity
          style={[
            styles.periodTab,
            activePeriod === 'week' && styles.activePeriodTab,
          ]}
          onPress={() => setActivePeriod('week')}
        >
          <Text
            style={[
              styles.periodTabText,
              activePeriod === 'week' && styles.activePeriodTabText,
            ]}
          >
            Week
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.periodTab,
            activePeriod === 'month' && styles.activePeriodTab,
          ]}
          onPress={() => setActivePeriod('month')}
        >
          <Text
            style={[
              styles.periodTabText,
              activePeriod === 'month' && styles.activePeriodTabText,
            ]}
          >
            Month
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.periodTab,
            activePeriod === 'year' && styles.activePeriodTab,
          ]}
          onPress={() => setActivePeriod('year')}
        >
          <Text
            style={[
              styles.periodTabText,
              activePeriod === 'year' && styles.activePeriodTabText,
            ]}
          >
            Year
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Analytics</Text>
      </View>

      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {renderPeriodTabs()}

        <View style={styles.statsRow}>
          <Card style={styles.statCard}>
            <View style={[styles.iconContainer, { backgroundColor: Colors.primary[50] }]}>
              <TrendingUp size={20} color={Colors.primary[500]} />
            </View>
            <Text style={styles.statValue}>15</Text>
            <Text style={styles.statLabel}>Active Campaigns</Text>
          </Card>
          
          <Card style={styles.statCard}>
            <View style={[styles.iconContainer, { backgroundColor: Colors.secondary[50] }]}>
              <Users size={20} color={Colors.secondary[500]} />
            </View>
            <Text style={styles.statValue}>12K</Text>
            <Text style={styles.statLabel}>Total Reach</Text>
          </Card>
        </View>

        <View style={styles.statsRow}>
          <Card style={styles.statCard}>
            <View style={[styles.iconContainer, { backgroundColor: Colors.success[50] }]}>
              <DollarSign size={20} color={Colors.success[500]} />
            </View>
            <Text style={styles.statValue}>GHS 8,500</Text>
            <Text style={styles.statLabel}>Total Earnings</Text>
          </Card>
          
          <Card style={styles.statCard}>
            <View style={[styles.iconContainer, { backgroundColor: Colors.warning[50] }]}>
              <Calendar size={20} color={Colors.warning[500]} />
            </View>
            <Text style={styles.statValue}>8</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </Card>
        </View>

        <Card style={styles.performanceCard}>
          <Text style={styles.cardTitle}>Campaign Performance</Text>
          
          <View style={styles.performanceItem}>
            <View style={styles.performanceInfo}>
              <Text style={styles.performanceName}>African Print Collection</Text>
              <Text style={styles.performanceSubtext}>GhanaWear</Text>
            </View>
            <View style={styles.performanceStats}>
              <Text style={styles.performanceValue}>4.8K</Text>
              <Text style={styles.performanceLabel}>Engagements</Text>
            </View>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.performanceItem}>
            <View style={styles.performanceInfo}>
              <Text style={styles.performanceName}>Mobile Money App</Text>
              <Text style={styles.performanceSubtext}>AccraPay</Text>
            </View>
            <View style={styles.performanceStats}>
              <Text style={styles.performanceValue}>3.2K</Text>
              <Text style={styles.performanceLabel}>Engagements</Text>
            </View>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.performanceItem}>
            <View style={styles.performanceInfo}>
              <Text style={styles.performanceName}>Food Delivery</Text>
              <Text style={styles.performanceSubtext}>KumasiEats</Text>
            </View>
            <View style={styles.performanceStats}>
              <Text style={styles.performanceValue}>2.5K</Text>
              <Text style={styles.performanceLabel}>Engagements</Text>
            </View>
          </View>
        </Card>

        <Card style={styles.platformCard}>
          <Text style={styles.cardTitle}>Platform Breakdown</Text>
          
          <View style={styles.platformsContainer}>
            <View style={styles.platformItem}>
              <View style={[styles.platformBar, { height: 120, backgroundColor: Colors.primary[500] }]} />
              <Text style={styles.platformLabel}>Instagram</Text>
            </View>
            
            <View style={styles.platformItem}>
              <View style={[styles.platformBar, { height: 90, backgroundColor: Colors.secondary[500] }]} />
              <Text style={styles.platformLabel}>TikTok</Text>
            </View>
            
            <View style={styles.platformItem}>
              <View style={[styles.platformBar, { height: 60, backgroundColor: Colors.accent[500] }]} />
              <Text style={styles.platformLabel}>YouTube</Text>
            </View>
            
            <View style={styles.platformItem}>
              <View style={[styles.platformBar, { height: 30, backgroundColor: Colors.neutral[400] }]} />
              <Text style={styles.platformLabel}>Facebook</Text>
            </View>
          </View>
        </Card>
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
    fontSize: 24,
    fontWeight: '700',
    color: Colors.neutral[900],
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  periodTabsContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.neutral[100],
    borderRadius: 8,
    padding: 4,
    marginBottom: 16,
  },
  periodTab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 6,
  },
  activePeriodTab: {
    backgroundColor: Colors.white,
  },
  periodTabText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.neutral[600],
  },
  activePeriodTabText: {
    color: Colors.primary[500],
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  statCard: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 16,
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.neutral[900],
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 13,
    color: Colors.neutral[600],
  },
  performanceCard: {
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.neutral[900],
    marginBottom: 16,
  },
  performanceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  performanceInfo: {
    flex: 1,
  },
  performanceName: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.neutral[900],
  },
  performanceSubtext: {
    fontSize: 12,
    color: Colors.neutral[600],
    marginTop: 2,
  },
  performanceStats: {
    alignItems: 'flex-end',
  },
  performanceValue: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.primary[500],
  },
  performanceLabel: {
    fontSize: 12,
    color: Colors.neutral[600],
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.neutral[200],
  },
  platformCard: {
    marginBottom: 16,
  },
  platformsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 150,
  },
  platformItem: {
    alignItems: 'center',
    width: 50,
  },
  platformBar: {
    width: 24,
    borderRadius: 4,
    marginBottom: 8,
  },
  platformLabel: {
    fontSize: 12,
    color: Colors.neutral[700],
  },
});