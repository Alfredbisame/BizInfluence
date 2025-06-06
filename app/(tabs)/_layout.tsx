import React from 'react';
import { Tabs } from 'expo-router';
import { View, StyleSheet, Platform } from 'react-native';
import { 
  Home, 
  Compass, 
  Plus, 
  TrendingUp, 
  UserCircle2
} from 'lucide-react-native';
import { BlurView } from 'expo-blur';
import Colors from '@/constants/Colors';

// Simple animated tab icon component
const TabIcon = ({ 
  IconComponent, 
  color, 
  size, 
  focused, 
  isCampaignTab = false 
}: {
  IconComponent: any;
  color: string;
  size: number;
  focused: boolean;
  isCampaignTab?: boolean;
}) => {
  if (isCampaignTab) {
    return (
      <View style={[
        styles.campaignIconContainer,
        { 
          backgroundColor: focused ? Colors.secondary[500] : Colors.neutral[100],
          transform: [{ scale: focused ? 1.1 : 1 }]
        }
      ]}>
        <IconComponent 
          size={focused ? 24 : 20} 
          color={focused ? Colors.white : color} 
          strokeWidth={2.5}
        />
      </View>
    );
  }

  return (
    <View style={[
      styles.iconContainer,
      { 
        backgroundColor: focused ? Colors.primary[500] : 'transparent',
        transform: [{ scale: focused ? 1.05 : 1 }]
      }
    ]}>
      <IconComponent 
        size={focused ? 22 : 20} 
        color={focused ? Colors.white : color}
        strokeWidth={focused ? 2.5 : 2}
      />
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary[600],
        tabBarInactiveTintColor: Colors.neutral[500],
        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
          left: 20,
          right: 20,
          elevation: 8,
          backgroundColor: Platform.OS === 'ios' ? 'rgba(255, 255, 255, 0.95)' : Colors.white,
          borderRadius: 25,
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          paddingHorizontal: 10,
          borderTopWidth: 0,
          shadowColor: Colors.neutral[900],
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.15,
          shadowRadius: 20,
          borderWidth: 1,
          borderColor: Colors.neutral[100],
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: 'Poppins-SemiBold',
          marginTop: 4,
        },
        tabBarItemStyle: {
          paddingVertical: 5,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <TabIcon 
              IconComponent={Home} 
              color={color} 
              size={size} 
              focused={focused} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: 'Discover',
          tabBarIcon: ({ color, size, focused }) => (
            <TabIcon 
              IconComponent={Compass} 
              color={color} 
              size={size} 
              focused={focused} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="campaigns"
        options={{
          title: 'Create',
          tabBarIcon: ({ color, size, focused }) => (
            <TabIcon 
              IconComponent={Plus} 
              color={color} 
              size={size} 
              focused={focused} 
              isCampaignTab={true}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: 'Analytics',
          tabBarIcon: ({ color, size, focused }) => (
            <TabIcon 
              IconComponent={TrendingUp} 
              color={color} 
              size={size} 
              focused={focused} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size, focused }) => (
            <TabIcon 
              IconComponent={UserCircle2} 
              color={color} 
              size={size} 
              focused={focused} 
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    minWidth: 32,
    minHeight: 32,
  },
  campaignIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: 40,
    height: 40,
    marginTop: -5,
    shadowColor: Colors.secondary[500],
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
});
