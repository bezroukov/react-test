import * as React from "react";
import { hot } from "react-hot-loader";
import {Todo} from "./Todo";
import {Counter} from "./Counter";
import styled from "styled-components";

const Div = styled.div `
    margin: 30px 200px;
`

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <Div>
        <Todo/>
        <br/><hr/>
        <Counter/>
      </Div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
