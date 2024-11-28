import styleHTML from './style'

/**
 * 在页面上启用点击波纹效果。
 * 
 * 该函数通过监听页面上的点击事件，自动在点击位置创建并显示一个波纹效果，随后在动画结束后移除波纹元素。
 * 
 * 波纹效果常用于按钮或交互元素的点击反馈，提供更好的用户体验。点击位置的波纹会在页面上展示，且随着动画的进行逐渐扩展，最终消失。
 * 
 * 该函数会动态创建和插入样式，确保波纹效果的 CSS 样式存在，并在页面上的每次点击时触发波纹效果。
 * 
 * @function startClickRipple
 * 
 * @example
 * // 启动点击波纹效果
 * startClickRipple()
 * 
 * @description
 * - 启动波纹效果的函数，监听页面的点击事件，创建波纹元素并添加至页面。
 * - 波纹元素会在点击位置显示，并通过 CSS 动画进行扩展和消失。
 * - 当波纹动画结束时，波纹元素会被移除。
 */
function startClickRipple() {
    document.addEventListener('click', e => {
        initStyle()

        const ripple = createRipple(e)

        removeRipple(ripple)
    })
}

// 初始化样式
function initStyle() {
    const id = 'lordly-click-ripple-style'
    if (document.head.querySelector(`#${id}`)) return
    const style = document.createElement('style')
    style.id = id
    style.innerHTML = styleHTML
    document.head.append(style)
}

// 创建波纹元素
function createRipple(e) {
    const ripple = document.createElement('div')
    ripple.classList.add('lordly-click-ripple')

    // 设置波纹的位置
    ripple.style.left = `${e.pageX}px`
    ripple.style.top = `${e.pageY}px`

    document.body.append(ripple)

    return ripple
}

// 移除波纹元素
function removeRipple(ripple) {
    ripple.addEventListener('animationend', () => ripple.remove())
}

export default startClickRipple