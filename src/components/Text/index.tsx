import React from 'react';
import type {FC, ComponentProps} from 'react';
import {StyleSheet, Text} from 'react-native';
import Theme from '~/styles/theme';

export type TextProps = ComponentProps<typeof Text>;

export const TextRegular: FC<TextProps> = ({...props}) => {
  return <Text style={styles.textRegular} {...props} />;
};

export const TextMedium: FC<TextProps> = ({...props}) => {
  return <Text style={styles.textMedium} {...props} />;
};

const styles = StyleSheet.create({
  textRegular: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: Theme.fontSize(14),
    color: Theme.colors.black,
    lineHeight: Theme.fontSize(20),
  },
  textMedium: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: Theme.fontSize(16),
    color: Theme.colors.black,
    lineHeight: Theme.fontSize(23),
    fontWeight: '500',
  },
});
