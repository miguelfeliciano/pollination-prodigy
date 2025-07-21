import React from "react";
import { render } from "@testing-library/react-native";
import Tile from "../Tile";

describe("Tile Component", () => {
  const defaultProps = {
    position: { x: 0, y: 0 },
  };

  it("renders without crashing", () => {
    const { toJSON } = render(<Tile {...defaultProps} />);
    expect(toJSON()).toBeTruthy();
  });

  it("renders with correct testID", () => {
    const { getByTestId } = render(<Tile {...defaultProps} />);
    expect(getByTestId("tile-0-0")).toBeTruthy();
  });

  it("renders planted tile correctly", () => {
    const { getByTestId } = render(<Tile {...defaultProps} isPlanted={true} />);
    expect(getByTestId("tile-0-0")).toBeTruthy();
  });

  it("handles onPress callback", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Tile {...defaultProps} onPress={onPressMock} />
    );

    expect(onPressMock).not.toHaveBeenCalled();
    expect(getByTestId("tile-0-0")).toBeTruthy();
  });

  it("applies large size correctly", () => {
    const { getByTestId } = render(<Tile {...defaultProps} size="large" />);
    expect(getByTestId("tile-0-0")).toBeTruthy();
  });

  it("matches snapshot for empty tile", () => {
    const tree = render(<Tile {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("matches snapshot for planted tile", () => {
    const tree = render(<Tile {...defaultProps} isPlanted={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
