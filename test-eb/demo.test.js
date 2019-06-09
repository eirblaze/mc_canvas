import Counter from "../Sources/demoApp";

describe("カウンター", () => {
	let counter;
	beforeEach(() => {
		// 共通前処理を試す
		counter = new Counter(1);
	});
	describe("increment()", () => {
		test("1 をふやすと 2 になる", () => {
			counter.increment();
			expect(counter.count).toBe(2);
		});
	});
	describe("decrement()", () => {
		test("1 をへらすと 0 になる", () => {
			counter.decrement();
			expect(counter.count).toBe(0);
		});
	});
});
