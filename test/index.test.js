import cartesianProductFn from "../src/index";

const test1 = cartesianProductFn([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ["a", "b", "c", "234"]
]);
const test2 = cartesianProductFn([[1, 2, 3]]);
const test3 = cartesianProductFn({ color: [1, 2, 3], size: ["a", "b", "c"] });
test("test1.length", () => {
  expect(test1.length).toBe(108);
});
test("test2.length", () => {
  expect(test2.length).toBe(3);
});
test("test3.length", () => {
  expect(test3.length).toBe(9);
});
