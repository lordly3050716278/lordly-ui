import styleHTML from './style'

// 初始化样式
function initStyle() {
    const id = 'lordly-v-loading-style'
    if (document.head.querySelector(`#${id}`)) return
    const style = document.createElement('style')
    style.id = id
    style.innerHTML = styleHTML
    document.head.append(style)
}

// 初始化dom
function initDom(el) {
    el.classList.add('lordly-v-loading-el')

    // 创建一个 loading 背景
    const backdrop = document.createElement('div')
    backdrop.classList.add('lordly-v-loading-backdrop')

    backdrop.style.setProperty('--el-border-radius', getComputedStyle(el).borderRadius)

    // 创建一个 spinner 元素
    const spinner = document.createElement('div')
    spinner.classList.add('lordly-v-loading-spinner')

    // 容器的数量
    const numberOfWrappers = 3
    // 每个容器的圆数量
    const numberOfCircles = 4

    // 创建三个 spinner 子元素
    const spinnerWrappers = []
    for (let i = 0; i < numberOfWrappers; i++) {
        const spinnerWrapper = document.createElement('div')
        spinnerWrapper.classList.add('lordly-v-loading-spinner-wrapper')

        // 创建四个 circle 元素
        const spinnerCircles = []
        for (let j = 0; j < numberOfCircles; j++) {
            const spinnerCircle = document.createElement('div')
            spinnerCircle.classList.add('lordly-v-loading-spinner-circle')
            spinnerCircles.push(spinnerCircle)
        }

        spinnerWrapper.append(...spinnerCircles)
        spinnerWrappers.push(spinnerWrapper)
    }

    spinner.append(...spinnerWrappers)
    backdrop.append(spinner)

    return backdrop
}

export default {
    mounted(el, binding) {
        initStyle()

        const backdrop = initDom(el)
        el._backdrop = backdrop

        if (!binding.value) return
        el.appendChild(backdrop)
    },
    updated(el, binding) {
        if (binding.value === binding.oldValue) return

        if (binding.value) {
            el.appendChild(el._backdrop)
            return
        }

        if (el._backdrop.parentNode === el) {
            el.removeChild(el._backdrop)
        }
    },
    unmounted(el) {
        if (!el._backdrop || el._backdrop.parentNode !== el) return

        el.removeChild(el._backdrop)
        el._backdrop = null
    }
}