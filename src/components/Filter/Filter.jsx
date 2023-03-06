import React from 'react';
import './Filter.scss';

const Filter = ({ value, onChange }) => {
  return (
    <label className="filter__label">
      Filter <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
export default Filter;
