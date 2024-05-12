import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ShareSizeCalculator = (props) => {

  const { accountInfo } = useSelector(state => state?.accountInfo);

  const handleChange = (e) => {

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
            type="text"
            value={accountInfo.accountBalance}
            onChange={handleChange}
          >
          </Form.Control>
          <InputGroup.Text id="basic-addon1">Risk (%)</InputGroup.Text>
          <Form.Control
            placeholder="Risk %"
            aria-label="Risk"
            aria-describedby="basic-addon1"
          />
          <InputGroup.Text id="basic-addon1">Entry ($)</InputGroup.Text>
          <Form.Control
            placeholder="Entry"
            aria-label="Entry"
            aria-describedby="basic-addon1"
          />
          <InputGroup.Text id="basic-addon1">Stop Loss ($)</InputGroup.Text>
          <Form.Control
            placeholder="Stop Loss"
            aria-label="Stop Loss"
            aria-describedby="basic-addon1"
          />
          <InputGroup.Text id="basic-addon1">Reward/Risk</InputGroup.Text>
          <Form.Control
            placeholder="Reward/Risk"
            aria-label="Reward/Risk"
            aria-describedby="basic-addon1"
          />
          <InputGroup.Text id="basic-addon1">Fees (%)</InputGroup.Text>
          <Form.Control
            placeholder="Fees"
            aria-label="Fees"
            aria-describedby="basic-addon1"
          />
          <InputGroup.Text id="basic-addon1">Slippage (%)</InputGroup.Text>
          <Form.Control
            placeholder="Slippage"
            aria-label="Slippage"
            aria-describedby="basic-addon1"
          />
          <Button className="share-size-calculator-submit" variant="success">Calculate</Button>

        </div>
        <div className="p-2">2</div>
        <div className="p-2">3</div>
      </Stack>

    </Container>
  )
}

export default ShareSizeCalculator;