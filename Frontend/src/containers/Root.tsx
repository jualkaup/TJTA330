import * as React from "react";
import IsmoNavbar from "../components/IsmoNavbar";
import Feed from "./Feed";
import PublishField from "../components/PublishField";
import { Message } from "../interfaces/message";

// Nämä voidaan jättää tyhjäksi
interface RootProps {}
interface RootState {
  messages: Message[]
}

class Root extends React.Component<RootProps, RootState> {
  state: Readonly<RootState> = {
    messages: []
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchMessages();
  }

  fetchMessages = () => {
    fetch("https://ismobackend.azurewebsites.net/api/Messages").then(r => r.json().then(f => this.setState({messages: f})))
  }

  render() {
    return (
      <div className="rootContainer">
        <IsmoNavbar />
        <PublishField fetchMessages={this.fetchMessages}/>
        <Feed fetchMessages={this.fetchMessages} messages={this.state.messages}/>
      </div>
    );
  }
}

export default Root;
