import demoApp from "../Sources/demoApp";

describe("グループ", () => {
	test("1 + 2 は 3 になる", () => {
		// Jest独特の記述にtestというものもあります。これはitの別名です。
		expect(demoApp.add(1, 2)).toBe(3);
	});
	describe("子グループ", () => {
		test("1 - 2 は -1 になる", () => {
			expect(demoApp.sub(1, 2)).toBe(-1);
		});
	});
});
