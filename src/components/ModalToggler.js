import React from 'react';

export default function ModalToggler({ dispatch }) {
  return (
    <div
      className="modalToggler"
      onClick={() => {
        dispatch({ type: 'modalclose' });
      }}
    >
      <ion-icon name="close-outline"></ion-icon>
    </div>
  );
}
