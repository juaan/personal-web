import React from "react";
import Fonts from "./Components/Fonts";
import "antd/dist/antd.css";
import "./App.css";
import MainContent from "./Components/MainContent";

class App extends React.Component<{}> {
  componentDidMount(): void {
    Fonts();
  }

  render() {
    return <MainContent />;
  }
}

export default App;
