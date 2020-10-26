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
  margin: 0;
  padding: 0;
}

html {
  height: 100%;  
}

body {    
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
  margin-bottom: ${props => spacing(1)(props)};
  font-family: ${props => headerFontFamily(props)};
}
`;
