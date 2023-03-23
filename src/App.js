import { useEffect, useState } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((coin) => (
            <li>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
/**
 * !! CODE CHALLENGE
 * 사용자에게 가진 돈을 입력받으면 그 돈으로 얼마의 BTC를 살 수 있는지 계산하는 기능 구현
 */
export default App;
