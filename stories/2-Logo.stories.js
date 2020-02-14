import Logo from '../components/Logo'

export default {
  title: 'Logo'
}

export const ToStorybook = () => ({
  components: { Logo },
  template: '<logo />'
})

ToStorybook.story = {
  name: 'My Logo'
}
