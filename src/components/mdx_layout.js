import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const MdxLayout = ({ children }) => <MDXProvider>{children}</MDXProvider>;

export default MdxLayout;
