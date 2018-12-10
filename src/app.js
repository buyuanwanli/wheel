import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

import './reset.css'

Vue.component('u-button', Button);
Vue.component('u-icon', Icon);
Vue.component('button-group', ButtonGroup)

new Vue({
    el: '#app',
    data: {
        loading1: false
    }
});

