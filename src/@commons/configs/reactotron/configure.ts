export const configureReactotron = () => {
  if (__DEV__) {
    try {
      import('./config').then(() => console.log('Reactotron Configured'));
    } catch (e) {
      console.log('Reactotron Config Error');
    }
  }
};
