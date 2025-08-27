import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/index';
import Challenges from './pages/challenges';
import Leaderboard from './pages/leaderboard';
import BossSpeedrun from './pages/BossSpeedrun';
import IPuzzle from './pages/IPuzzle';
import ItemHunt from './pages/ItemHunt';
import LocationGuesser from './pages/LocationGuesser';
import OSRSTrivia from './pages/OSRSTrivia';
import RCR from './pages/rcr';
import ResourceRush from './pages/ResourceRush';
import UniqueHuntM from './pages/UniqueHuntM';
import UniqueHuntC from './pages/UniqueHuntC';
import Wikirace from './pages/wikirace';


export default function App() {
  return (
    <Router>
      {/* Navigation bar */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 50px',
        backgroundColor: '#333',
        color: 'white',
        fontSize: '18px'
      }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/challenges" style={{ color: 'white', textDecoration: 'none' }}>Challenges</Link>
        <Link to="/leaderboard" style={{ color: 'white', textDecoration: 'none' }}>Leaderboard</Link>
      </nav>

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/wikirace" element={<Wikirace />} />
        <Route path="/unique-monster" element={<UniqueHuntM />} />
        <Route path="/unique-clue" element={<UniqueHuntC />} />
        <Route path="/red-click" element={<RCR />} />
        <Route path="/inventory-puzzle" element={<IPuzzle />} />
        <Route path="/item-hunt" element={<ItemHunt />} />
        <Route path="/location-guesser" element={<LocationGuesser />} />
        <Route path="/trivia" element={<OSRSTrivia />} />
        <Route path="/resource-rush" element={<ResourceRush />} />
        <Route path="/boss-speedrun" element={<BossSpeedrun />} />
        </Routes>
      </Router>
  );
}
