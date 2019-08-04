import * as React from "react";

export interface IProps {}

export interface IState {}

class HelloWorld extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return <h1>Hello World</h1>;
  }
}

export default HelloWorld;
