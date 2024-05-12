import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useSelector, useDispatch } from 'react-redux';

const Home = (props) => {
  const marketInfo = useSelector(state => state.marketInfo);
  const [value, setValue] = useState('');

  return (
    <Container>
      Dashboard
    </Container>
  )

}

export default Home;