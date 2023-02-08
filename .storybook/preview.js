import { ThemeProvider } from '@emotion/react';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';

// pass ThemeProvider and array of your themes to decorator
addDecorator(
  withThemes(ThemeProvider, [
    {
      radii: {
        S: '0.25rem',
        M: '0.5rem',
        L: '1rem',
      },
      colors: {
        accent: '#54f',
        foreground: '#fff',
        background: '#eee'
      },
      space: {
        S: '0.25rem',
        M: '0.5rem',
        L: '1rem',
      },
    },
  ])
);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
