const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.exist
    });

    describe('props', () => {
        const Constructor = Vue.extend(Input);
        let vm;
        afterEach(() => {
            vm.$destroy()
        });

        it('接收value', () => {
            vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount();
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.value).to.equal('1234');
        });

        it('接收disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount();
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.disabled).to.equal(true);
        });

        it('接收readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount();
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.readOnly).to.equal(true);
        });

        it('接收warning', () => {
            vm = new Constructor({
                propsData: {
                    warning: '你错了'
                }
            }).$mount();
            const useElement = vm.$el.querySelector('use');
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-warning');
            const warningMessage = vm.$el.querySelector('.warningMessage');
            expect(warningMessage.innerText).to.equal('你错了');
        });

        describe('事件', () => {
            const Constructor = Vue.extend(Input);
            let vm;
            afterEach(() => {
                vm.$destroy()
            });
            it('支持change事件', () => {
                vm = new Constructor({}).$mount();
                const callback = sinon.fake();
                vm.$on('change', callback);
                let event = new Event('change');
                let inputElement = vm.$el.querySelector('input');
                inputElement.dispatchEvent(event);
                expect(callback).to.have.been.calledWith(event)
            });
            it('支持input事件', () => {
                vm = new Constructor({}).$mount();
                const callback = sinon.fake();
                vm.$on('input', callback);
                let event = new Event('input');
                let inputElement = vm.$el.querySelector('input');
                inputElement.dispatchEvent(event);
                expect(callback).to.have.been.calledWith(event)
            });
            it('支持focus事件', () => {
                vm = new Constructor({}).$mount();
                const callback = sinon.fake();
                vm.$on('focus', callback);
                let event = new Event('focus');
                let inputElement = vm.$el.querySelector('input');
                inputElement.dispatchEvent(event);
                expect(callback).to.have.been.calledWith(event)
            });
            it('支持change事件', () => {
                vm = new Constructor({}).$mount();
                const callback = sinon.fake();
                vm.$on('blur', callback);
                let event = new Event('blur');
                let inputElement = vm.$el.querySelector('input');
                inputElement.dispatchEvent(event);
                expect(callback).to.have.been.calledWith(event)
            });
        })
    })
});
