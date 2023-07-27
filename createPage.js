var fs = require("fs");
var path = require("path");
var readline = require("readline");
var pageName = process.argv[2].toLowerCase();
if (!pageName) {
    console.error("Error: Page name must be provided.");
    process.exit(1);
}
var capitalizedPageName = "".concat(pageName.charAt(0).toUpperCase()).concat(pageName.slice(1));
if (!/^[a-z][a-z0-9_]*$/i.test(pageName)) {
    console.error("Error: Page name must start with a letter and can only include alphanumeric characters and underscores.");
    process.exit(1);
}
var componentDirPath = path.join(__dirname, "/src/components/pages/".concat(pageName));
var indexPath = path.join(__dirname, "/src/pages/".concat(pageName, "/index.tsx"));
var componentPath = path.join(componentDirPath, "index.tsx");
var stylePath = path.join(componentDirPath, "".concat(pageName, ".module.scss"));
var storybookPath = path.join(componentDirPath, "".concat(pageName, ".stories.tsx"));
var testPath = path.join(componentDirPath, "".concat(pageName, ".test.tsx"));
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var existingFiles = [];
var filesToWrite = [
    {
        path: indexPath,
        content: "import ".concat(capitalizedPageName, " from '../../components/pages/").concat(pageName, "';\n\nexport default function ").concat(pageName, "() {\n  return <").concat(capitalizedPageName, " />;\n}"),
    },
    {
        path: componentPath,
        content: "import styles from './".concat(pageName, ".module.scss';\n\nexport default function ").concat(capitalizedPageName, "() {\n  return (\n    <div className={styles.container}>\n      <h1>This is ").concat(capitalizedPageName, "</h1>\n    </div>\n  )\n}"),
    },
    {
        path: stylePath,
        content: ".container {\n  color: red;\n}",
    },
    {
        path: storybookPath,
        content: "import React from 'react';\nimport { Meta, Story } from '@storybook/react';\nimport ".concat(capitalizedPageName, " from './").concat(pageName, "';\n\nexport default {\n  title: 'Pages/").concat(capitalizedPageName, "',\n  component: ").concat(capitalizedPageName, ",\n} as Meta;\n\nconst Template: Story = () => <").concat(capitalizedPageName, "  />;\n\nexport const ").concat(capitalizedPageName, " = Template.bind({});"),
    },
    {
        path: testPath,
        content: "import { render, screen } from '@testing-library/react';\nimport ".concat(capitalizedPageName, " from './").concat(pageName, "';\n\ntest('renders learn react link', () => {\n  render(<").concat(capitalizedPageName, " />);\n  const linkElement = screen.getByText(/learn react/i);\n  expect(linkElement).toBeInTheDocument();\n});"),
    },
];
if (!fs.existsSync(path.dirname(indexPath))) {
    fs.mkdirSync(path.dirname(indexPath), { recursive: true });
}
if (!fs.existsSync(componentDirPath)) {
    fs.mkdirSync(componentDirPath, { recursive: true });
}
filesToWrite.forEach(function (file) {
    if (fs.existsSync(file.path)) {
        existingFiles.push(file.path);
    }
});
if (existingFiles.length > 0) {
    rl.question("The following files already exist. Do you want to override them? (y/n) \n".concat(existingFiles.join("\n"), "\n"), function (answer) {
        if (answer.toLowerCase() === "y") {
            filesToWrite.forEach(function (file) {
                fs.writeFileSync(file.path, file.content);
                console.log("".concat(file.path, " has been overwritten."));
            });
        }
        rl.close();
    });
}
else {
    filesToWrite.forEach(function (file) {
        fs.writeFileSync(file.path, file.content);
        console.log("".concat(file.path, " has been created."));
    });
    rl.close();
}
