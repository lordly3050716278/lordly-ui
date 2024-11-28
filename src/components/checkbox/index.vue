<template>
    <div :class="classNames" :style="checkboxStyle">
        <label class="lordly-checkbox__label" :for="id" />
        <label class="lordly-checkbox__content" :for="id">
            <slot />
        </label>
        <input :id="id" class="lordly-checkbox__input" v-model="inputValue" type="checkbox" hidden />
    </div>
</template>

<script setup>
import { useId, ref, watch, computed } from 'vue'
import { sizes, sizeStyles } from '.'

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: 'normal',
        validator(val) {
            if (sizes.includes(val)) return true
            console.warn(`[Warning] LyCheckbox Invalid prop: size must be one of [${sizes}]. You passed: "${val}".`)
            return false
        }
    }
})
const emit = defineEmits(['update:modelValue'])

const id = useId()

const inputValue = ref(props['modelValue'])
watch(() => inputValue.value, val => emit('update:modelValue', val))

const isChecked = ref(false)
const notChecked = ref(false)

const classNames = computed(() => [
    'lordly-checkbox',
    {
        'is-checked': isChecked.value,
        'not-checked': notChecked.value
    }
])

watch(() => inputValue.value, val => {
    isChecked.value = val
    notChecked.value = !val
})

const checkboxStyle = computed(() => sizeStyles[props['size']])

</script>

<style scoped>
* {
    cursor: pointer;
    user-select: none;
}

.lordly-checkbox {
    --lordly-checkbox-border-width: calc(var(--lordly-checkbox-size) / 100 * 10);
    --lordly-checkbox-virtual-width: calc(var(--lordly-checkbox-size) / 100 * 20);
    --lordly-checkbox-before-top: calc(var(--lordly-checkbox-size) / 100 * 72);
    --lordly-checkbox-before-left: calc(var(--lordly-checkbox-size) / 100 * 41);
    --lordly-checkbox-after-top: calc(var(--lordly-checkbox-size) / 100 * 37);
    --lordly-checkbox-after-left: calc(var(--lordly-checkbox-size) / 100 * 5);
    --lordly-checkbox-after-height: calc(var(--lordly-checkbox-size) / 100 * 50);
    --lordly-checkbox-before-height: calc(var(--lordly-checkbox-size) / 100 * 120);
    --lordly-checkbox-border-radius: calc(var(--lordly-checkbox-size) / 100 * 5);
    --lordly-checkbox-before-box-shadow: calc(var(--lordly-checkbox-size) / 100 * 5);
    --checked-color: #007bff;

    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: #232323;
    transition: .2s;
}

.lordly-checkbox__label {
    height: var(--lordly-checkbox-size);
    width: var(--lordly-checkbox-size);
    background-color: transparent;
    border: var(--lordly-checkbox-border-width) solid #232323;
    border-radius: var(--lordly-checkbox-border-radius);
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    transition: border-color .2s;
}

.lordly-checkbox__label::before,
.lordly-checkbox__label::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    height: 0;
    width: var(--lordly-checkbox-virtual-width);
    background: var(--checked-color);
    display: inline-block;
    transform-origin: left top;
    border-radius: var(--lordly-checkbox-border-radius);
    transition: opacity .5s;
}

.lordly-checkbox__label::before {
    top: var(--lordly-checkbox-before-top);
    left: var(--lordly-checkbox-before-left);
    transform: rotate(-135deg);
    box-shadow: 0 0 0 var(--lordly-checkbox-before-box-shadow) #ffffff;
}

.lordly-checkbox__label::after {
    top: var(--lordly-checkbox-after-top);
    left: var(--lordly-checkbox-after-left);
    transform: rotate(-45deg);
}

.lordly-checkbox.is-checked {
    color: var(--checked-color);
}

.lordly-checkbox.is-checked>.lordly-checkbox__label {
    border-color: var(--checked-color);
}

.lordly-checkbox.is-checked>.lordly-checkbox__label::after {
    animation: after-check .2s ease 0s forwards;
}

.lordly-checkbox.is-checked>.lordly-checkbox__label::before {
    animation: before-check .4s ease 0s forwards;
}

.lordly-checkbox.not-checked>.lordly-checkbox__label::after {
    animation: after-uncheck .4s ease 0s forwards;
}

.lordly-checkbox.not-checked>.lordly-checkbox__label::before {
    animation: before-uncheck .2s ease 0s forwards;
}

@keyframes after-check {
    0% {
        height: 0;
    }

    100% {
        height: var(--lordly-checkbox-after-height);
    }
}

@keyframes before-check {

    0%,
    50% {
        height: 0;
    }

    100% {
        height: var(--lordly-checkbox-before-height);
    }
}

@keyframes after-uncheck {

    0%,
    50% {
        height: var(--lordly-checkbox-after-height);
    }

    100% {
        height: 0;
    }
}

@keyframes before-uncheck {

    0% {
        height: var(--lordly-checkbox-before-height);
    }

    100% {
        height: 0;
    }
}
</style>