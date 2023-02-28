import { randomBetween, sum } from "./sum";
// const randomSpy = jest.spyOn(Math, "random").mockReturnValue(0.5);
describe("randomBetween", () => {
  describe("when Math.random() returns 0", () => {
    // beforeEach(() => {
    //   randomSpy.mockReturnValue(0.5);
    // });
  });
  it("suming 5 and 2 will return 7", () => {
    expect(sum(5, 2)).toBe(7);
  });
  it("called with min = 3 and max = 5 returns 3", () => {
    expect(randomBetween(3, 5)).toBeGreaterThanOrEqual(3);
  });
});
