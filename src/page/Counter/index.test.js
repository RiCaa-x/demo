import Counter from "./Counter";

const counter = new Counter();
test("测试Counter中的add方法", () => {
  counter.add();
  expect(counter.number).toBe(1);
});
test("测试Counter中的minus方法", () => {
  counter.minus();
  expect(counter.number).toBe(0);
});
