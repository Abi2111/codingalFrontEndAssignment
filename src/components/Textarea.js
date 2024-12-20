import React, { useEffect, useRef } from 'react';

export default function Textarea({ states }) {
  const wrapperRef = useRef(null);
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      if (states.otherReason) {
        wrapper.style.height = `${wrapper.scrollHeight}px`;
      } else {
        wrapper.style.height = '0px';
      }
    }
  }, [states.otherReason]);
  return (
    <>
      {states.otherReason && (
        <div className="textarea-wrapper" ref={wrapperRef}>
          <textarea
            className="textarea active"
            placeholder="Type here"
            rows={7}
          ></textarea>
        </div>
      )}
    </>
  );
}
