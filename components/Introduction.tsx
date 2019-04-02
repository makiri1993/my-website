import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Introduction extends Vue {
  render() {
    return (
      <div class='introduction-container mb-1 py-2'>
        <img class='introduction-image' src='../assets/nerd_2.jpg' alt='Picture of guy in front of computers' />
        <div class='side-text-container pt-4'>
          <h1 class='big-side-text'>Martin</h1>
          <h1 class='big-side-text'>Kireew</h1>
          <h1 class='big-side-text'>Berlin</h1>
        </div>
        <div class='introduction px-2'>
          <h1 class='greeting'>Hello!</h1>
          <p>My name ist Martin Kireew. I live in Berlin and work as full stack developer.</p>
          <p>I'm a big entusiast of new tech. I always try to stay up-to-date by following all trends.</p>
          <p>Right now I'm more focusing on frontend tech because of its evolving.</p>
        </div>
      </div>
    )
  }
}
