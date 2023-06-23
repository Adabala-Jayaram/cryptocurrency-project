import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {cryptoCurrencyList} = props
  return (
    <div className="crypto-currency-card-container">
      <h1 className="crypto-currency-title">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="crypto-currency-img"
      />
      <div className="crypto-currency-list-container">
        <div className="crypto-currency-header">
          <h1 className="coin-type-title">Coin Type</h1>
          <div className="usd-euro-currency-container">
            <h1 className="usd-euro-currency-title">USD</h1>
            <h1 className="usd-euro-currency-title">EURO</h1>
          </div>
        </div>
        {cryptoCurrencyList.map(eachItem => (
          <CryptocurrencyItem eachCryptoCurrency={eachItem} key={eachItem.id} />
        ))}
      </div>
    </div>
  )
}

export default CryptocurrenciesList
