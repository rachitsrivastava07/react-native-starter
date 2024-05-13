import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Button} from '@commons/components';
import {COMMON_STYLES} from '@commons/styles';
import {HomeProps} from '@app/types';

const HomeComponent = ({navigation}: HomeProps): React.JSX.Element => {
  const onButtonPress = React.useCallback(() => {
    console.log('Button Pressed');
    navigation.navigate('Todos');
  }, [navigation]);

  return (
    <View style={COMMON_STYLES.p24}>
      <Text style={styles.heading}>Hello World -- RN</Text>
      <Button
        title="Test Button"
        onPress={onButtonPress}
        style={COMMON_STYLES.mt24}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '700',
  },
});

const Home = React.memo(HomeComponent);
export {Home};
