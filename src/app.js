import Vue from 'vue'
import chai from 'chai'
import plugin from './plugin'
import spies from 'chai-spies'
import Button from './components/button'
import Icon from './components/icon'
import ButtonGroup from './components/button-group'
import Input from './components/input'
import Row from './components/row'
import Col from './components/col'
import Layout from './components/layout'
import Header from './components/header'
import Footer from './components/footer'
import Sider from './components/sider'
import Content from './components/content'
import Toast from './components/toast'


import './style/reset.css'
import './js/svg'

chai.use(spies);
Vue.use(plugin);
Vue.component('u-button', Button);
Vue.component('u-icon', Icon);
Vue.component('button-group', ButtonGroup);
Vue.component('u-input', Input);
Vue.component('u-row', Row);
Vue.component('u-col', Col);
Vue.component('u-layout', Layout);
Vue.component('u-header', Header);
Vue.component('u-content', Content);
Vue.component('u-sider', Sider);
Vue.component('u-footer', Footer);
Vue.component('u-toast', Toast);


/** @namespace chai.expect */
const expect = chai.expect;

new Vue({
    el: '#app',
    data: {
        loading1: false,
        message: ''
    },
    created() {
        // this.$toast('我是弹窗msg', {})
    },
    methods: {
        showToast() {
            this.$toast('很多很饿多的很多很饿多的很多很饿多的很多很饿多的很多很饿多的很多很饿多的很多很饿多的很多很饿多的很多很饿多的很多很饿多的很多很饿多的很多很饿多的很多很饿多的很多很饿多的很多很饿多的很多很饿多的很多很饿多的很多很饿多的阿撒撒撒撒', {})
            // this.$toast('当前网络不稳定')
        }
        /*        inputChange(event) {
                    console.log(event.target.value);
                }*/
    }
});

