import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { fetchTickers } from '../actions/tickers';
import { useSelector, useDispatch } from 'react-redux';

const Polygon = (props) => {
    const tickers = useSelector(state => state.tickers);
    const dispatch = useDispatch();

    const [value, setValue] = useState('');

    const handleInputChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        dispatch(fetchTickers(value));
        e.preventDefault()
    }

    function FormText() {
        return (
            <Form className="polygon-form" onSubmit={handleSubmit}>
                <Form.Label htmlFor="ticker" className="polygon-form-label">Enter list of tickers here separated by commas</Form.Label>
                <Form.Control
                    value={value}
                    onChange={handleInputChange}
                    type="text"
                    id="ticker"
                    aria-describedby="tickerHelpBlock"
                >
                </Form.Control>
                <Button variant="secondary" type="submit" className="polygon-submit">
                    Get ticker info
                </Button>
            </Form>
        );
    }

    function getProps(e) {
        console.log('props', props.tickers);
    }

    return (
        <div className='polygon'>
            {FormText()}
            <Switch>
                {/* <Route path='/polygon/subroute' component={Subcomponent} /> */}
            </Switch>
        </div>
    )
}

export default Polygon;