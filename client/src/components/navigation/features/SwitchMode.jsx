import React from 'react';

const SwitchMode = () => {
  return (
    <>
      <input type="checkbox" name="switchmode" id="switch"/>
      <label htmlFor="switchmode" className="switch row col-1">
          <span className="on"></span>
          <span className="off"></span>
      </label>
    </>
  )
}

export default SwitchMode;
