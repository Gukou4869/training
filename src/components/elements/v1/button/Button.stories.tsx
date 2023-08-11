import Button from ".";

import type { ButtonProps, ButtonType } from ".";
import type { StoryFn, Meta } from "@storybook/react";


export default {
  component: Button,
  title: "Components/Button",
} as Meta;

const Template: StoryFn<ButtonProps> = () => {
  const typeVariants: ButtonType[] = ["primary", "secondary", "tertiary"];

  return (
    <table summary="Button Component Style List">
      <tr>
        <th></th>
        {typeVariants.map((type) => {
          return <th key={type}>{type}</th>;
        })}
      </tr>
      <tr>
        <th>Normal</th>
        {typeVariants.map((type) => {
          return (
            <th key={type}>
              <Button text="ボタン" type={type} />
            </th>
          );
        })}
      </tr>
      <tr>
        <th>Disabled</th>
        {typeVariants.map((type) => {
          return (
            <th key={type}>
              <Button disabled text="ボタン" type={type} />
            </th>
          );
        })}
      </tr>
    </table>
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: true,
  text: "Click Me",
};
Default.storyName = "Button";
