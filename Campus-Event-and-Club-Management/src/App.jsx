import { useState } from 'react'

import NeonButton from './NeonButton'; 
import './App.css'

function App() {
  const handleEventsClick = () => {
    alert('Navigating to Events...');
  };
  
  const handleClubsClick = () => {
    alert('Navigating to Clubs...');
  };

  return (
    <>
      <h1 className="neon-glow">Club Nexus</h1>
      <div className="button-container"> 
        <NeonButton text="View Events" onClick={handleEventsClick} />
        <NeonButton text="Manage Clubs" onClick={handleClubsClick} />
      </div>
    </>
  )
}

export default App