import { createGlobalStyle } from 'styled-components';
import {
	background,
	bodyFontFamily,
	headerFontFamily,
	onPrimary,
	spacing,
} from './theme';

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

html {
  height: 100%;  
}

body {    
  margin: 0;
  padding: 0;
  height: 100%;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
}

:root {
  --device-full-height: 100vh
}
`;

export const GlobalThemeStyles = createGlobalStyle`
* {
  font-family: ${props => bodyFontFamily(props)};
  color: ${props => onPrimary(props)};
}

body {    
  background-color: ${props => background(props)}
}

h1, h2, h3, h4, h5, h6 {
  margin-bottom: ${props => spacing(2)(props)};
  margin-top: ${props => spacing(2)(props)};
  font-family: ${props => headerFontFamily(props)};
}
`;
