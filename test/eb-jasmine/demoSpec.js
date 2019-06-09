// jusmine サンプル
//
// @see https://monmon.hatenablog.com/entry/2013/12/10/080051
// @see https://qiita.com/howdy39/items/b9d704e7f84053924da3#%E3%83%86%E3%82%B9%E3%83%88%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AE%E4%BD%9C%E6%88%90%E3%81%A8%E7%99%BB%E9%8C%B2
//
// describe と it と expect のサンプル。
describe("add関数のテスト", function() {
	it("1 + 2 は 3", function() {
		expect(add(1, 2)).toBe(3);
	});
	it("1 - 2 は -1", function() {
		expect(subtract(1, 2)).toBe(-1);
	});
});
