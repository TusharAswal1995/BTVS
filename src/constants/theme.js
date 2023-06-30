import {DarkTheme, DefaultTheme} from '@react-navigation/native';

export const theme = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#EB1F3C',
      primarySoft: '#fdf4f5',
      secondary: '#29434E',
      error: '#D32F2F',

      //Border Color
      border: '#BABABA',

      //Shadow color
      shadowColor: '#000000',

      //text color
      textBlack: '#1F151D',
      textGrey: '#595959',

      //Background Color
      black: '#000000',
      white: '#FFFFFF',
      screenBackground: '#eeeeee',
      transparent: 'transparent',

      //Special Color
      gold: '#FBCD28',
      silver: '#cccccc',
      bronze: '#E6AC81',
      other: '#CBDBDB',
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#EB1F3C',
      primarySoft: '#3d2a2d',
      secondary: '#29434E',
      error: '#D32F2F',

      //Border Color
      border: '#000000',

      //Shadow color
      shadowColor: '#1E293B',

      //text color
      textBlack: '#ffffff',
      textGrey: '#94a3b8',

      //Background Color
      black: '#ffffff',
      white: '#0F172A',
      screenBackground: '#1E293B',
      transparent: 'transparent',

      //Special Color
      gold: '#FBCD28',
      silver: '#cccccc',
      bronze: '#E6AC81',
      other: '#CBDBDB',
    },
  },
};
