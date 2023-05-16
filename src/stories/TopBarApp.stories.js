import TopBarApp from '../components/combined/TopBarApp.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'combined/TopBarApp',
  component: TopBarApp,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    username: { type: 'string' },
    userImage: { type: 'string' },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TopBarApp },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<TopBarApp v-bind="args" />',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  username: 'Miguel Olave',
  userImage: 'https://images.unsplash.com/photo-1494883759339-0b042055a4ee?w=300',
};

export const Username = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Username.args = {
  username: 'Miguel Olave',
  userImage: '',
};

export const NonLogged = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
NonLogged.args = {
  username: '',
  userImage: '',
};
