// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Root from './Root.vue'

import app from './app/index'

new Vue({
  el: '#app',
  router:app.router,
  template: '<Root/>',
  components: { Root }
})
