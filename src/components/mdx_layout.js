import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import CodeBlock from './code_block';

const components = {
	pre: props => <div {...props} />,
	code: CodeBlock,
};

const MdxLayout = ({ children }) => (
	<MDXProvider components={components}>{children}</MDXProvider>
);

export default MdxLayout;
