import React from 'react';
import ModalToggler from './ModalToggler';
import ModalContent from './ModalContent';

export default function Modal({ states, dispatch }) {
  return (
    <>
      {states.modalOpen && (
        <div className="modal">
          <ModalToggler dispatch={dispatch} />
          <ModalContent dispatch={dispatch} states={states} />
        </div>
      )}
    </>
  );
}
