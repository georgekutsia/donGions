import React, { useState } from 'react';

function TalentItem({ itemOption, onItemClick }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    onItemClick();
  };

  return (
    <button
      className={isSelected ? 'button-talent-item-selected' : 'button-talent-item'}
      onClick={handleClick}
    >
      {itemOption}
    </button>
  );
}

export default TalentItem;