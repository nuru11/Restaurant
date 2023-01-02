import React from 'react';

import PlateData from '../PlateData';

import Plate from './plate/Plate';

const Parent = ({ handleClick }) => {
  return (
    <div>
      <div id="palte" className="plate">
        <h className="plate-header">popular plates</h>
        <div className="parent-item">
          {PlateData.map((p) => (
            <Plate key={p.id} p={p} handleClick={handleClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Parent;
