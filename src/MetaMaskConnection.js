import React, { useState } from 'react';
import Web3 from 'web3';

const MetaMaskConnection = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);

  const connectToMetaMask = async () => {
    try {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3Instance.eth.getAccounts();
        setAccounts(accounts);
      } else {
        console.error('MetaMask extension not detected');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  return (
    <div>
      <button onClick={connectToMetaMask}>Connect to MetaMask</button>
      <p>Connected Accounts: {accounts.join(', ')}</p>
    </div>
  );
};

export default MetaMaskConnection;
