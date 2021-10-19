import React from 'react';

import {
  Container,
  ModalDiv,
  Title,
  ModalContent,
  CLoseIcon,
} from './styles';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const GenericModal: React.FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
  children,
}) => {
  const outsideRef = React.useRef(null);

  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <Container ref={outsideRef} onClick={handleCloseOnOverlay}>
      <ModalDiv>
        <CLoseIcon onClick={onClose} />
        <Title>
          <h1>{title}</h1>
        </Title>
        <ModalContent>
            {children}
        </ModalContent>
        
      </ModalDiv>
    </Container>
  ) : null;
};

export default GenericModal;
