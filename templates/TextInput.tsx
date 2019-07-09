import * as React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';

const TextInputWrapper = React.forwardRef(
  (props: TextInputProps, ref: React.Ref<TextInput>) => {
    const { style } = props;
    return (
      <TextInput
        ref={ref}
        style={[style, styles.default]}
        {...props}
        underlineColorAndroid={'transparent'}
        allowFontScaling={false}
      />
    );
  }
);

TextInputWrapper.displayName = 'TextInput';

export default TextInputWrapper;

const styles = StyleSheet.create({
  default: {},
});
