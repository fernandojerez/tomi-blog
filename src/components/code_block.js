import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import styled from 'styled-components';
import { spacing } from '../styles/theme';

const CodeBlockStyle = styled.pre`
	padding: ${spacing(2)};
	margin-top: ${spacing(1)};
	margin-bottom: ${spacing(1)};
`;

export default ({ children, className, live }) => {
	const language = className.replace(/language-/, '');
	return (
		<Highlight {...defaultProps} code={children} language={language}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<CodeBlockStyle className={className} style={style}>
					{tokens.map((line, i) => {
						if (line.length === 1 && line[0].empty) {
							return <pre key={i} />;
						}
						return (
							<div key={i} {...getLineProps({ line, key: i })}>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token, key })} />
								))}
							</div>
						);
					})}
				</CodeBlockStyle>
			)}
		</Highlight>
	);
};
