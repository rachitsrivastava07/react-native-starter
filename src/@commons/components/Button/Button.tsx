import * as React from 'react';
import {Pressable, Text} from 'react-native';

import {ButtonProps} from './types';
import styles from './styles';

const ButtonComponent = (props: ButtonProps) => {
  return (
    <Pressable
      style={[styles.container, props.style]}
      onPressOut={props.onPress}>
      <Text style={styles.btnText}>{props.title}</Text>
    </Pressable>
  );
};

const Button = React.memo(ButtonComponent);
export {Button};
