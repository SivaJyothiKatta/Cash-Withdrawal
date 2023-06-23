// Write your code here

import {Component} from 'react'
import DenominationItem from '../DenominationItem/index'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="container">
        <div className="cash-withdraw-container">
          <div className="user-details">
            <div className="user-profile">
              <p className="profile-name">S</p>
            </div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div className="balance">
              <p className="check-balance">{balance}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>

          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-list">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominationDetails={eachItem}
                key={eachItem.id}
                balanceDetails={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
