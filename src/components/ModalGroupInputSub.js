import React from 'react';

export default function ModalGroupInputSub({
  label,
  height = '22px',
  width = '22px',
  dispatch,
}) {
  const style = {
    width,
    height,
  };
  return (
    <div className="radio-group">
      <input
        type="radio"
        id={label}
        name="class-aborted"
        style={style}
        className="class-aborted"
        onChange={() => {
          dispatch({ type: label });
        }}
      />
      <label htmlFor={label} className="radio-label">
        {label}
      </label>
    </div>
  );
}
