import * as React from "react";
import HelloWorld from "../../components/helloWorld";

export interface IProps {}

export interface IState {}

class HelloWorldContainer extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return <HelloWorld />;
  }
}

export default HelloWorldContainer;
