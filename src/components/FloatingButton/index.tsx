import React from 'react';
import { Container } from './styles';

interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick, children}) => {
  return (
    <Container onClick={onClick}>
        <div>{children}</div>
    </Container>
  )
}

export default FloatingButton;