import { useTheme } from '@/contexts/theme-context';
import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export function ThemedTextInput(props: TextInputProps) {
  const { theme } = useTheme();
  
  return (
    <TextInput
      placeholderTextColor={theme.colors.textSecondary}
      style={[
        styles.input,
        { 
          color: theme.colors.text,
          backgroundColor: theme.colors.backgroundSecondary,
          borderColor: theme.colors.border,
        }
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
});