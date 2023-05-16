import EditorCTA from '../components/commons/EditorCTA.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'commons/EditorCTA',
  component: EditorCTA,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    text: { type: 'text' },
    link: { type: 'text' },
    isDanger: { type: 'boolean' },
    isActive: { type: 'boolean' },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { EditorCTA },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<EditorCTA class="border-2" v-bind="args" />',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  text: 'Publish',
  link: '#',
  isDanger: null,
  isActive: null,
};

export const Danger = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Danger.args = {
  text: 'Cancel',
  link: '#',
  isDanger: true,
  isActive: null,
};

export const NotActive = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
NotActive.args = {
  text: 'Cancel',
  link: '#',
  isDanger: false,
  isActive: true,
};
