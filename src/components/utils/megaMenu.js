import React from 'react';
import { Link } from 'react-router-dom';
import ServicesLink from './ServicesLink';
// import { Typography, Card, CardContent, List, ListItem } from '@mui/material';

export default function SimpleMenuNav() {



  return (
      <div className="flex justify-center w-3/4 items-center">
        <div className="w-full flex-col justify-center p-2">
          <ul className='flex justify-between items-center'>
            <Link to={"/about"} className='pt-2'><li className="mb-2 hover:text-indigo-400 transition duration-300 ease-in-out font-semibold text-white text-md font-family-poppins">About Us</li></Link>
            <ServicesLink />
            <Link to={"/portfolio"} className='pt-2 '><li className="mb-2 hover:text-indigo-400 transition duration-300 ease-in-out font-semibold text-white text-md font-family-poppins">Portfolio</li></Link>
            <Link to={"/contact"} className='pt-2 '><li className="mb-2 hover:text-indigo-400 transition duration-300 ease-in-out font-semibold text-white text-md font-family-poppins">Contact</li></Link>
          </ul>
        </div>
      </div>
  );
}