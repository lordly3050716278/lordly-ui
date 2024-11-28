<template>
    <button :class="classNames" :style="buttonStyle" :disabled="props['disabled']" @mouseenter="toggleHover"
        @mouseleave="toggleHover" @mousedown="toggleActive" @mouseup="toggleActive">
        <slot />
    </button>
</template>

<script setup>
import { computed, ref } from 'vue'
import { types, sizes, typeStyles, plainStyles, sizeStyles } from '.'

const props = defineProps({
    type: {
        type: String,
        default: 'default',
        validator(val) {
            if (types.includes(val)) return true
            console.warn(`[Warning] LyButton Invalid prop: type must be one of [${types}]. You passed: "${val}".`)
            return false
        }
    },
    size: {
        type: String,
        default: 'normal',
        validator(val) {
            if (sizes.includes(val)) return true
            console.warn(`[Warning] LyButton Invalid prop: size must be one of [${sizes}]. You passed: "${val}".`)
            return false
        }
    },
    disabled: {
        type: Boolean,
        default: false
    },
    block: {
        type: Boolean,
        default: false
    },
    plain: {
        type: Boolean,
        default: false
    }
})

const classNames = computed(() => [
    'lordly-button',
    props['type'],
    props['size'],
    {
        'is-block': props['block'],
        'is-plain': props['plain']
    }
])

const buttonStyle = computed(() => {
    const state = props['disabled'] ? 'disabled' : isActived.value ? 'active' : isHovering.value ? 'hover' : 'default'
    const styles = props['plain'] ? plainStyles : typeStyles
    return { ...styles[props['type']][state], ...sizeStyles[props['size']] }
})

const isHovering = ref(false)
const isActived = ref(false)

function toggleHover() {
    isHovering.value = !isHovering.value
}

function toggleActive(e) {
    isActived.value = !isActived.value
    if (!isActived.value) return
    e.target.style.setProperty('--x', e.offsetX + 'px')
    e.target.style.setProperty('--y', e.offsetY + 'px')
    e.target.classList.add('is-active')

    setTimeout(() => e.target.classList.remove('is-active'), 400)
}
</script>

<style scoped>
.lordly-button {
    all: unset;
    user-select: none;

    width: fit-content;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    box-sizing: border-box;
    transition: .2s;

    border: 1px solid;

    position: relative;
    overflow: hidden;
}

.lordly-button:disabled {
    cursor: not-allowed;
}

.lordly-button::before {
    content: '';
    background-color: #f0f0f0;
    backdrop-filter: blur(10px);

    position: absolute;
    inset: 0;
    transform: scale(0);
    transform-origin: var(--x) var(--y);
}

.lordly-button.is-active::before {
    animation: active 1s;
}

@keyframes active {
    0% {
        transform: scale(0);
    }

    80% {
        transform: scale(2);
    }

    100% {
        opacity: 0;
    }
}

.lordly-button.is-block {
    width: 100%;
    display: flex;
}
</style>