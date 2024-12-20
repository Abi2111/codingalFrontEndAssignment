import React from 'react';
import ModalGroupInput from './ModalGroupInput';
import Textarea from './Textarea';
import ClassAborted from './ClassAborted';

export default function ModalContent({ dispatch, states }) {
  return (
    <div className="modal-body">
      <h2 className="modal-title">Select a reason to end class</h2>
      <form className="modal-form">
        <ModalGroupInput label={'Class Completed'} dispatch={dispatch} />
        <ModalGroupInput
          label={'Class interrupted/aborted'}
          dispatch={dispatch}
        />
        {states.endClassStatus === 'Class interrupted/aborted' && (
          <>
            <ClassAborted states={states} dispatch={dispatch} />
            <Textarea states={states} />
          </>
        )}
      </form>
      <div className="modal-btns">
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch({ type: 'endClass' });
          }}
        >
          End Class
        </button>
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: 'modalclose' });
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
