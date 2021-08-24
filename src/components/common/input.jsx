import React from 'react';

const Input = ({ name, label, value, onChange, type }) => {
  return (
    <div className='mb-3 col'>
      <label htmlFor={name} className='col-sm-2 col-form-label'>
        {label}
      </label>
      <div className='col-sm-4'>
        <input
          type={type}
          name={name}
          className='form-control'
          id={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;
