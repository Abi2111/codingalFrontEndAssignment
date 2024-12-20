import React from 'react';

export default function ModalGroupInput({
  label,
  height = '24px',
  width = '24px',
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
        name="class-status"
        style={style}
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
