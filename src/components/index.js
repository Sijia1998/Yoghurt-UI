import Vue from 'vue'
import Button from './button/button.vue'
import Input from './input/input.vue'

const Components = {
  Button,
  Input
}

Object.keys(Components).forEach(name => {
  Vue.component(`v-${name.toLowerCase()}`, Components[name])
})


export default Components