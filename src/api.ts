const BASE_URL = `https://api.coinpaprika.com/v1`

export async function fetchCoins() {
  return fetch(`${BASE_URL}/coins`)
    .then((response) => response.json());
}

export async function fetchCoinsInfo(coinId:string) {
  return fetch(`${BASE_URL}/coins/${coinId}`)
    .then((response) => response.json());
}

export async function fetchCoinsTickers(coinId:string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`)
    .then((response) => response.json());
}
