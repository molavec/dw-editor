import EditorCTAContainer from '../components/commons/EditorCTAContainer.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'combined/EditorCTAContainer',
  component: EditorCTAContainer,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    ctaArray: { control: 'object' },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { EditorCTAContainer },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<EditorCTAContainer v-bind="args" />',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  ctaArray: [
    {
      text: 'Cancel',
      link: '#',
      isDanger: true,
    },
    {
      text: 'Publish',
      link: '#',
      isDanger: false,
      isActive: false,
    },
    {
      text: 'Save',
      link: '#',
      isDanger: false,
      isActive: true,
    },
  ],
};
