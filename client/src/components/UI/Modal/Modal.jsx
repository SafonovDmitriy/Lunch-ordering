import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
  top: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  backdrop-filter: blur(3px);
`;
const ContentWrapper = styled.div`
  border: solid 2px;
  padding: 50px;
  border-radius: 10px;
  border-color: #c8c7ca;
  background-color: whitesmoke;
  box-shadow: 2px 2px 5px 2px #d2d2d2;
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
Modal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};
export default Modal;
