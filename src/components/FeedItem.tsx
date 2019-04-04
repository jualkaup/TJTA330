import * as React from "react";
import { Card } from "react-bootstrap";
import { Message } from "../interfaces/message";

interface FeedItemProps {
  message: Message;
}

interface FeedItemState {}

class FeedItem extends React.Component<FeedItemProps, FeedItemState> {
  constructor(props) {
    super(props);
  }

  render() {
      const {message} = this.props;
    return (
      <Card>
        <Card.Body>
          <Card.Title>{message.sender}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {message.datetime.toLocaleString("fi")} - {message.platform}
          </Card.Subtitle>
          <Card.Text>{message.content}</Card.Text>
          <Card.Link href="#">Tykkää</Card.Link>
          <Card.Link href="#">Kommentoi</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default FeedItem;
