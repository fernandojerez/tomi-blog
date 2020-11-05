/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { background, spacing, surface } from '../styles/theme';
import styled from 'styled-components';

const Background = styled.div`
	background-color: ${background};
	display: flex;
	justify-content: center;
	width: 100vw;
	min-height: 100vh;
`;

const Content = styled.div`
	background-color: ${surface};
	flex-grow: 1;
	max-width: 700px;
	padding: 16px;
`;

const Layout = ({ children }) => {
	return (
		<Background>
			<Content>{children}</Content>
		</Background>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
