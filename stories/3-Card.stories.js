import Card from '../components/Card'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import 'bootstrap/dist/css/bootstrap.css'

export default {
  title: 'Card',
  decorators: [withKnobs]
}

export const ToStorybook = () => ({
  components: { Card },
  data() {
    return {
      card: {
        id: 1,
        image:
          'https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000001000189414_wh_28',
        title: 'Hotel'
      }
    }
  },
  template: `<div class="container">
    <div class="row mt-5">
        <div class="col-md-4 offset-md-4">
          <Card :card="card" />
        </div>
    </div>
  </div>`
})

ToStorybook.story = {
  name: 'My Card'
}
