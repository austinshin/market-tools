import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
// import Column from 'react-bootstrap/Column';
import { useSelector, useDispatch } from 'react-redux';
import AccountInfo from '../components/AccountInfo';
import ShareSizeCalculator from './ShareSizeCalculator';


const Home = (props) => {
  const [value, setValue] = useState('');

  return (
    <Container>
      <div className="container ">
        <div className="row align-items-start">
          <div className="col">
            <AccountInfo />
          </div>
          <div className="col">
            <ShareSizeCalculator />
          </div>
          <div className="col">
            3rd column
          </div>
        </div>
      </div>
    </Container>
  )

}

export default Home;