import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Colors from '@/constants/Colors';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  onPress,
  title,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  style,
  textStyle,
  leftIcon,
  rightIcon,
}: ButtonProps) {
  const getBackgroundColor = () => {
    if (disabled) return Colors.neutral[300];
    
    switch (variant) {
      case 'primary':
        return Colors.primary[500];
      case 'secondary':
        return Colors.secondary[500];
      case 'outline':
      case 'ghost':
        return Colors.transparent;
      default:
        return Colors.primary[500];
    }
  };

  const getBorderColor = () => {
    if (disabled) return Colors.neutral[300];
    
    switch (variant) {
      case 'outline':
        return Colors.primary[500];
      default:
        return 'transparent';
    }
  };

  const getTextColor = () => {
    if (disabled) return Colors.neutral[600];
    
    switch (variant) {
      case 'primary':
        return Colors.white;
      case 'secondary':
        return Colors.white;
      case 'outline':
        return Colors.primary[500];
      case 'ghost':
        return Colors.primary[500];
      default:
        return Colors.white;
    }
  };

  const buttonSizeStyle = () => {
    switch (size) {
      case 'sm':
        return styles.buttonSm;
      case 'lg':
        return styles.buttonLg;
      default:
        return styles.buttonMd;
    }
  };

  const textSizeStyle = () => {
    switch (size) {
      case 'sm':
        return styles.textSm;
      case 'lg':
        return styles.textLg;
      default:
        return styles.textMd;
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      style={[
        styles.button,
        buttonSizeStyle(),
        {
          backgroundColor: getBackgroundColor(),
          borderColor: getBorderColor(),
          borderWidth: variant === 'outline' ? 1 : 0,
        },
        style,
      ]}
    >
      <View style={styles.contentContainer}>
        {leftIcon && !loading && <View style={styles.iconLeft}>{leftIcon}</View>}
        
        {loading ? (
          <ActivityIndicator 
            size="small" 
            color={variant === 'outline' || variant === 'ghost' ? Colors.primary[500] : Colors.white} 
          />
        ) : (
          <Text 
            style={[
              styles.text, 
              textSizeStyle(), 
              { color: getTextColor() },
              textStyle
            ]}
          >
            {title}
          </Text>
        )}
        
        {rightIcon && !loading && <View style={styles.iconRight}>{rightIcon}</View>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSm: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonMd: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  buttonLg: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
  textSm: {
    fontSize: 14,
  },
  textMd: {
    fontSize: 16,
  },
  textLg: {
    fontSize: 18,
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});