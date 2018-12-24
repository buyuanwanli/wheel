### 如何解决一个bug
1..根据错误提示，大概确定原因
2.2分法确定具体位置
3.log分析代码
### button

### 注意事项：

1. 按钮的高度与input一致
2. 高度为8的倍数

使用变量对button进行大小设置

```css
.root{
    --button-height:32px;
    --font-size:14px;
}
.g-button{
    font-size:var(--font-size);
    height:var(--button-height);
}
```
### 属性检查器
```javascript
    export default {
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    if (value !== 'left' && value !== 'right') {
                        return false
                    } else {
                        return true
                    }
                }
            }
        }
    }
```
### 测试用例
```javascript
expect(xxx).to.equal(yyy)
```

利用`<template>`标签集合多个标签
可以利用`<template>`包裹多个标签，并且`<template>`标签不会展示在页面上
```html
<template>
    <div class="wrapper">
        <input type="text">
        <template v-if="error">
            <icon name="setting"></icon>
            <span>{{error}}</span>
        </template>
    </div>
</template>
```


### toast
 1. enableHtml中this.$toast传递的参数为数组
 
 ###tap
 ####用例需求分析
 1. 切换tap
 2. tap名加icon
 3. 横竖方向调整
 4. 右侧加按钮
 #### 代码分析
 Vue的语法糖
 ```html
     <u-tab :selected.sync="selectedTab">
     <u-tab selected="selectedTab" @update:selected="selectedTab=$event">
```
