import * as React from "react";
import { Row, Col } from "react-bootstrap";
import FeedItem from "../components/FeedItem";

import '../styles/feed.css';
import { Message } from "../interfaces/message";

interface FeedProps {
  messages: Message[]
  fetchMessages: () => void;
}
interface FeedState {

}

const ad = require("../assets/MISE.png");

class Feed extends React.Component<FeedProps, FeedState> {

  render() {
    const {messages} = this.props;
    console.log(messages);
    const sortedMessages = messages.sort((a,b) => new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : -1 );

    return (
      <div className="feedContainer">
        <Row className="feedRow">
          <Col sm>
            
          </Col>
          <Col sm={5}  className="feed">
            {
              sortedMessages.map(msg => <FeedItem updateFunction={this.props.fetchMessages} message={msg}/>)
            }
          </Col>
          <Col sm >
            <img id="ad" src={ad} alt="MISE"></img>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Feed;
