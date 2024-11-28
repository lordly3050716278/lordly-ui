class TypeStyle {
    constructor(bgColor, borderColor, color, boxShadow = '0px 3px 1px -2px #00000033, 0px 2px 2px 0px #00000024, 0px 1px 5px 0px #0000001f') {
        this.backgroundColor = bgColor
        this.borderColor = borderColor
        this.color = color
        this.boxShadow = boxShadow
    }
}

class PlainStyle {
    constructor(bgColor, borderColor, color) {
        this.backgroundColor = bgColor
        this.borderColor = borderColor
        this.color = color
    }
}

class SizeStyle {
    constructor(fontSize, padding) {
        this.fontSize = fontSize
        this.padding = padding
    }
}

const types = ['primary', 'success', 'danger', 'warning', 'info', 'default']
const sizes = ['mini', 'small', 'normal', 'large', 'huge']

const typeStyles = {
    primary: {
        default: new TypeStyle('#397bfe', '#0056b3', '#ffffff'),
        hover: new TypeStyle('#0056b3', '#003f7f', '#ffffff'),
        active: new TypeStyle('#004085', '#003366', '#ffffff'),
        disabled: new TypeStyle('#cce5ff', '#b3d0ff', '#6c757d')
    },
    success: {
        default: new TypeStyle('#00c28e', '#218838', '#ffffff'),
        hover: new TypeStyle('#218838', '#1e7e34', '#ffffff'),
        active: new TypeStyle('#1c7430', '#14521e', '#ffffff'),
        disabled: new TypeStyle('#c8e6a0', '#b1d98f', '#6c757d')
    },
    danger: {
        default: new TypeStyle('#f44034', '#c82333', '#ffffff'),
        hover: new TypeStyle('#c82333', '#b21f2d', '#ffffff'),
        active: new TypeStyle('#bd2130', '#9a1b1b', '#ffffff'),
        disabled: new TypeStyle('#f8d7da', '#f5c6cb', '#6c757d')
    },
    warning: {
        default: new TypeStyle('#ff9d00', '#e0a800', '#ffffff'),
        hover: new TypeStyle('#e0a800', '#d48806', '#ffffff'),
        active: new TypeStyle('#d48806', '#c47605', '#ffffff'),
        disabled: new TypeStyle('#fff3cd', '#ffeeba', '#6c757d')
    },
    info: {
        default: new TypeStyle('#00b0f0', '#138496', '#ffffff'),
        hover: new TypeStyle('#138496', '#0d5b69', '#ffffff'),
        active: new TypeStyle('#0d5b69', '#0a4f5e', '#ffffff'),
        disabled: new TypeStyle('#b8e0ea', '#a0c5d9', '#6c757d')
    },
    default: {
        default: new TypeStyle('#f5f5f5', '#d6d8db', '#555555'),
        hover: new TypeStyle('#e2e6ea', '#bcc0c5', '#555555'),
        active: new TypeStyle('#cdd2d7', '#b6b9be', '#555555'),
        disabled: new TypeStyle('#e9ecef', '#d6dee1', '#6c757d')
    }
}

const plainStyles = {
    primary: {
        default: new PlainStyle('transparent', '#007bff', '#007bff'),
        hover: new PlainStyle('transparent', '#0056b3', '#0056b3'),
        active: new PlainStyle('transparent', '#004085', '#004085'),
        disabled: new PlainStyle('#cce5ff', '#b3d0ff', '#6c757d')
    },
    success: {
        default: new PlainStyle('transparent', '#28a745', '#28a745'),
        hover: new PlainStyle('transparent', '#218838', '#218838'),
        active: new PlainStyle('transparent', '#1c7430', '#1c7430'),
        disabled: new PlainStyle('#c8e6a0', '#b1d98f', '#6c757d')
    },
    danger: {
        default: new PlainStyle('transparent', '#dc3545', '#dc3545'),
        hover: new PlainStyle('transparent', '#c82333', '#c82333'),
        active: new PlainStyle('transparent', '#bd2130', '#bd2130'),
        disabled: new PlainStyle('#f8d7da', '#f5c6cb', '#6c757d')
    },
    warning: {
        default: new PlainStyle('transparent', '#ffc107', '#ffc107'),
        hover: new PlainStyle('transparent', '#e0a800', '#e0a800'),
        active: new PlainStyle('transparent', '#d48806', '#d48806'),
        disabled: new PlainStyle('#fff3cd', '#ffeeba', '#6c757d')
    },
    info: {
        default: new PlainStyle('transparent', '#17a2b8', '#17a2b8'),
        hover: new PlainStyle('transparent', '#138496', '#138496'),
        active: new PlainStyle('transparent', '#0d5b69', '#0d5b69'),
        disabled: new PlainStyle('#b8e0ea', '#a0c5d9', '#6c757d')
    },
    default: {
        default: new PlainStyle('transparent', '#f8f9fa', '#495057'),
        hover: new PlainStyle('transparent', '#e2e6ea', '#495057'),
        active: new PlainStyle('transparent', '#cdd2d7', '#495057'),
        disabled: new PlainStyle('#e9ecef', '#d6dee1', '#6c757d')
    }
}

const sizeStyles = {
    mini: new SizeStyle('10px', '1px 2px'),
    small: new SizeStyle('12px', '2px 4px'),
    normal: new SizeStyle('14px', '4px 8px'),
    large: new SizeStyle('16px', '6px 12px'),
    huge: new SizeStyle('18px', '8px 16px')
}

export { default } from './index.vue'

export { types, sizes, typeStyles, plainStyles, sizeStyles }