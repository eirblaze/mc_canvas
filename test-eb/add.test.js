import demoApp from "../Sources/demoApp";

describe("Counter", () => {
	test("adds 1 + 2 to equal 3", () => {
		// Jest独特の記述にtestというものもあります。これはitの別名です。
		expect(demoApp.add(1, 2)).toBe(3);
	});
});
