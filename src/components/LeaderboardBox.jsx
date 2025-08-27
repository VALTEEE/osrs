function LeaderboardBox() {
  return (
    <div className="rs-leaderboard">
      <div className="rs-header">🏆 Leaderboard</div>
      <div className="rs-row rs-header-row">
        <span className="rs-name">Player</span>
        <span className="rs-time">Time</span>
      </div>
      <div className="rs-row">
        <span className="rs-name">No Backend set up</span>
        <span className="rs-time">1:00:00</span>
      </div>
    </div>
  );
}

export default LeaderboardBox;