import Type from "./Type";
import Heading from "./h2";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withDesign } from "storybook-addon-designs";

export default {
    title: "Type/Headings",
    decorators: [() => "<div class='p-2'><story/></div>", withDesign, withKnobs],
    parameters: {
      design: {
        type: "figma",
        url:
          "https://www.figma.com/file/efdPoFK9LI8movlEJzB3gk/Storybook-Components-Test?node-id=29%3A24&t=dSJOHgoaNm0IxVoa-1",
      },
    },
  };  

  export const H1 = () => ({
    props: {
        smSize: { default: boolean('Mobile size', false)},
        text: { default: text("Type here", "Abcdefghijklmnopqrstuvwxyz") }
    },
    render() {
      return (
        <Type
        smSize={this.smSize} 
        text={this.text} />
      );
    },
  });



  export const H2 = () => ({
    props: {
        smSize: { default: boolean('Mobile size', false)},
        text: { default: text("Type here", "Abcdefghijklmnopqrstuvwxyz") }
    },
    render() {
      return (
        <Heading
        smSize={this.smSize} 
        text={this.text} />
      );
    },
  });
