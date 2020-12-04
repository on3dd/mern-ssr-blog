import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

type PostCodeBlockProps = {
  value: string;
  language?: string;
};

const PostCodeBlock: React.FC<PostCodeBlockProps> = ({
  value,
  language,
}: PostCodeBlockProps) => (
  <SyntaxHighlighter language={language} style={githubGist}>
    {value}
  </SyntaxHighlighter>
);

export default PostCodeBlock;
