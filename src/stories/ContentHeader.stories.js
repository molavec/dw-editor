import ContentHeader from '../components/commons/ContentHeader.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'commons/ContentHeader',
  component: ContentHeader,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    id: { type: 'text' },
    title: { type: 'text' },
    content: { type: 'text' },
    isPublished: { type: 'text' },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ContentHeader },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<ContentHeader v-bind="args" />',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  id: '01',
  title: 'Hola mundo',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  isPublished: true,
};

export const Draft = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Draft.args = {
  id: '01',
  title: 'Hola mundo',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  isPublished: false,
};
