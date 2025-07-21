import React from "react";
import { render } from "@testing-library/react-native";

// Simple test to verify Jest setup
describe("Jest Setup", () => {
  it("should work with basic React Native testing", () => {
    const TestComponent = () => null;
    const { toJSON } = render(<TestComponent />);
    expect(toJSON()).toBeDefined();
  });

  it("should handle basic assertions", () => {
    expect(1 + 1).toBe(2);
    expect("hello").toBe("hello");
    expect(true).toBe(true);
  });

  it("should mock functions correctly", () => {
    const mockFn = jest.fn();
    mockFn("test");
    expect(mockFn).toHaveBeenCalledWith("test");
  });
});
