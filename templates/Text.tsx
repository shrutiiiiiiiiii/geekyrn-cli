import * as React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

class TextWrapper extends React.PureComponent<TextProps> {
  public render() {
    const { style } = this.props;
    return (
      <Text
        style={[style, styles.default]}
        {...this.props}
        allowFontScaling={false}
      />
    );
  }
}

export default TextWrapper;

const styles = StyleSheet.create({
  default: {},
});
