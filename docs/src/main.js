import Vue from 'vue'
import VueHotkey from '../../src/index.js'
import App from './App.vue'

Vue.use(VueHotkey)

const rootNode = document.createElement('div')
document.body.appendChild(rootNode)

/* eslint-disable no-new */
new Vue({
  el: rootNode,
  render (h) {
    return h(App)
  }
})
