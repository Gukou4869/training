const fs = require("fs");
const path = require("path");

// process.argv配列の2番目の要素（0から始まるインデックス）がコマンドライン引数
const pageName = process.argv[2];

if (!pageName) {
  console.error("Error: Page name must be provided.");
  process.exit(1);
}

if (!/^[a-z][a-z0-9_]*$/i.test(pageName)) {
  console.error(
    "Error: Page name must start with a letter and can only include alphanumeric characters and underscores."
  );
  process.exit(1);
}

const dirPath = path.join(__dirname, `/pages/${pageName}`);
const filePath = path.join(dirPath, "index.js");

// ディレクトリが存在しない場合だけ新規作成
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true });
}

// ファイルが存在しない場合だけ新規作成
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(
    filePath,
    `export default function ${
      pageName.charAt(0).toUpperCase() + pageName.slice(1)
    }() {
    return (
      <div>
        <h1>This is ${pageName.charAt(0).toUpperCase() + pageName.slice(1)}</h1>
      </div>
    )
  }`
  );
}
