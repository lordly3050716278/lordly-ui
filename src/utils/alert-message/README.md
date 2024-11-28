# alertMessage

`alertMessage` 是一个用于在页面顶部显示提示消息框的 JavaScript 函数。它支持多种类型的消息框样式，可以在指定时间后自动消失，适用于信息提示、成功、错误、警告等场景。

## 功能

- 支持 6 种消息框类型：`primary`, `success`, `error`, `danger`, `warning`, `info`。
- 支持设置消息框的显示时间，默认显示 2 秒。
- 支持定制消息框内容和样式。
- 支持自动显示和隐藏，配合动画效果。
- 支持动态创建样式和容器，确保样式和 DOM 的存在。

## 属性

| 属性名     | 类型      | 默认值     | 说明                                           |
|------------|-----------|------------|------------------------------------------------|
| `message`  | `string`  | 必填       | 提示消息的内容，显示在消息框内。               |
| `type`     | `string`  | `'primary'`| 消息框类型，支持 `primary`, `success`, `error`, `danger`, `warning`, `info`。 |
| `duration` | `number`  | `2000`     | 消息框显示的持续时间，单位为毫秒，默认值为 2000 毫秒。 |


## 使用

```javascript
// 使用参数

import alertMessage from 'lordly-ui'

alertMessage('Hello, world')

alertMessage('Hello, world', 'success')

alertMessage('Hello, world', 'danger', 3000)

// 调用方法
import { AlertMessage } from 'lordly-ui'

AlertMessage.primary('Hello, world')

AlertMessage.info('Hello, world')

AlertMessage.error('Hello, world', 3000)
```
