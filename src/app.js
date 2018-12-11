import Vue from 'vue'
import chai from 'chai'
import spies from 'chai-spies'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

import './reset.css'

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

//单元测试
// 测试按钮含有icon
{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    });
    vm.$mount();
    let useElement = vm.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-setting');
    vm.$el.remove();
    vm.$destroy();
}
// i-loading
{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    });
    vm.$mount();
    let useElement = vm.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-loading');
    vm.$el.remove();
    vm.$destroy();
}

{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
        }
    });
    vm.$mount(div);
    let svg = vm.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq('1');
    vm.$el.remove();
    vm.$destroy();
}

{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            iconPosition: 'right'
        }
    });
    vm.$mount(div);
    let svg = vm.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq('2');
    vm.$el.remove();
    vm.$destroy();
}

{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    });
    vm.$mount();
    let spy = chai.spy(function () {
    });
    vm.$on('click', spy);
    let button = vm.$el;
    button.click();
    expect(spy).to.have.been.called()
}
