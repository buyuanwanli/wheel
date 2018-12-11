# UI组件
**作者：不远**   
[![Build Status](https://travis-ci.org/buyuanwanli/wheel.svg?branch=master)](https://travis-ci.org/buyuanwanli/wheel)
---------------------------------
## 介绍
一个UI组件框架,可以轻松的调用各种样式的UI组件
## 开始使用
### 添加css样式
使用本框架前，请在css中开启border-box
```css
*,*::before,*::after{box-sizing: border-box;}
```
IE8以上支持此样式
### 引安装ui-demo
```npm
nom i --save ui-demo
```
### 引入ui-demo
```javascript
import {Button,ButonGroup,Icon} from  'ui-demo'
import 'wheel/dist/index.css'
export default {
    name:'#app',
    components:{
        'u-button':Button,
        'u-icon':Icon
    }
}
```
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码



