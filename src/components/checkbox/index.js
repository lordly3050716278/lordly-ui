class SizeStyle {
    constructor(boxSize, fontSize) {
        this['--lordly-checkbox-size'] = boxSize
        this.fontSize = fontSize
    }
}

const sizes = ['mini', 'small', 'normal', 'large', 'huge']

const sizeStyles = {
    mini: new SizeStyle('10px', '8px'),
    small: new SizeStyle('12px', '10px'),
    normal: new SizeStyle('14px', '12px'),
    large: new SizeStyle('16px', '14px'),
    huge: new SizeStyle('18px', '16px')
}

export { default } from './index.vue'

export { sizes, sizeStyles }