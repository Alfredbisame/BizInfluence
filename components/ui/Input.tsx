import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Colors from '@/constants/Colors';
import { Eye, EyeOff } from 'lucide-react-native';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  secureTextEntry?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad';
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
  onSubmitEditing?: () => void;
  blurOnSubmit?: boolean;
}

export function Input({
  value,
  onChangeText,
  placeholder,
  label,
  error,
  disabled = false,
  secureTextEntry = false,
  multiline = false,
  numberOfLines = 1,
  style,
  inputStyle,
  leftIcon,
  rightIcon,
  autoCapitalize,
  keyboardType,
  returnKeyType,
  onSubmitEditing,
  blurOnSubmit,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const getBorderColor = () => {
    if (error) return Colors.error[500];
    if (isFocused) return Colors.primary[500];
    return Colors.neutral[300];
  };

  const renderPasswordToggle = () => {
    if (!secureTextEntry) return null;
    
    return (
      <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconRight}>
        {showPassword ? (
          <EyeOff size={20} color={Colors.neutral[600]} />
        ) : (
          <Eye size={20} color={Colors.neutral[600]} />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: getBorderColor(),
            backgroundColor: disabled ? Colors.neutral[100] : Colors.white,
          },
          multiline && styles.multilineContainer,
        ]}
      >
        {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
        
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={Colors.neutral[500]}
          editable={!disabled}
          secureTextEntry={secureTextEntry && !showPassword}
          multiline={multiline}
          numberOfLines={multiline ? numberOfLines : undefined}
          style={[
            styles.input,
            leftIcon ? styles.inputWithLeftIcon : undefined,
            (rightIcon || secureTextEntry) ? styles.inputWithRightIcon : undefined,
            multiline && Platform.OS === 'ios' ? { height: 24 * numberOfLines } : undefined,
            multiline ? styles.multilineInput : undefined,
            inputStyle,
          ]}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={blurOnSubmit}
        />
        
        {renderPasswordToggle() || (rightIcon && <View style={styles.iconRight}>{rightIcon}</View>)}
      </View>
      
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.neutral[700],
    marginBottom: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  multilineContainer: {
    alignItems: 'flex-start',
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: Colors.neutral[900],
  },
  multilineInput: {
    paddingTop: 12,
    textAlignVertical: 'top',
  },
  inputWithLeftIcon: {
    paddingLeft: 8,
  },
  inputWithRightIcon: {
    paddingRight: 8,
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
  errorText: {
    fontSize: 12,
    color: Colors.error[500],
    marginTop: 4,
  },
});