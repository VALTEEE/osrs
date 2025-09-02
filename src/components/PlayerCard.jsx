import { useState, useRef, useEffect } from "react";
import "../App.css"; // <-- import CSS, no variable

function PlayerManager() {
  const [players, setPlayers] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [newName, setNewName] = useState("");

  const inputRef = useRef(null);

  const removePlayer = (index) => {
  const updatedPlayers = players.filter((_, i) => i !== index);
  setPlayers(updatedPlayers);
};



  const addPlayer = () => {
    if (newName.trim() !== "" && players.length < 6) {
      setPlayers([...players, { name: newName, score: 0 }]); // default score = 0
      setNewName("");
      setShowInput(false);
    }
  };

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  return (
    <div className="playerCard">
      {/* Dynamic title */}
      <h1 className="playerCard__title">
        {players.length === 0 ? "Add Players" : "Players"}
      </h1>

      {/* Player list with vertical divider */}
      <div className="playerList">
        {/* Header row */}
        <div className="playerList__row playerList__row--header">
          <div className="playerList__col playerList__col--name">Players</div>
          <div className="playerList__col playerList__col--score playerList__col--divider">Score</div>
        </div>

        {/* Player rows */}
        {players.map((player, index) => (
          <div key={index} className="playerList__row">
            <div className="playerList__col playerList__col--name">{player.name}</div>
            <div className="playerList__col playerList__col--score playerList__col--divider">
              {player.score}
              {/* Remove button */}
      <button
        onClick={() => removePlayer(index)}
        className="removeButton"
      >
        ❌
      </button>
            </div>
          </div>
        ))}
      </div>

      {/* Input field to add player */}
      {showInput && (
        <div className="addPlayerInput">
          <input
            type="text"
            // -----------------------------
            // Step 3: Attach the ref here
            // -----------------------------
            ref={inputRef}
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter player name"
            className="addPlayerInput__field"
          />
          <button onClick={addPlayer} className="addPlayerButton">
            Add
          </button>
        </div>
      )}

      {/* "+" button (disabled if max reached) */}
      {players.length < 6 && !showInput && (
        <button onClick={() => setShowInput(true)} className="plusButton">
          +
        </button>
      )}

      {/* Show message if max reached */}
      {players.length >= 6 && (
        <p className="limitMsg">Max 6 players reached</p>
      )}
    </div>
  );
}

export default PlayerManager;
