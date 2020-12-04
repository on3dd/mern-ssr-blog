import React, { CSSProperties } from 'react';
import styled from 'styled-components';

type EmojiProps = {
  value: string;
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
};

const EmojiSpan = styled.span`
  margin: 0 0.5ch;
`;

const Emoji: React.FC<EmojiProps> = ({
  value,
  style,
  ariaLabel = '',
  className = '',
}: EmojiProps) => (
  <EmojiSpan
    role="img"
    style={style}
    aria-label={ariaLabel}
    className={className}
  >
    {value}
  </EmojiSpan>
);

export default Emoji;
