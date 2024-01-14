import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ paths }) => {
  return (
    <div>
      {paths.map((path, index) => (
        <span key={index}>
          <Link className='font-normal text-[15px]' to={path.url}>{path.label}</Link>
          {index < paths.length - 1 && <span className='text-[#6C7587]'> / </span>}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;