const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/components/toast'


Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.exist
    });
    describe('props', function () {
        it('接受autoClose', (done) => {
            let div = document.createElement('div');
            document.body.appendChild(div);
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor({
                propsData: {
                    autoClose: 1,
                }
            }).$mount(div);
            setTimeout(() => {
                expect(document.body.contains(vm.$el)).to.eq(false);
                done()
            }, 1500)
        });
        it('接受closeButton', () => {
            const callback = sinon.fake();
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor({
                propsData: {
                    text: '关闭吧',
                    callback,
                }
            }).$mount();
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('关闭')
        });
        it('接受 enableHtml', () => {
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor({
                propsData: {enableHtml: true}
            });
            vm.$slots.default = ['<strong id="test">hi</strong>']
            vm.$mount();
            let strong = vm.$el.querySelector('#test');
            expect(strong).to.exist;
        })
    })
});
