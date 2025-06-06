import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import Colors from '@/constants/Colors';

interface CardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  elevation?: 0 | 1 | 2 | 3;
  noPadding?: boolean;
}

export function Card({ 
  children, 
  style, 
  elevation = 1,
  noPadding = false,
}: CardProps) {
  const getElevationStyle = () => {
    switch (elevation) {
      case 0:
        return styles.elevation0;
      case 2:
        return styles.elevation2;
      case 3:
        return styles.elevation3;
      case 1:
      default:
        return styles.elevation1;
    }
  };

  return (
    <View 
      style={[
        styles.card, 
        getElevationStyle(),
        noPadding ? null : styles.padding,
        style
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    overflow: 'hidden',
  },
  padding: {
    padding: 16,
  },
  elevation0: {
    borderWidth: 1,
    borderColor: Colors.neutral[200],
  },
  elevation1: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 2,
  },
  elevation2: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  elevation3: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },
});