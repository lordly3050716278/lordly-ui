import styleHTML from './style'
import icons from './icons'

const __types = ['primary', 'success', 'error', 'danger', 'warning', 'info']

/**
 * 显示一个提示消息框，并在指定时间后自动消失。
 * 
 * 该函数会根据传入的 `type` 显示不同样式的消息框，消息框会在页面顶部居中展示，并在指定的 `duration` 后自动消失。
 * 
 * @function alertMessage
 * 
 * @param { string } message - 提示消息内容，消息框内将显示此文本。
 * @param { 'primary' | 'success' | 'error' | 'danger' | 'warning' | 'info' } type - 消息框类型，决定提示框的颜色和图标。可选值为：
 *   - 'primary' - 信息提示
 *   - 'success' - 成功提示
 *   - 'error' - 错误提示
 *   - 'danger' - 危险提示
 *   - 'warning' - 警告提示
 *   - 'info' - 消息提示
 * 
 * @param { number } [duration=2000] - 消息框显示的持续时间（毫秒）。默认值为 2000 毫秒（2秒）。
 * 
 * 
 * @example
 * alertMessage('操作成功', 'success', 3000)
 * 
 * 该函数使用了以下 CSS 动画：
 * - `box-in`：消息框显示时的动画。
 * - `box-out`：消息框隐藏时的动画。
 * 
 * 它还会动态创建和删除 `<style>` 和 `<div>` 元素来确保消息框样式和容器的存在。
 */
async function alertMessage(message, type, duration = 2000) {

    if (!__types.includes(type)) type = 'primary'

    initStyle()
    initContainer()

    const alertBox = createAlertBox(message, type)

    showBox(alertBox)

    await new Promise(resolve => setTimeout(resolve, duration))

    hideBox(alertBox)

    removeAlertBox(alertBox)
}

// 初始化样式
function initStyle() {
    const id = 'lordly-alert-msg-style'
    if (document.head.querySelector(`#${id}`)) return
    const style = document.createElement('style')
    style.id = id
    style.innerHTML = styleHTML
    document.head.append(style)
}

// 初始化容器
function initContainer() {
    const id = 'lordly-alert-msg-container'
    if (document.body.querySelector(`#${id}`)) return
    const container = document.createElement('div')
    container.id = id
    document.body.append(container)
}

// 创建消息盒子
function createAlertBox(message, type) {
    const alertBox = document.createElement('div')
    alertBox.classList.add('lordly-alert-msg-box', type)

    const icon = document.createElement('i')
    icon.classList.add('lordly-alert-msg-box__icon')
    icon.innerHTML = icons[type]

    const content = document.createElement('div')
    content.classList.add('lordly-alert-msg-box__content')
    content.textContent = message

    alertBox.append(icon, content)
    document.querySelector('#lordly-alert-msg-container').append(alertBox)

    alertBox.style.setProperty('--h', alertBox.offsetHeight + 'px')

    return alertBox
}

// 显示消息盒子
function showBox(box) {
    box.classList.add('show')
}

// 隐藏消息盒子
function hideBox(box) {
    box.classList.add('hide')
}

// 移除消息盒子
function removeAlertBox(alertBox) {
    alertBox.onanimationend = alertBox.remove
}

export default alertMessage

export const AlertMessage = {
    primary: (message, duration) => alertMessage(message, 'primary', duration),
    success: (message, duration) => alertMessage(message, 'success', duration),
    error: (message, duration) => alertMessage(message, 'error', duration),
    danger: (message, duration) => alertMessage(message, 'danger', duration),
    warning: (message, duration) => alertMessage(message, 'warning', duration),
    info: (message, duration) => alertMessage(message, 'info', duration)
}