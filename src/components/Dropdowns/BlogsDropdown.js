import React, { useState } from 'react';
import { BlogsItems } from '../DropdownItems/BlogsItems';
import '../Dropdowns/Dropdown.css';
import { Link } from 'react-router-dom';

function BlogsDropdown() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {BlogsItems.map((item, index) => {
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

export default BlogsDropdown;