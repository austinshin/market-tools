import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ShareSizeCalculator = (props) => {

  const { accountInfo } = useSelector(state => state?.accountInfo);
  const [shareSize, setShareSize] = useState(0);
  const [positionAmount, setPositionAmount] = useState(0);
  const [effectiveRisk, setEffectiveRisk] = useState(0);
  const [takeProfit, setTakeProfit] = useState(0);
  const [formData, setFormData] = useState({
    accountBalance: 0,
    risk: 1,
    entry: 1.05,
    stopLoss: 1.10,
    rewardRisk: 1,
    fees: 0,
    slippage: 0,
  });

  useEffect(() => {
    setFormData({ ...formData, ['accountBalance']: accountInfo.accountBalance })
  }, [accountInfo])

  const handleChange = (e) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const calculate = (e) => {
    console.log('formData', formData);
    const { accountBalance, risk, entry, stopLoss, rewardRisk, fees, slippage } = formData;
    const moneyAtRisk = accountBalance * risk / 100;
    const tradeSize = moneyAtRisk / (entry - stopLoss);
    const positionAmount = tradeSize * entry;
    const effectiveRisk = tradeSize * stopLoss - tradeSize * entry;
    // const takeProfit = 
    setShareSize(tradeSize);
    setPositionAmount(positionAmount);
    setEffectiveRisk(effectiveRisk);
  }

  return (
    <Container className="share-size-calculator-container">
      <div className="share-size-calculator-header text-center">
        ShareSize Calculator
      </div>
      <Stack gap={5}>
        <div className="p-2">
          <InputGroup.Text id="basic-addon1">Account Balance ($)</InputGroup.Text>
          <Form.Control
            placeholder="Account Balance size"
            aria-label="Account Balance"
            aria-describedby="basic-addon1"
            type="number"
            value={formData.accountBalance}
            name="accountBalance"
            onChange={handleChange}
          >
          </Form.Control>
          <InputGroup.Text id="basic-addon1">Risk (%)</InputGroup.Text>
          <Form.Control
            placeholder="Risk %"
            aria-label="Risk"
            aria-describedby="basic-addon1"
            type="number"
            value={formData.risk}
            name="risk"
            onChange={handleChange}
          />
          <InputGroup.Text id="basic-addon1">Reward/Risk</InputGroup.Text>
          <Form.Control
            placeholder="Reward/Risk"
            aria-label="Reward/Risk"
            aria-describedby="basic-addon1"
            type="number"
            value={formData.rewardRisk}
            name="rewardRisk"
            onChange={handleChange}
          />
          {/* <InputGroup.Text id="basic-addon1">Fees (%)</InputGroup.Text>
          <Form.Control
            placeholder="Fees"
            aria-label="Fees"
            aria-describedby="basic-addon1"
            type="number"
            value={formData.fees}
            name="fees"
            onChange={handleChange}
          />
          <InputGroup.Text id="basic-addon1">Slippage (%)</InputGroup.Text>
          <Form.Control
            placeholder="Slippage"
            aria-label="Slippage"
            aria-describedby="basic-addon1"
            type="number"
            value={formData.slippage}
            name="slippage"
            onChange={handleChange}
          /> */}
          <InputGroup.Text id="basic-addon1">Entry ($)</InputGroup.Text>
          <Form.Control
            placeholder="Entry"
            aria-label="Entry"
            aria-describedby="basic-addon1"
            type="number"
            value={formData.entry}
            name="entry"
            onChange={handleChange}
          />
          <InputGroup.Text id="basic-addon1">Stop Loss ($)</InputGroup.Text>
          <Form.Control
            placeholder="Stop Loss"
            aria-label="Stop Loss"
            aria-describedby="basic-addon1"
            type="number"
            value={formData.stopLoss}
            name="stopLoss"
            onChange={handleChange}
          />
          <Button className="share-size-calculator-submit" variant="success" onClick={calculate}>
            Calculate
          </Button>

        </div>
        <div className="p-2">
          <div>
            Shares: {shareSize}
          </div>
          <div>
            Buying Power required : ${positionAmount}
          </div>
          <div>
            Effective risk: ${effectiveRisk}
          </div>
          <div>
            Take profit: ${takeProfit}
          </div>
        </div>
        {/* <div className="p-2">3</div> */}
      </Stack>

    </Container>
  )
}

export default ShareSizeCalculator;