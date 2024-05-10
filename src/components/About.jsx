import React from 'react';
import Subcomponent from './Subcomponent';
import { Route, Switch } from 'react-router-dom';

const About = (props) => {

  function getProps(e) {
    console.log('props', props.items);
  }

  return (
    <div className='about'>
      <Switch>
        <Route path='/about/subroute' component={Subcomponent} />
      </Switch>
    </div>
  )
}

export default About;