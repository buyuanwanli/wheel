import Vue from 'vue'
import chai from 'chai'
import spies from 'chai-spies'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

import './reset.css'
import './svg'

chai.use(spies);
Vue.component('u-button', Button);
Vue.component('u-icon', Icon);
Vue.component('button-group', ButtonGroup);
/** @namespace chai.expect */
const expect = chai.expect;

new Vue({
    el: '#app',
    data: {
        loading1: false
    }
});

