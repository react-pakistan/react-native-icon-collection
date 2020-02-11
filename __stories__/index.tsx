/* eslint-disable global-require, import/no-default-export */

import React from 'react';
import { getStorybookUI, configure } from '@storybook/react-native';
import { ThemeProvider } from 'styled-components';
import { loadStories } from './story-loader';
import { theme } from '@react-pakistan/react-commons-collection/theme';

import './rn-addons';

// import stories
configure(() => {
  loadStories();
}, module);

// const STORYBOOK_START = true;

// export default STORYBOOK_START
// ? require('./storybook').default
// : require('./src/App').default;

const Storybook = getStorybookUI({ port: 9002, host: 'localhost', onDeviceUI: true });

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
export default () => (
  <ThemeProvider theme={theme}>
    <Storybook />
  </ThemeProvider>
);
