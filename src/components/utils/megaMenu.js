import React from 'react';
import { Link } from 'react-router-dom';
// import { Typography, Card, CardContent, List, ListItem } from '@mui/material';

export default function SimpleMenuNav() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <div className="flex justify-center w-3/4 items-center">
        <div className="w-full flex-col justify-center p-2">
          <ul className='flex justify-between items-center'>
            <Link to={"/"}><li className="mb-2 font-semibold">3 pages</li></Link>
            <Link to={"/"}><li className="mb-2 font-semibold">Portfolios</li></Link>
            <Link to={"/"}><li className="mb-2 font-semibold">Services</li></Link>
            <Link to={"/"}><li className="mb-2 font-semibold">About Us</li></Link>
            <Link to={"/"}><li className="mb-2 font-semibold">Contact</li></Link>
          </ul>
        </div>
      </div>
  );
}