import { useTheme } from '@/contexts/theme-context';
import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
    ViewStyle
} from 'react-native';

interface ThemedButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'outline';
}

export function ThemedButton({ 
  style, 
  variant = 'primary',
  children,
  ...props 
}: ThemedButtonProps) {
  const { theme } = useTheme();
  
  const variantStyles: ViewStyle = 
    variant === 'outline'
      ? {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: theme.colors.border,
        }
      : {
          backgroundColor: theme.colors.primary,
        };

  return (
    <TouchableOpacity
      style={[styles.button, variantStyles, style]}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});