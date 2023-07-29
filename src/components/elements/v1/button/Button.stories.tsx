import { StoryFn, Meta } from "@storybook/react";
import Button, { ButtonProps, ButtonType } from ".";
import { table } from "console";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = () => {
  const typeVariants: ButtonType[] = ["primary", "secondary", "tertiary"];
  const buttonState = ["normal", "hover", "active", "focused", "diabled"];

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
              <Button type={type} text="ボタン" />
            </th>
          );
        })}
      </tr>
      <tr>
        <th>Disabled</th>
        {typeVariants.map((type) => {
          return (
            <th key={type}>
              <Button type={type} text="ボタン" disabled />
            </th>
          );
        })}
      </tr>
    </table>
  );
};

export const Default = Template.bind({});
Default.args = {
  text: "Click Me",
  disabled: true,
};
Default.storyName = "Button";
