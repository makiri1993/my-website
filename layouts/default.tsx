import { VNode } from 'vue'
import { Component, Vue } from 'vue-property-decorator'

import Nav from '@/components/Nav'

@Component
export default class extends Vue {
  render(): VNode {
    return (
      <div id='app'>
        <Nav>
          <nuxt-link class='mx-4' to='/'>
            Home
          </nuxt-link>
          <nuxt-link class='mx-4' to='/cv'>
            CV
          </nuxt-link>
          {/* <!-- <router-link class="mx-4" to="/test">Contact</router-link> --> */}
        </Nav>
        <div class='container'>
          <nuxt />
        </div>
      </div>
    )
  }
}
