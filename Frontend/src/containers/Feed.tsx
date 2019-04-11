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
        datetime: new Date(Date.now() - 1 * 60000),
        media: [],
        platform: "Facebook"
    },
    
    {
        sender: "Helena RKH",
        content: loremIpsum,
        datetime: new Date(Date.now() - 12 * 123456),
        media: [],
        platform: "LinkedIn"
    },

    {
      sender: "Toni Taipalus",
      content: loremIpsum,
      datetime: new Date(Date.now() - 12344321),
      media: [],
      platform: "Twitter"
    },

    {
      sender: "Jussi Kauppinen",
      content: loremIpsum,
      datetime: new Date(Date.now() - 1 * 60000),
      media: [],
      platform: "Facebook"
  },
  
  {
      sender: "Helena RKH",
      content: loremIpsum,
      datetime: new Date(Date.now() - 12 * 123456),
      media: [],
      platform: "LinkedIn"
  },

  {
    sender: "Toni Taipalus",
    content: loremIpsum,
    datetime: new Date(Date.now() - 12344321),
    media: [],
    platform: "Twitter"
  },

  {
    sender: "Jussi Kauppinen",
    content: loremIpsum,
    datetime: new Date(Date.now() - 1 * 60000),
    media: [],
    platform: "Facebook"
},

{
    sender: "Helena RKH",
    content: loremIpsum,
    datetime: new Date(Date.now() - 12 * 123456),
    media: [],
    platform: "LinkedIn"
},

{
  sender: "Toni Taipalus",
  content: loremIpsum,
  datetime: new Date(Date.now() - 12344321),
  media: [],
  platform: "Twitter"
}
]

const ad = require("../assets/MISE.png");

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
            <img src={ad} alt="MISE"></img>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Feed;
