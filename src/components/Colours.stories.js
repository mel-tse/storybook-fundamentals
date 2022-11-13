import Colours from "./Colours";
import { withKnobs, text, booloean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Colour Palette",
  decorators: [() => "<div class='p-2'><story/></div>", withDesign, withKnobs],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/efdPoFK9LI8movlEJzB3gk/Storybook-Components-Test?node-id=21%3A185&t=lSsRJp9v8jRow6RG-1",
    },
  },
};

export const All = () => ({
  render() {
    return (
      <Colours/>
    );
  },
});
