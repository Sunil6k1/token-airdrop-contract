import React, { useState } from 'react';
import AirdropExecution from './AirdropExecution';
import MetaMaskConnection from './MetaMaskConnection';
import RecipientAmountForm from './RecipientAmountForm';

const App = () => {
  const [airdropData, setAirdropData] = useState(null);

  const handleAirdrop = (recipients, amounts) => {
    setAirdropData({ recipients, amounts });
  };

  const executeAirdrop = () => {
    // Implement airdrop execution logic using Web3 and the airdrop data
    console.log('Executing airdrop:', airdropData);
  };

  return (
    <div>
      <h1>Token Airdrop</h1>
      <MetaMaskConnection />
      <RecipientAmountForm onSubmit={handleAirdrop} />
      {airdropData && <AirdropExecution onAirdrop={executeAirdrop} />}
    </div>
  );
};

export default App;
