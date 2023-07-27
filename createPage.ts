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

// ファイルパスを定義
const indexPath = path.join(__dirname, "/src/pages/index.ts");
const componentPath = path.join(
  __dirname,
  `/src/components/pages/${pageName}.tsx`
);
const stylePath = path.join(
  __dirname,
  `/src/components/pages/${pageName}.module.scss`
);

// ファイルが存在しない場合だけ新規作成
if (!fs.existsSync(indexPath)) {
  fs.writeFileSync(
    indexPath,
    `import ${
      pageName.charAt(0).toUpperCase() + pageName.slice(1)
    } from '../components/pages/${pageName}';

  export default function Index() {
    return <${pageName.charAt(0).toUpperCase() + pageName.slice(1)} />;
  }`
  );
}

if (!fs.existsSync(componentPath)) {
  fs.writeFileSync(
    componentPath,
    `import styles from './${pageName}.module.scss';

  export default function ${
    pageName.charAt(0).toUpperCase() + pageName.slice(1)
  }() {
    return (
      <div className={styles.container}>
        <h1>This is ${pageName.charAt(0).toUpperCase() + pageName.slice(1)}</h1>
      </div>
    )
  }`
  );
}

if (!fs.existsSync(stylePath)) {
  fs.writeFileSync(
    stylePath,
    `.container {
    color: red;
  }`
  );
}
