import React, { Component } from 'react';
import Portal from './Portal';
import styled from 'styled-components';

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        {on && (
          <ModalWrapper>
            <ModalWindow>
              <CloseButton onClick={toggle}>Close</CloseButton>
              <div>{children}</div>
            </ModalWindow>
          </ModalWrapper>
        )}
      </Portal>
    );
  }
}

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: teal;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWindow = styled.div`
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;
