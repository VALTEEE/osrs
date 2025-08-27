import { useState } from 'react';
import StartGameBtn from './StartGameBtn';

function ChallengeCard({ onStart }) {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const challenges = [
    "Wiki Race", "Unique Hunt (monster)", "Unique Hunt (clue scroll)", "Red Click Race",
    "Inventory Puzzle", "Item Hunt", "Location Guesser", "OSRS Trivia", "Resource Rush", "Boss Speedrun"
  ];

  const handleCheckboxChange = (challenge) => {
    setSelectedChallenge(challenge); // Only allow one selection
  };

  const handleStartClick = () => {
    if (selectedChallenge) {
      onStart(selectedChallenge);
    }
  };

  return (
    <div className="ChallengeCard-container">
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {challenges.map((challenge, idx) => (
          <li key={idx}>
            <label>
              <input
                type="checkbox"
                checked={selectedChallenge === challenge}
                onChange={() => handleCheckboxChange(challenge)}
              />
              {challenge}
            </label>
          </li>
        ))}
      </ul>
      <StartGameBtn onClick={handleStartClick} />
    </div>
  );
}

function LengthCard() {
    const Lengths = [
        "1 Race", "2 Races", "3 Races", "4 Races", "5 Races", "1 Hours", "3 Hours", "1 Day", "1 Week", "1 Month"
    ];
    return (
        <div className="LengthCard-container">
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {Lengths.map((length, idx) => (
                    <li key={idx}>
                        <label>
                            <input type="checkbox" />
                            {length}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default ChallengeCard;
export { LengthCard };