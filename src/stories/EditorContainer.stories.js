import EditorContainer from '../components/combined/EditorContainer.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'combined/EditorContainer',
  component: EditorContainer,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    ctaArray: { control: 'object' },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { EditorContainer },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<EditorContainer v-bind="args" />',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  ctaArray: [
    {
      text: 'Cancel',
      color: 'text-red-600',
      link: '#',
    },
    {
      text: 'Publish',
      color: 'text-blue-600',
      link: '#',
    },
    {
      text: 'Edit',
      color: 'text-blue-600',
      link: '#',
    },
  ],
};
