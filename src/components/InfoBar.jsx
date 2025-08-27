import React from 'react';
import { Link } from 'react-router-dom';

function InfoBar() {
  return (
    <div className="InfoBar">
      <p>
        Welcome to the <strong>OSRS Challenge Hub</strong> where you can play different challenges with your mates or by yourself!
        <br /><br />
        The web page is still a work in progress—new game modes and more options are coming soon.
        <br /><br />
        This site was created by <strong>VALTEE</strong> as a portfolio project. And come on... it's just fun to have minigames in OSRS!
        <br /><br /><br />
        So go ahead and head straight to the <Link to="/challenges" style={{ color: 'white', textDecoration: 'underline' }}>
        Challenges
      </Link>{' '}
      page and start playing!
      </p>
    </div>
  );
}

export default InfoBar;