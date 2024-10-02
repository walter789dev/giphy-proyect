import { FC } from "react";
import { Card } from "react-bootstrap";
import { Gift } from "../../../types/gift";

interface CardGift {
  gift: Gift;
}

const CardGift: FC<CardGift> = ({ gift }) => {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={gift.urlGift.url} />
      <Card.Body>
        <Card.Title>{gift.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardGift;
