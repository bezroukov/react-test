import * as React from "react";
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


export default(App);
