import React from "react";
import styled from "styled-components";
const ModalWrapper = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const ContentWrapper = styled.div`
  border: solid 2px;
  padding: 10px;
  border-radius: 10px;
  border-color: coral;
`;
const Modal = ({ children, open, onClose }) => {
  return (
    <ModalWrapper open={open} onClick={onClose}>
      <ContentWrapper onClick={(e) => e.stopPropagation()}>
        {children}
      </ContentWrapper>
    </ModalWrapper>
  );
};

export default Modal;
