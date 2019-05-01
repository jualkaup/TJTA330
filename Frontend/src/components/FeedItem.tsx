import * as React from "react";
import { Card } from "react-bootstrap";
import { Message, PlatformName } from "../interfaces/message";
import moment from 'moment';


interface FeedItemProps {
  message: Message,
  updateFunction: () => void;
}

interface FeedItemState {
  likeState: boolean
}

class FeedItem extends React.Component<FeedItemProps, FeedItemState> {
  state: Readonly<FeedItemState> = {
    likeState: false
  }

  componentDidMount() {
    this.getLikeState();
  }

  constructor(props) {
    super(props);
  }

  likeMessage = () => {
    fetch(`https://localhost:44346/api/Messages/LikeMessage/${this.props.message.id}`).then(() => {
      this.props.updateFunction();
      this.getLikeState();
    })
  }

  getLikeState = () => {
    fetch(`https://localhost:44346/api/Messages/LikeState/3/${this.props.message.id}`).then(r => r.text().then(t => this.setState({likeState: t == "true" ? true : false})));
  }
  
  render() {
      const {message} = this.props;
      const since = timeSince(message.date)
    return (
      <Card className="feedItem">
        <Card.Body>
          <Card.Title>{message.sender.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            { since } - {PlatformName[message.platform]}
          </Card.Subtitle>
          <Card.Text>{message.content}</Card.Text>
          <Card.Link href="#" onClick={() => this.likeMessage()}>{this.state.likeState ? "Unlike" : "Like"} ({message.likeAmount})</Card.Link>
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
