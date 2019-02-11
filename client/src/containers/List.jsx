import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from 'reactstrap';
import Cards from '../components/Cards';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    axios.get('api')
      .then((res) => {
        const fetchedList = [res.data.results];
        this.setState({ characters: fetchedList[0] })
      })
      .catch(err => console.log(err))
  }


  render() {
    const { characters } = this.state;
    return (
      <Row className="fullList">
        {characters.map(item =>
          <Col xs="3" md="3" key={item.id}>
            <Cards characters={item} />
          </Col>)}
      </Row>
    );
  }
}

export default List;