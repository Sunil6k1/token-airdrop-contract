import React from 'react';

const AirdropExecution = ({ onAirdrop }) => {
  const handleAirdrop = () => {
    onAirdrop();
  };

  return (
    <div>
      <button onClick={handleAirdrop}>Execute Airdrop</button>
    </div>
  );
};

export default AirdropExecution;
