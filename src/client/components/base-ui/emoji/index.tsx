import React, { CSSProperties } from 'react';
import styled from 'styled-components';

type EmojiProps = {
  value: string;
  style?: CSSProperties;
};

const EmojiSpan = styled.span`
  margin: 0 0.5ch;
`;

const Emoji: React.FC<EmojiProps> = ({
  value,
  style,
}: EmojiProps) => (
  <EmojiSpan role="img" aria-label="pensive" style={style}>
    {value}
  </EmojiSpan>
);

export default Emoji;
