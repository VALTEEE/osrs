import React from 'react';
import InfoBar from '../components/InfoBar';
import VALTEEChunk from '../components/VALTEEChunk';

export default function Home() {
  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '50px', color: 'red' }}>
        <h1>Welcome to OSRS Challenge Hub</h1>
        <p style={{ color: 'rgba(250, 106, 3, 1)' }}>This is the home page.</p>
      </div>
      <div className='HomePageBoxes'>
      <InfoBar />
      <VALTEEChunk />
      </div>
    </>
  );
}