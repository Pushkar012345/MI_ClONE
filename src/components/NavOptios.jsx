import React, { useState, useEffect } from 'react';
import NavCard from './NavCard.jsx';
import '../styles/NavOptios.css'; // Make sure to import the correct stylesheet
import { useLocation } from 'react-router-dom'; // Import useLocation hook from react-router-dom

const NavOptions = ({ miPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home, audio, accessories }) => {
  const [activeLink, setActiveLink] = useState('');

  const location = useLocation(); // Get the current location using useLocation hook

  useEffect(() => {
    setActiveLink(location.pathname); // Update activeLink state with the current pathname
  }, [location.pathname]); // Re-run effect whenever pathname changes

  return (
    <div className="navOptions">git remote set-url origin https://github.com/Pushkar012345/MI_ClONE.git

      {activeLink === '/miPhones' &&
        miPhones.map(item => <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />)}

      {activeLink === '/redmiPhones' &&
        redmiPhones.map(item => <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />)}

      {activeLink === '/tv' &&
        tv.map(item => <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />)}

      {activeLink === '/laptops' &&
        laptop.map(item => <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />)}

      {activeLink === '/lifestyle' &&
        fitnessAndLifeStyle.map(item => (
          <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        ))}

      {activeLink === '/home' &&
        home.map(item => <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />)}

      {activeLink === '/audio' &&
        audio.map(item => <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />)}

      {activeLink === '/accessories' &&
        accessories.map(item => <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />)}
    </div>
  );
};

export default NavOptions;
