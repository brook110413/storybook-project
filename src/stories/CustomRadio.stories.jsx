import CustomRadio from '../components/CustomRadio';

export default {
  title: 'Components/CustomRadio',
  component: CustomRadio,
};

const Template = (args) => <CustomRadio {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: true,
};
Default.parameters = {
  docs: {
    source: {
      code: `
import CustomRadio from '@components/CustomRadio'

<CustomRadio />
`,
    },
  },
};
