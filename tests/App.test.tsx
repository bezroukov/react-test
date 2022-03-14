import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-dom/test-utils";
import App from "../src/components/App";
import { ReactElement } from "react";

it("App is rendered", () => {
  // Render App in the document
  const appElement = TestUtils.renderIntoDocument(
    (<App />) as ReactElement,
  ) as App;

  // Just for tests
  // eslint-disable-next-line react/no-find-dom-node
  const appNode = ReactDOM.findDOMNode(appElement);

  // Verify text content
  expect(appNode.textContent).toEqual("Hello World!Foo to the barz");
});
