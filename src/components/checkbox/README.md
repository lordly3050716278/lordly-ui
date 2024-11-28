# Lordly Checkbox

一个可定制的 Vue 3 复选框组件，支持平滑的动画效果，并且可以根据不同的状态（选中、未选中、禁用）进行样式定制。

## 特性

- **可定制样式**：轻松更改复选框的大小、颜色和边框样式。
- **动画效果**：包含平滑的选中/取消选中动画，提升用户体验。
- **Vue 3**：基于 Vue 3 的组合式 API 和响应式数据绑定。
- **可访问性**：支持无障碍设计，确保正确的标签和键盘操作支持。


## 使用

```html
<template>
  <LyCheckbox type="info" size="huge">Huge Button</LyCheckbox>
</template>

<script setup>
import { LyCheckbox } from 'lordly-ui'
</script>
