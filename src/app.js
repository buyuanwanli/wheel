import Vue from 'vue'
import chai from 'chai'
import vm from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

import './reset.css'

Vue.component('u-button', vm);
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

//单元测试
{
    const Constructor = Vue.extend(vm);
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    });
    vm.$mount();
    let useElement = vm.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-setting')
}
{
    const Constructor = Vue.extend(vm);
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    });
    vm.$mount();
    let useElement = vm.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-loading')
}
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(vm);
    const button = new Constructor({
        propsData: {
            icon: 'setting',
        }
    });
    button.$mount(div);
    let svg = button.$el.querySelector('svg');
    let order = window.getComputedStyle(svg).order;
    expect(order).to.eq('1');
    button.$el.remove();
    button.$destroy();
}


