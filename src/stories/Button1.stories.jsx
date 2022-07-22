import Button, { BUTTON_THEME, BUTTON_TEXT_COLOR } from './Button1';
import { COLORS } from '../theme';

export default {
  title: 'Example/Button1',
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        {
          name: 'red',
          value: COLORS.lightRed,
        },
        {
          name: 'yellow',
          value: COLORS.yellow,
        },
      ],
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Monetization = Template.bind({});
Monetization.args = {
  theme: BUTTON_THEME.RED,
  label: 'Monetization',
};

export const MonetizationWhite = Template.bind({});
MonetizationWhite.args = {
  theme: BUTTON_THEME.WHITE,
  label: 'Monetization',
  labelColor: BUTTON_TEXT_COLOR.RED,
};

export const Interactive = Template.bind({});
Interactive.args = {
  theme: BUTTON_THEME.YELLOW,
  label: 'Interactive',
};

export const InteractiveWhite = Template.bind({});
InteractiveWhite.args = {
  theme: BUTTON_THEME.WHITE,
  label: 'Interactive',
  labelColor: BUTTON_TEXT_COLOR.DARK,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Disabled',
};

export const LowerPriority = Template.bind({});
LowerPriority.args = {
  label: 'LowerPriority',
};
