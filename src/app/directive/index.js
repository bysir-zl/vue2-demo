/**
 * Created by Administrator on 2017/1/15.
 */

import Vue from 'vue'
require('./css.less')


let load = function (el, binding) {
  let e = $(el)
  if (!binding.value) {
    e.find(".loading").remove()
  } else {
    e.append('<div class="loading"><div class="bg"></div><span>正在加载</span></div>')
    e.css("position", "relative")
  }
}

// 一个简易的loading指令
Vue.directive('loading', load)

