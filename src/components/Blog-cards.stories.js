import Blogcards from "./Blog-cards";
import { withKnobs, text, booloean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Blogcards",
  decorators: [() => "<div class='p-2'><story/></div>", withDesign, withKnobs],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/efdPoFK9LI8movlEJzB3gk/Storybook-Components-Test?node-id=29%3A103&t=lSsRJp9v8jRow6RG-1",
    },
  },
};

export const Primary = () => ({
  props: {
    text: { default: text("Card Text", "Proin eget urna nec arcu fringilla maximus.") },
    imgLink: { default: text("Insert img", "https://images.unsplash.com/photo-1667719275827-f982acd04b38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80") }
  },
  render() {
    return (
      <Blogcards
        theme="bg-blue-100 hover:bg-purple-100 text-white"
        text={this.text}
        imgLink={this.imgLink}
      />
    );
  },
});
