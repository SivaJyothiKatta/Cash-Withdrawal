// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationDetails, balanceDetails} = props
  const {value} = denominationDetails

  const onWithdraw = () => {
    balanceDetails(value)
  }

  return (
    <li className="item-list">
      <button className="button" type="button" onClick={onWithdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
