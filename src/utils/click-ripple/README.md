# Click Ripple Effect

`startClickRipple` 是一个用于在页面上添加点击波纹效果的函数。它监听页面上的点击事件，并在点击位置创建波纹效果，随后在动画结束后自动移除波纹元素。此效果通常用于按钮或交互元素上，提供更好的用户体验反馈。

## 功能

- 支持页面上的点击波纹效果。
- 自动在点击位置创建波纹，并显示动画效果。
- 动画完成后，波纹元素自动移除，确保不会影响页面性能。
- 提供简单的点击反馈，适用于按钮、链接等交互元素。


## 使用

```javascript
import startClickRipple from 'lordly-ui'

// 启动点击波纹效果
startClickRipple()
```