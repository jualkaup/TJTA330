import * as React from "react";
import { Card } from "react-bootstrap";
import { Message } from "../interfaces/message";
import moment from 'moment';


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
      const since = timeSince(message.datetime)
    return (
      <Card className="feedItem">
        <Card.Body>
          <Card.Title>{message.sender}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            { since } - {message.platform}
          </Card.Subtitle>
          <Card.Text>{message.content}</Card.Text>
          <Card.Link href="#">Like</Card.Link>
          <Card.Link href="#">Comment</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

function timeSince(date: Date) {
  return moment(date).fromNow();
}

export default FeedItem;
