// button
import LyButton from './components/button'
// checkbox
import LyCheckbox from './components/checkbox'

// loading 指令
import VLoading from './directives/loading'

// 提示信息
import alertMessage from './utils/alert-message'
import { AlertMessage } from './utils/alert-message'
// 点击反馈
import startClickRipple from './utils/click-ripple'

export default {
    install(app) {
        // 注册全局组件
        app.component('LyButton', LyButton)
        app.component('LyCheckbox', LyCheckbox)

        // 注册 loading 指令
        app.directive('loading', VLoading)

        // 开启点击反馈
        startClickRipple()
    }
}

export {
    // 组件...
    LyButton,

    // 指令...
    VLoading,

    // 工具...
    alertMessage,
    AlertMessage,
    startClickRipple
}