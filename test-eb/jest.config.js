// Jest
// @see [公式](https://jestjs.io/docs/ja/configuration)
// @see [この頃流行りのJestを導入して軽快にJSをテストしよう](https://qiita.com/hogesuke_1/items/8da7b63ff1d420b4253f)
module.exports = {
	verbose: true,
	modulePaths: [], // NODE_PATH 環境変数を設定する代わりの API
	transform: {
		"^.+\\.js$": "<rootDir>/node_modules/babel-jest" // <rootDir> : デフォルト: 設定ファイルまたは package.json を含むルートディレクトリ。あるいは、もし package.json が見つからなければ、pwd の結果を設定します。
	},
	moduleFileExtensions: ["js"] // テスト対象の拡張子を列挙する
};
