import React, { useEffect, useRef } from 'react';
import ModalGroupInputSub from './ModalGroupInputSub';
import Textarea from './Textarea';

export default function ClassAborted({ states, dispatch }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      if (states.endClassStatus === 'Class interrupted/aborted') {
        wrapper.style.height = `${wrapper.scrollHeight}px`;
      } else {
        wrapper.style.height = '0px';
      }
    }
  }, [states.endClassStatus]);

  return (
    <div
      className="class-aborted"
      ref={wrapperRef}
      style={{
        overflow: 'hidden',
        height: '0px',
        transition: 'height 0.3s ease',
      }}
    >
      <ModalGroupInputSub
        label={'Student didn"t show up for the class'}
        dispatch={dispatch}
      />
      <ModalGroupInputSub
        label={'Student didn"t show any interest'}
        dispatch={dispatch}
      />
      <ModalGroupInputSub
        label={'Student got disconnected'}
        dispatch={dispatch}
      />
      <ModalGroupInputSub label={'I got disconnected'} dispatch={dispatch} />
      <ModalGroupInputSub label={'Other reason'} dispatch={dispatch} />
    </div>
  );
}
