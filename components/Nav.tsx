import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Nav extends Vue {
  render() {
    return (
      <nav class='nav py-2'>
        <slot />
      </nav>
    )
  }
}
