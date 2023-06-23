import './index.css'

const CryptocurrencyItem = props => {
  const {eachCryptoCurrency} = props
  const {euroValue, usdValue, currencyName, currencyLogo} = eachCryptoCurrency
  return (
    <li className="crypto-currency-item">
      <div className="currency-name-img-bg">
        <img src={currencyLogo} alt={currencyName} className="currency-img" />
        <h1 className="currency-name">{currencyName}</h1>
      </div>
      <div className="usd-euro-currency-value-bg">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
