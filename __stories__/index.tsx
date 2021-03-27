import AsyncStorage from '@react-native-community/async-storage';
import { theme } from '@react-pakistan/util-react-native-functions';
import { getStorybookUI, configure } from '@storybook/react-native';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { loadStories } from './story-loader';

import './rn-addons';

// import stories
configure(() => {
  loadStories();
}, module);

const Storybook = getStorybookUI({
  asyncStorage: AsyncStorage || null,
  host: 'localhost',
  onDeviceUI: true,
  port: 9002,
});

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
export default () => (
  <ThemeProvider theme={theme}>
    <Storybook />
  </ThemeProvider>
);
