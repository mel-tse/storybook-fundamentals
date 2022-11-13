import Buttons from "./Buttons";
import { withKnobs, text, booloean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Buttons",
  decorators: [() => "<div class='p-2'><story/></div>", withDesign, withKnobs],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/efdPoFK9LI8movlEJzB3gk/Storybook-Components-Test?node-id=21%3A185&t=lSsRJp9v8jRow6RG-1",
    },
  },
};

export const Primary = () => ({
  props: {
    text: { default: text("Button Text", "Text") },
  },
  render() {
    return (
      <Buttons
        theme="bg-blue-100 hover:bg-purple-100 text-white"
        text={this.text}
      />
    );
  },
});

export const Secondary = () => ({
  props: {
    text: { default: text("Button Text", "Text") },
  },
  render() {
    return (
      <Buttons theme="bg-purple-100 hover:bg-blue-100 text-white" text={this.text} />
    );
  },
});

export const Outline = () => ({
  props: {
    text: { default: text("Button Text", "Text") },
  },
  render() {
    return (
      <Buttons theme="border-black-100 border-1 text-black-100 " text={this.text} />
    );
  },
});

export const Accessibility = () => ({
  props: {
    text: { default: text("Button Text", "Text") },
  },
  render() {
    return (
      <Buttons theme="bg-purple-100 border-1 text-purple-100 " text={this.text} />
    );
  },
});

export const Disabled = () => ({
  props: {
    text: { default: text("Button Text", "Text") },
  },
  render() {
    return (
      <Buttons
        theme="border-black-100 border-1 text-black-100 opacity-40"
        text={this.text}
      />
    );
  },
});
