import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from 'reactstrap';
import Cards from '../components/Cards';

class List extends Component {
  state = {
    list: ''
  }

  componentDidMount() {
    axios.get('api')
     .then(res => console.log('didmount res:', res.data.results))
     .catch(err => console.log(err))
  }

 

  render() {
    return (
      <Row className="fullList">
        <Col xs="3" md="3">
          <Cards />
        </Col>
      </Row>
    );
  }
}

export default List;