import React from 'react';
import {
  View,
  TextInput,
  Text,
  TextInputProps,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Colors } from '@styles/colors';

interface RegisterTextInputProps extends TextInputProps {
  iconRight?: {
    visible: boolean;
    onPress: () => void;
  };
  errorText?: string;
}
interface RegisterTextInputProps extends TextInputProps {
  iconRight?: {
    visible: boolean;
    onPress: () => void;
  };
}

const RegisterTextInput = ({ iconRight, ...props }: RegisterTextInputProps) => {
  return (
    <View style={{ position: 'relative', marginBottom: 12 }}>
      <TextInput
        {...props}
        style={[styles.input, props.style]}
        placeholderTextColor={Colors.textPlaceholder}
      />
      {iconRight && (
        <TouchableOpacity
          onPress={iconRight.onPress}
          style={{ position: 'absolute', right: 12, top: 12 }}
        >
          <Text style={{ color: Colors.primary }}>
            {iconRight.visible ? '❌' : '✅'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 12,
    //marginBottom: 12,
    fontSize: 16,
  },
});

export default RegisterTextInput;
