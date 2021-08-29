import React from 'react';

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className='mb-3 col'>
      <label htmlFor={name}>{label}</label>
      <div className='col-sm-4'>
        <select name={name} id={name} {...rest} className='form-control'>
          <option value='' />
          {options.map((option) => (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          ))}
        </select>
        {error && <div className='alert alert-danger mt-1'>{error}</div>}
      </div>
    </div>
  );
};

export default Select;
