const fs = require("fs");
const path = require("path");
const readline = require("readline");

const pageName = process.argv[2].toLowerCase();

if (!pageName) {
  console.error("Error: Page name must be provided.");
  process.exit(1);
}

const capitalizedPageName = `${pageName.charAt(0).toUpperCase()}${pageName.slice(1)}`;

if (!/^[a-z][a-z0-9_]*$/i.test(pageName)) {
  console.error(
    "Error: Page name must start with a letter and can only include alphanumeric characters and underscores."
  );
  process.exit(1);
}

const componentDirPath = path.join(__dirname, `/src/components/pages/${pageName}`);
const indexPath = path.join(__dirname, `/src/pages/${pageName}/index.tsx`);
const pageComponentPath = path.join(componentDirPath, "index.tsx");
const stylePath = path.join(componentDirPath, `${pageName}.module.scss`);
const storybookPath = path.join(componentDirPath, `${pageName}.stories.tsx`);
const testPath = path.join(componentDirPath, `${pageName}.test.tsx`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface FileToWrite {
  path: string;
  content: string;
}

const existingFiles: string[] = [];
const filesToWrite: FileToWrite[] = [
  {
    path: indexPath,
    content: `import ${capitalizedPageName} from '../../components/pages/${pageName}';

export default function ${pageName}() {
  return <${capitalizedPageName} />;
}`,
  },
  {
    path: pageComponentPath,
    content: `import styles from './${pageName}.module.scss';

export default function ${capitalizedPageName}() {
  return (
    <div className={styles.container}>
      <h1>This is ${capitalizedPageName}</h1>
    </div>
  )
}`,
  },
  {
    path: stylePath,
    content: `.container {
  color: red;
}`,
  },
  {
    path: storybookPath,
    content: `import { StoryFn, Meta } from '@storybook/react';
    import ${capitalizedPageName} from '.';
    
    export default {
      title: 'Pages/${capitalizedPageName}',
      component: ${capitalizedPageName},
    } as Meta;
    
    const Template: StoryFn = () => <${capitalizedPageName} />;
    
    export const Default = Template.bind({});
    Default.storyName = "${capitalizedPageName}"`,
  },
  {
    path: testPath,
    content: `import { render, screen } from '@testing-library/react';
import ${capitalizedPageName} from '.';

test('renders learn react link', () => {
  render(<${capitalizedPageName} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});`,
  },
];

if (!fs.existsSync(path.dirname(indexPath))) {
  fs.mkdirSync(path.dirname(indexPath), { recursive: true });
}

if (!fs.existsSync(componentDirPath)) {
  fs.mkdirSync(componentDirPath, { recursive: true });
}

filesToWrite.forEach((file) => {
  if (fs.existsSync(file.path)) {
    existingFiles.push(file.path);
  }
});

if (existingFiles.length > 0) {
  rl.question(
    `The following files already exist. Do you want to override them? (y/n) \n${existingFiles.join("\n")}\n`,
    (answer: string) => {
      if (answer.toLowerCase() === "y") {
        filesToWrite.forEach((file) => {
          fs.writeFileSync(file.path, file.content);
          console.log(`${file.path} has been overwritten.`);
        });
      }
      rl.close();
    }
  );
} else {
  filesToWrite.forEach((file) => {
    fs.writeFileSync(file.path, file.content);
    console.log(`${file.path} has been created.`);
  });
  rl.close();
}
