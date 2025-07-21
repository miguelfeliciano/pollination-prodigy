// Basic test to verify Jest is working
describe("Basic Jest Test", () => {
  it("should work with basic assertions", () => {
    expect(1 + 1).toBe(2);
    expect("hello").toBe("hello");
    expect(true).toBe(true);
  });

  it("should handle basic math", () => {
    expect(2 * 3).toBe(6);
    expect(10 / 2).toBe(5);
    expect(7 - 3).toBe(4);
  });

  it("should handle arrays", () => {
    const arr = [1, 2, 3];
    expect(arr).toHaveLength(3);
    expect(arr).toContain(2);
  });

  it("should handle objects", () => {
    const obj = { name: "test", value: 42 };
    expect(obj.name).toBe("test");
    expect(obj.value).toBe(42);
  });

  it("should handle functions", () => {
    const mockFn = jest.fn();
    mockFn("test");
    expect(mockFn).toHaveBeenCalledWith("test");
  });
});
