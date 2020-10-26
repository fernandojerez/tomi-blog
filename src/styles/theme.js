import React, { useEffect, useMemo } from 'react';
import { createMuiTheme } from '@material-ui/core';
import { css, ThemeProvider } from 'styled-components';
import { currentTheme, init } from '../store/theme';
import {
	responsiveFontSizes,
	ThemeProvider as MaterialThemeProvider,
} from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalThemeStyles } from './global';

const primaryColor = '#ff5722';
const secondaryColor = '#ff9100';

const screenSizes = {
	small: 400,
	medium: 480,
	mediumL: 960,
	large: 1140,
};

export const above = Object.keys(screenSizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${screenSizes[label]}px) {
			${css(...args)}
		}
	`;
	return acc;
}, {});

export const background = ({ theme }) => {
	return theme.palette.background.paper;
};

export const onPrimary = ({ theme }) => {
	return theme.palette.text.primary;
};

export const spacing = args => {
	return ({ theme }) => theme.spacing.call(this, args) + 'px';
};

export const headerFontFamily = () => '"Merriweather"';
export const bodyFontFamily = () => '"Open Sans"';

export const Theme = ({ children }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		if (window) {
			const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)')
				.matches;
			dispatch(init(prefersDarkMode ? 'dark' : 'light'));
		}
	}, [dispatch]);
	const theme = useSelector(currentTheme);
	const materialTheme = useMemo(
		() =>
			responsiveFontSizes(
				createMuiTheme({
					typography: {
						fontFamily: '"Open Sans"',
					},
					palette: {
						primary: { main: primaryColor },
						secondary: { main: secondaryColor },
						type: theme === 'none' ? 'light' : 'dark',
					},
				})
			),
		[theme]
	);
	return (
		<MaterialThemeProvider theme={materialTheme}>
			<ThemeProvider theme={materialTheme}>
				<GlobalThemeStyles />
				{children}
			</ThemeProvider>
		</MaterialThemeProvider>
	);
};
