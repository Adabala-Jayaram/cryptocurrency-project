import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    isLoading: true,
    cryptoCurrencyList: [],
  }

  componentDidMount() {
    this.getCryptoCurrency()
  }

  getCryptoCurrency = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formatData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
    }))
    this.setState({cryptoCurrencyList: formatData, isLoading: false})
  }

  render() {
    const {cryptoCurrencyList, isLoading} = this.state
    console.log(isLoading)
    return (
      <div className="crypto-currency-container">
        {isLoading ? (
          <CryptocurrenciesList cryptoCurrencyList={cryptoCurrencyList} />
        ) : (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
