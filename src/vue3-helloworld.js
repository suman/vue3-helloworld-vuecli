import {onMounted, h} from 'vue'

const config = { msg: String }
export default {
  name: 'vue3-helloworld', // name is importing while importing module globally in main.js
  props : config,
  setup(props) {
    console.log("setup() is invoked, guys, this is hello world")
    console.log(props.msg);

    onMounted(function () {
      console.log("Hooray!!! Onmounted() is triggered")
    });
  },

  render() {
    return h('div', {
      id: 'helloworld-1'
    });
  }
}

