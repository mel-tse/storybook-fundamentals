import Fieldbtns from "./Field-buttons";
import { withKnobs, text, booloean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withDesign } from "storybook-addon-designs";

export default {
    title: "Fieldbtns",
    decorators: [() => "<div class='p-2'><story/></div>", withDesign, withKnobs],
    parameters: {
      design: {
        type: "figma",
        url:
          "https://www.figma.com/file/efdPoFK9LI8movlEJzB3gk/Storybook-Components-Test?node-id=29%3A159&t=CT3gofbOH2FV3QF8-1",
      },
    },
  };
  

  export const Primary = () => ({
    render() {
      return (
        <Fieldbtns />
      );
    },
  });
  