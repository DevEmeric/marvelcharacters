import React from 'react';
import { Card, CardImg, CardBody,
  CardTitle, Button } from 'reactstrap';

const Cards = (characterInfo) => {
  return (
    <div>
      <Card className="d-flex justify-content-around">
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody className="text-center">
          <CardTitle>{characterInfo.name}</CardTitle>
          <Button size="sm">Add to your favorites</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;