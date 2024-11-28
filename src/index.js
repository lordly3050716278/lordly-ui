// 提示信息
import alertMessage from './utils/alert-message'
import { AlertMessage } from './utils/alert-message'
// 点击反馈
import startClickRipple from './utils/click-ripple'


// loading 指令
import VLoading from './directives/loading'

export default {
    install(app) {
        // 开启点击反馈
        startClickRipple()

        // 注册 loading 指令
        app.directive('loading', VLoading)
    }
}

export {
    // 工具...
    alertMessage,
    AlertMessage,
    startClickRipple,
    // 指令...
    VLoading
}