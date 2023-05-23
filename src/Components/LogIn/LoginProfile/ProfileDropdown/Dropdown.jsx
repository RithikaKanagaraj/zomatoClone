import React from 'react';
import './Dropdown.css';

function Dropdown() {
  const list = ["Profile", "Notification", "Bookmarks", "Reviews", "Network", "Find Friends", "Settings", "Logout"];

  return (
    <div className='dropdown-wrapper'>
      {list.map((item, index) => (
        <div className='dropdown-categories' key={index}>{item}</div>
      ))}
    </div>
  );
}

export default Dropdown;
