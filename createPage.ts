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
const indexPath = path.join(__dirname, `/src/pages/${pageName}/index.tsx`);
const componentDirPath = path.join(
  __dirname,
  `/src/components/pages/${pageName}`
);
const componentPath = path.join(componentDirPath, `index.tsx`);
const stylePath = path.join(componentDirPath, `${pageName}.module.scss`);
// ディレクトリが存在しない場合だけ新規作成
if (!fs.existsSync(path.dirname(indexPath))) {
  fs.mkdirSync(path.dirname(indexPath), { recursive: true });
}

if (!fs.existsSync(componentDirPath)) {
  fs.mkdirSync(componentDirPath, { recursive: true });
}

// ファイルが存在しない場合だけ新規作成
if (!fs.existsSync(indexPath)) {
  fs.writeFileSync(
    indexPath,
    `import ${
      pageName.charAt(0).toUpperCase() + pageName.slice(1)
    } from '@/components/pages/${pageName}';

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
