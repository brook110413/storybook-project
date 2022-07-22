import Button, { BUTTON_THEME, BUTTON_LABEL_COLOR } from './Button1';
import { COLORS } from '../theme';

export default {
  title: 'Example/CustomButton',
  component: Button,
  argTypes: {
    theme: {
      control: { type: 'select' },
    },
    labelColor: {
      description: 'If theme is whiteButton that can be used',
      options: [BUTTON_LABEL_COLOR.RED, BUTTON_LABEL_COLOR.DARK],
      control: { type: 'select' },
    },
    disabled: { control: 'boolean' },
  },
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

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};
Default.parameters = {
  docs: {
    source: {
      code: `
import CustomButton from '@components/CustomButton'

<CustomButton onClick={() => {}}>
  Default
</CustomButton>
`,
    },
  },
};

export const Monetization = Template.bind({});
Monetization.args = {
  theme: BUTTON_THEME.RED,
  children: 'Monetization',
};
// Monetization.parameters = {
//   docs: {
//     source: {
//       code: `
// <Button
//   onClick={() => {}}
//   theme="redButton"
// >
//   Monetization
// </Button>`,
//       language: 'jsx',
//       type: 'auto',
//       format: true,
//     },
//   },
// };

export const MonetizationWhite = Template.bind({});
MonetizationWhite.args = {
  theme: BUTTON_THEME.WHITE,
  children: 'Monetization',
  labelColor: BUTTON_LABEL_COLOR.RED,
};

export const Interactive = Template.bind({});
Interactive.args = {
  theme: BUTTON_THEME.YELLOW,
  children: 'Interactive',
};

export const InteractiveWhite = Template.bind({});
InteractiveWhite.args = {
  theme: BUTTON_THEME.WHITE,
  children: 'Interactive',
  labelColor: BUTTON_LABEL_COLOR.DARK,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled',
};

export const LowerPriority = Template.bind({});
LowerPriority.args = {
  children: 'LowerPriority',
};
