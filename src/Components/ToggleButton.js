

import React, { useState } from 'react';
import Switch from 'react-switch';

const ToggleSwitch = ({isChecked, setIsChecked}) => {
  

  const handleChange = (checked) => {
    setIsChecked(checked);
  };

  return (
    <div>
      <Switch
        onChange={handleChange}
        checked={isChecked}
        height={24}
        width={48}
        onColor="#86d3ff"
        offColor="#f0f0f0"
        checkedIcon={false}
        uncheckedIcon={false}
        activeBoxShadow="0 0 2px 3px #86d3ff"
      />
      <p className='text-theme-green-1 font-bold'>EEG Status: {isChecked ? 'ON' : 'OFF'}.</p>
    </div>
  );
};

export default ToggleSwitch;
