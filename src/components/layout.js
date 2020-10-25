/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { background } from '../styles/theme';
import styled from 'styled-components';

const Background = styled.div`
	background-color: ${background};
	width: 100vw;
	height: 100vh;
`;

const Layout = ({ children }) => {
	return <Background>{children}</Background>;
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
