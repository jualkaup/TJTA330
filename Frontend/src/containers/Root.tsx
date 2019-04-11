import * as React from "react";
import IsmoNavbar from "../components/IsmoNavbar";
import Feed from "./Feed";
import PublishField from "../components/PublishField";

// Nämä voidaan jättää tyhjäksi
interface RootProps {}
interface RootState {}

class Root extends React.Component<RootProps, RootState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="rootContainer">
        <IsmoNavbar />
        <PublishField />
        <Feed />
      </div>
    );
  }
}

export default Root;
