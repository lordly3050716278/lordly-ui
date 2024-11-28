// 提示信息
import alertMessage from './utils/alert-message'
import { AlertMessage } from './utils/alert-message'
// 点击反馈
import startClickRipple from './utils/click-ripple'

export default {
    install(app) {
        // 开启点击反馈
        startClickRipple()
    }
}

export {
    alertMessage,
    AlertMessage,
    startClickRipple
}