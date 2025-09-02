import { useNavigate } from 'react-router-dom';
import ChallengeCard from '../components/ChallengeCard';
import { LengthCard } from '../components/ChallengeCard';
import Css from '../App.css';
import StartGameBtn from '../components/StartGameBtn';
import PlayerManager from '../components/PlayerCard';

 

export default function Challenges() {
  const navigate = useNavigate();

  const routeMap = {
    "Wiki Race": "/wikirace",
    "Unique Hunt (monster)": "/unique-monster",
    "Unique Hunt (clue scroll)": "/unique-clue",
    "Red Click Race": "/red-click",
    "Inventory Puzzle": "/inventory-puzzle",
    "Item Hunt": "/item-hunt",
    "Location Guesser": "/location-guesser",
    "OSRS Trivia": "/trivia",
    "Resource Rush": "/resource-rush",
    "Boss Speedrun": "/boss-speedrun"
  };

  const handleStart = (selectedChallenge) => {
    const path = routeMap[selectedChallenge];
    if (path) navigate(path);
  };

  return (
    <div className="Challenges-title" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Challenges Page</h1>

      <div className="Players-section" style={{ margin: '20px 0' }}>
        <p>Here are all the OSRS challenges.</p>
        <PlayerManager />
      </div>

      <div className="SubBars">
        <div className="GamesBar"><p>Games</p></div>
        <div className="RandomizerBar"><p>Random Menu</p></div>
      </div>


      <div className="Cards-row">
        <ChallengeCard onStart={handleStart} />
        <LengthCard />
      </div>
    </div>
  );
}

