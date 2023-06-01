import React, { useState } from 'react';

function TalentItem({ itemOption, onItemClick, aver, asi }) {
  const [isSelected, setIsSelected] = useState(false);
  const [lineHorizontal, setLineHorizontal] = useState(aver)
  const [lineVertical, setLineVertical] = useState(asi)
  const handleClick = () => {
    setIsSelected(!isSelected);
    onItemClick();
  };
  return (
    <div>
    {lineVertical && <div className='line-conections'/>}
    {lineHorizontal && <div className='line-conections-horizontal'/> }
    <button className={isSelected ? 'button-talent-item-selected' : 'button-talent-item'} onClick={handleClick}>{itemOption}</button>
    </div>
  );
}

export default TalentItem;