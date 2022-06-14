import React from 'react';

const EachItem = ({ goal }) => {
  return (
    <div>
      <input type="checkbox" />
      <label>{goal?.name}</label>
    </div>
  );
};

export default EachItem;