import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  
  return (
    <div className="nav navbar">
      <section className='links'>
        <Link to='/'> About Us </Link>      
        <Link to='/contact'> Contact </Link>
      

      
        
       </section>
    </div>
  );
}