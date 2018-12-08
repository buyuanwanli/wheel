import Vue from 'vue'
import Button from './button'
import Icon from './icon'

import './reset.css'

Vue.component('u-button', Button)
Vue.component('u-icon', Icon)

new Vue({
    el: '#app',
})

