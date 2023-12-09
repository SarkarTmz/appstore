import React from 'react';
import { useDatabase } from '../../state/state';

const Test = () => {
  const { database, setDatabase, selectedItem, selectItem } = useDatabase();

  // Handle click on an item
  const handleClick = (itemId) => {
    selectItem(itemId);
  };

  // Render the list of items
  const renderItems = () => {
    return database.map((item) => (
      <div className="games-card" key={item.id} onClick={() => handleClick(item.id)}>
        <img src={item.image} alt={item.title} />
        <p>{item.title}</p>
      </div>
    ));
  };

  // Render details for the selected item
  const renderSelectedItem = () => {
    if (!selectedItem) {
      return null;
    }

    return (
      <div className="selected-item">
        <img src={selectedItem.image} alt={selectedItem.title} />
        <p>{selectedItem.title}</p>
        {/* Add more details as needed */}
      </div>
    );
  };

  return (
    <div>
      <div className="items-list">{renderItems()}</div>
      <div className="selected-item-details">{renderSelectedItem()}</div>
    </div>
  );
};

export default Test;
