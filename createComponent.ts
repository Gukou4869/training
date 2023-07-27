const fs = require("fs");
const path = require("path");

const componentName = process.argv[2];
const componentPath = path.join("src", "components", "elements", "v1", componentName);
const capitalizedComponentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);

if (!fs.existsSync(componentPath)) {
  fs.mkdirSync(componentPath, { recursive: true });
}

const filesToWrite: { [key: string]: string } = {
  [path.join(componentPath, "index.tsx")]: `import React, { FC } from 'react';
import styles from './${componentName}.module.scss';

export interface ${capitalizedComponentName}Props {
  // ここにPropsの型定義を書くことができます。
}

const ${capitalizedComponentName}: FC<${capitalizedComponentName}Props> = (props) => {
  const {} = props;

  return (
    <div className={styles.${componentName}}>
      {/* Component content goes here */}
    </div>
  );
};

export default ${capitalizedComponentName};
`,
  [path.join(componentPath, `${capitalizedComponentName}.module.scss`)]: `.container {
    align-items: center;
    display: flex;
    justify-content: center;
  }
  `,
  [path.join(componentPath, `${capitalizedComponentName}.test.tsx`)]: `import React from 'react';
  import { render, screen } from '@testing-library/react';
  import ${capitalizedComponentName} from '.}';

  test('renders learn react link', () => {
    render(<${capitalizedComponentName} />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  `,
  [path.join(
    componentPath,
    `${capitalizedComponentName}.stories.tsx`
  )]: `import { StoryFn, Meta } from '@storybook/react';
  import ${capitalizedComponentName}, { ${capitalizedComponentName}Props } from '.';
  
  export default {
    title: 'Components/${capitalizedComponentName}',
    component: ${capitalizedComponentName},
  } as Meta;
  
  const Template: StoryFn<${capitalizedComponentName}Props> = (args:${capitalizedComponentName}Props) => <${capitalizedComponentName} {...args} />;
  
  export const Default = Template.bind({});
  Default.args = {};
  Default.storyName = "${capitalizedComponentName}"
  `,
};

Object.entries(filesToWrite).forEach(([filePath, content]) => {
  fs.writeFileSync(filePath, content);
});
