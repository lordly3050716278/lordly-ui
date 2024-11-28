# lordly-ui

## 目录结构

```
lordly-ui/
├── src/                              # 源代码
|   ├── components/                   # 组件
|   |   ├── button/                   # button 组件
|   ├── directives/                   # 指令
|   |   └── loading/                  # loading 指令
|   ├── utils/                        # 工具
|   |   ├── alert-message/            # alertMessage 提示消息
|   |   └── click-ripple/             # 点击反馈
|   └── index.js                      # 入口文件
├── package.json                      # 项目配置
└── README.md                         # 说明文档
```

## 安装

```shell
npm i lordly-ui
```

## 使用
```javascript
// 全局引用

import LordlyUI from 'lordly-ui'
app.use(LordlyUI)
```