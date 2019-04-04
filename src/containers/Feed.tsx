import * as React from "react";
import { Row, Col } from "react-bootstrap";
import FeedItem from "../components/FeedItem";

import '../styles/feed.css';
import { Message } from "../interfaces/message";

interface FeedProps {}
interface FeedState {}

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,";

const DummyMessages: Message[] = [
    {
        sender: "Jussi Kauppinen",
        content: loremIpsum,
        datetime: new Date(Date.now() - 2 * 60000),
        media: [],
        platform: "Facebook"
    },
    
    {
        sender: "Helena RKH",
        content: loremIpsum,
        datetime: new Date(Date.now() - 12345),
        media: [],
        platform: "LinkedIn"
    }
]

class Feed extends React.Component<FeedProps, FeedState> {
  render() {
    return (
      <div className="feedContainer">
        <Row className="feedRow">
          <Col sm>
            
          </Col>
          <Col sm={5}  className="feed">
            { DummyMessages.map(msg => <FeedItem message={msg}/>) }
          </Col>
          <Col sm >
          
          </Col>
        </Row>
      </div>
    );
  }
}

export default Feed;
