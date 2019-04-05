import * as React from "react";
import IsmoNavbar from "../components/IsmoNavbar";
import Feed from "./Feed";

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
        <Feed />
      </div>
    );
  }
}

export default Root;
