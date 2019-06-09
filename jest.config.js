// Jest
// @see [公式](https://jestjs.io/docs/ja/configuration)
// @see [この頃流行りのJestを導入して軽快にJSをテストしよう](https://qiita.com/hogesuke_1/items/8da7b63ff1d420b4253f)
module.exports = {
	verbose: true,
	transform: {
		"^.+\\.js$": "<rootDir>/node_modules/babel-jest" // <rootDir> : デフォルト: 設定ファイルまたは package.json を含むルートディレクトリ。あるいは、もし package.json が見つからなければ、pwd の結果を設定します。
	},
	moduleFileExtensions: ["js"], // テスト対象の拡張子を列挙する
	testMatch: [
		// テスト対象のファイル名にマッチする正規表現文字列の配列 @see https://app.codegrid.net/entry/2018-jest-1
		// "**/__tests__/**/*.[jt]s?(x)",
		"**/?(*.)+(spec|test).[jt]s?(x)"
	],
	testPathIgnorePatterns: ["/node_modules/", "**/__tests__/**/*.[jt]s?(x)"]
};
