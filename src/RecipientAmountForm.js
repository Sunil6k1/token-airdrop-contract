import React, { useState } from 'react';

const RecipientAmountForm = ({ onSubmit }) => {
  const [recipients, setRecipients] = useState('');
  const [amounts, setAmounts] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipientsArray = recipients.split(',');
    const amountsArray = amounts.split(',').map(Number);
    onSubmit(recipientsArray, amountsArray);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Recipients:</label>
        <input type="text" value={recipients} onChange={(e) => setRecipients(e.target.value)} />
      </div>
      <div>
        <label>Amounts:</label>
        <input type="text" value={amounts} onChange={(e) => setAmounts(e.target.value)} />
      </div>
      <button type="submit">Airdrop Tokens</button>
    </form>
  );
};

export default RecipientAmountForm;
