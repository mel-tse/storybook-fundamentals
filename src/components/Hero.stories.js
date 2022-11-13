import Hero from "./Hero";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Hero",
  decorators: [ withDesign, withKnobs],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/efdPoFK9LI8movlEJzB3gk/Storybook-Components-Test?node-id=29%3A53&t=c7tYSfdBYhBeMtRg-1",
    },
  },
};

export const Primary = () => ({
  props: {
    showPag: { default: boolean('Show Pagination', false)},
    text: { default: text("Hero Text", "Lorem Ipsum") },
    imgLink: { default: text("Insert img", "https://images.unsplash.com/photo-1596367407372-96cb88503db6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80") }
  },
  render() {
    return (
      <Hero
        showPag={this.showPag}
        text={this.text}
        imgLink={this.imgLink}
      />
    );
  },
});
