import React, { useState } from 'react';
import { PagesItems } from '../DropdownItems/PagesItems';
import '../Dropdowns/Dropdown.css';
import { Link } from 'react-router-dom';

function PagesDropdown() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {PagesItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default PagesDropdown;