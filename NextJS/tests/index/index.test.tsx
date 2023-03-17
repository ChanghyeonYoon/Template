// tests/index/index.test.ts

import { render, RenderResult } from "@testing-library/react";
import Home from "pages/index";

describe("Home", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<Home />);
  });

  it("should render the component", () => {
    expect(component).toBeDefined();
  });

  it("renders Test Home", () => {
    const test = component.getByText("Kongtare - Malma");
    expect(test).toBeInTheDocument();
  });

  afterEach(() => {
    expect(component.container).toMatchSnapshot();
    component.unmount();
  });
});
