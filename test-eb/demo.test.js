import Counter from "../Sources/demoApp";

describe("カウンター", () => {
	let counter;
	const init_value = 1;
	beforeEach(() => {
		// 共通前処理を試す
		counter = new Counter(init_value);
	});
	describe("increment()", () => {
		test(init_value + " をふやすと 2 になる", () => {
			counter.increment();
			expect(counter.count).toBe(2);
		});
		test("2回 ふやすと 3 になる", () => {
			// 共通処理で、初期値はtestのたびに1になる。
			counter.increment();
			counter.increment();
			expect(counter.count).toBe(3);
		});
	});
	describe("decrement()", () => {
		test(init_value + " をへらすと 0 になる", () => {
			counter.decrement();
			expect(counter.count).toBe(0);
		});
	});
});
