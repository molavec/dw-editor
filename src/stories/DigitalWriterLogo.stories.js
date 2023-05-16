import DigitalWriterLogo from '../components/commons/DigitalWriterLogo.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'commons/DigitalWriterLogo',
  component: DigitalWriterLogo,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    text: { type: 'text' },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DigitalWriterLogo },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<DigitalWriterLogo v-bind="args" />',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  text: 'Hola mundo',
};
