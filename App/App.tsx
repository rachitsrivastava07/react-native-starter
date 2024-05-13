import * as React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {configureReactotron} from '@commons/configs';
import {COMMON_STYLES} from '@commons/styles';
import {useMount} from '@commons/hooks';
import {AppNavigationStack} from './AppNavigation';

function App(): React.JSX.Element {
  useMount(configureReactotron);

  return (
    <SafeAreaView style={COMMON_STYLES.flexOne}>
      <StatusBar barStyle="light-content" />
      <AppNavigationStack />
    </SafeAreaView>
  );
}

export default App;
