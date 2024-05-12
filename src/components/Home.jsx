import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useSelector, useDispatch } from 'react-redux';

const Home = (props) => {
  const { accountInfo } = useSelector(state => state?.accountInfo);
  const [value, setValue] = useState('');

  function bankroll() {
    // console.log('state', state);
    console.log('1', accountInfo)
    return accountInfo.bankroll
  }

  return (
    <Container>
      {bankroll()}
    </Container>
  )

}

export default Home;