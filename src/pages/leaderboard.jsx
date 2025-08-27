import React from 'react';
import LeaderboardBox from '../components/LeaderboardBox';

export default function Leaderboard() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Leaderboard Page</h1>
      <p>Check the fastest completions here.</p>
      <LeaderboardBox />
    </div>
    
  );
}
