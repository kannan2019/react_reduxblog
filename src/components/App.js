import React, { Component } from "react";
import PostList from "./PostList";
class App extends Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <PostList />
      </div>
    );
  }
}
export default App;
