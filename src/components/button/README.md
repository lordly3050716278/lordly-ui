# LordlyButton

`LordlyButton` 是一个灵活且可定制的按钮组件，支持多种类型、尺寸和样式。它支持常见的按钮状态（如：默认、悬浮、点击、禁用），并通过 Vue 的指令和样式动态管理。

## 功能

- **多种按钮类型**：支持多种按钮类型，包括 `primary`、`success`、`danger`、`warning`、`info` 和 `default`。
- **按钮尺寸选择**：提供多种尺寸选项，包括 `mini`、`small`、`normal`、`large` 和 `huge`。
- **响应式设计**：按钮自适应宽度、字体大小和 padding。
- **禁用状态**：当按钮被禁用时，自动应用禁用样式。
- **块级按钮**：支持块级按钮（`is-block`）样式，按钮宽度自动占满父容器。
- **纯文本按钮**：支持纯文本按钮样式（`plain`），适用于简洁的UI设计。
- **按钮动画效果**：按钮点击时具有动画效果。

## 属性

| 属性名     | 类型     | 默认值     | 说明                                           |
|------------|----------|------------|------------------------------------------------|
| `type`     | `String` | `'default'`| 按钮的类型，支持 `primary`, `success`, `danger`, `warning`, `info`, `default`。 |
| `size`     | `String` | `'normal'` | 按钮的大小，支持 `mini`, `small`, `normal`, `large`, `huge`。 |
| `disabled` | `Boolean`| `false`    | 是否禁用按钮，禁用后按钮不可点击。               |
| `block`    | `Boolean`| `false`    | 是否全宽显示按钮，设置为 `true` 时，按钮宽度占满父容器。 |
| `plain`    | `Boolean`| `false`    | 是否为纯色按钮，纯色按钮背景透明，边框和文字使用类型颜色。 |

## 事件

| 事件名    | 说明             | 参数       |
|-----------|------------------|------------|
| `click`   | 按钮点击事件     | event      |

## 使用

```html
<template>
  <!-- 基本按钮 -->
  <LyButton type="primary">Primary Button</LyButton>
  
  <!-- 纯色按钮 -->
  <LyButton type="success" plain>Success Button</LyButton>
  
  <!-- 禁用按钮 -->
  <LyButton type="danger" :disabled="true">Disabled Button</LyButton>
  
  <!-- 全宽按钮 -->
  <LyButton type="info" block>Full Width Button</LyButton>
  
  <!-- 不同大小按钮 -->
  <LyButton type="warning" size="small">Small Button</LyButton>
  <LyButton type="info" size="huge">Huge Button</LyButton>
</template>

<script setup>
import { LyButton } from 'lordly-ui'
</script>
