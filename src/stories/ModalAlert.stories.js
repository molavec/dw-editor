import ModalAlert from '../components/commons/ModalAlert.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'commons/ModalAlert',
  component: ModalAlert,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    message: { type: 'text' },
    primaryCTA: { type: 'text' },
    secondaryCTA: { type: 'text' },
    isDanger: { type: 'boolean' },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ModalAlert },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<div>
    <p>This a back text</p>
    <ModalAlert v-bind="args" />
  </div>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  message: 'This is the text message. Is it loooking good?',
  primaryCTA: 'Yes',
  secondaryCTA: 'No',
  isDanger: false,
  isVisible: true,
};

export const Danger = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Danger.args = {
  message: 'This is the danger text message. Are you sure?',
  primaryCTA: 'Yes',
  secondaryCTA: 'No',
  isDanger: true,
  isVisible: true,
};

export const OneOption = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
OneOption.args = {
  message: 'This is the text message for one option. Is it Ok?',
  primaryCTA: 'Yes',
  secondaryCTA: 'No',
  isDanger: false,
  isVisible: true,
};
