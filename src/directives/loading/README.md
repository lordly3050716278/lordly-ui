# Lordly V-Loading

`Lordly V-Loading` 是一个 Vue 指令，用于在指定元素上添加加载动画。它会在元素上展示一个带有圆形旋转效果的加载动画，适用于异步数据加载、请求过程中提示用户等待。该指令支持自动绑定加载状态，并能够根据加载状态动态展示或隐藏加载动画。

## 功能

- **动态加载动画**：可以在元素上添加一个旋转的加载动画，提示用户正在加载数据。
- **可自定义样式**：可以通过 CSS 样式自定义加载动画的颜色、大小等。
- **响应式设计**：动画会自动适应元素的大小与样式。
- **Vue 指令支持**：通过 Vue 指令 `v-loading` 在 DOM 元素上控制加载状态。

## 使用

```javascript
import VLoading from './path/to/loading'

app.directive('loading', VLoading)
```

```html
<template>
    <div v-loading="isLoading"></div>
</template>

<script setup>
import { ref } from 'vue'

const isLoading = ref(false)

setTimeout(() => isLoading.value = true, 3000)
</script>

<style scoped>
    div {
        width: 100px;
        height: 100px;
    }
</style>
```