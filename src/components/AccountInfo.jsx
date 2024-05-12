import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';

const AccountInfo = (props) => {
  const { accountInfo } = useSelector(state => state?.accountInfo);

  return (
    <Container className="account-info-container">
      <div className="account-info-header text-center">
        Account Info
      </div>
      <div>
        Account Balance: {accountInfo.accountBalance}
      </div>
      <div>
        1R: {accountInfo.ONE_R}
      </div>
      <div>
        2R: {accountInfo.TWO_R}
      </div>
      <div>
        Win probability: {accountInfo.winProbability}
      </div>
      <div>
        Profit Ratio: {accountInfo.profitRatio}
      </div>
      <div>
        Edge: {accountInfo.edge}
      </div>
      <div>
        Stake: {accountInfo.stake}
      </div>
      <div>
        Expected growth: {accountInfo.expectedGrowth}
      </div>
    </Container>
  )
}

export default AccountInfo;