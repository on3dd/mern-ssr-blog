import React from 'react';
import styled from 'styled-components';

type EmojiProps = {
  value: string;
};

const EmojiSpan = styled.span`
  margin: 0 0.5ch;
`;

const Emoji: React.FC<EmojiProps> = ({
  value,
}: EmojiProps) => (
  <EmojiSpan role="img" aria-label="pensive">
    {value}
  </EmojiSpan>
);

export default Emoji;
