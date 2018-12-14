import Vue from 'vue'
import chai from 'chai'
import spies from 'chai-spies'
import Button from './components/button'
import Icon from './components/icon'
import ButtonGroup from './components/button-group'
import Input from './components/input'
import Row from './components/row'
import Col from './components/col'

import './style/reset.css'
import './js/svg'

chai.use(spies);
Vue.component('u-button', Button);
Vue.component('u-icon', Icon);
Vue.component('button-group', ButtonGroup);
Vue.component('u-input', Input);
Vue.component('u-row', Row);
Vue.component('u-col', Col);


/** @namespace chai.expect */
const expect = chai.expect;

new Vue({
    el: '#app',
    data: {
        loading1: false,
        message: ''
    },
    methods: {
        inputChange(event) {
            console.log(event.target.value);
        }
    }
});

