import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Leaderboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/leaderboard')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;


// import React, { useState, useEffect } from 'react';

// function CopyTradingPlatform() {
//   const [traders, setTraders] = useState([]);
//   const [selectedTrader, setSelectedTrader] = useState(null);
//   const [balance, setBalance] = useState(0);

//   // Fetch list of traders from backend
//   useEffect(() => {
//     fetch('/api/traders')
//       .then(response => response.json())
//       .then(data => setTraders(data))
//       .catch(error => console.log(error));
//   }, []);

//   // Handle selection of a trader
//   function handleSelectTrader(trader) {
//     setSelectedTrader(trader);
//     setBalance(trader.balance);
//   }

//   // Handle copying of trades
//   function handleCopyTrades() {
//     if (selectedTrader) {
//       fetch('/api/copy-trades', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           traderId: selectedTrader.id
//         })
//       })
//       .then(response => response.json())
//       .then(data => setBalance(data.balance))
//       .catch(error => console.log(error));
//     }
//   }

//   return (
//     <div>
//       <h1>Copy Trading Platform</h1>
//       <p>Select a trader to copy trades from:</p>
//       <ul>
//         {traders.map(trader => (
//           <li key={trader.id} onClick={() => handleSelectTrader(trader)}>
//             {trader.name}
//           </li>
//         ))}
//       </ul>
//       {selectedTrader && (
//         <div>
//           <p>Selected trader: {selectedTrader.name}</p>
//           <p>Balance: ${balance}</p>
//           <button onClick={handleCopyTrades}>Copy Trades</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CopyTradingPlatform;
