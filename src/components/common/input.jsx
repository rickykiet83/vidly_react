import React from 'react';

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className='mb-3 col'>
      <label htmlFor={name}>{label}</label>
      <div className='col-sm-4'>
        <input {...rest} name={name} className='form-control' id={name} />
        {error && <div className='alert alert-danger mt-1'>{error}</div>}
      </div>
    </div>
  );
};

export default Input;
