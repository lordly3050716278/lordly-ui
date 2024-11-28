class TypeStyle {
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

const defaultTypeStyles = {
    primary: {
        default: new TypeStyle('#007bff', '#0056b3', '#ffffff'),
        hover: new TypeStyle('#0056b3', '#003f7f', '#ffffff'),
        active: new TypeStyle('#004085', '#003366', '#ffffff'),
        disabled: new TypeStyle('#cce5ff', '#b3d0ff', '#6c757d')
    },
    success: {
        default: new TypeStyle('#28a745', '#218838', '#ffffff'),
        hover: new TypeStyle('#218838', '#1e7e34', '#ffffff'),
        active: new TypeStyle('#1c7430', '#14521e', '#ffffff'),
        disabled: new TypeStyle('#c8e6a0', '#b1d98f', '#6c757d')
    },
    danger: {
        default: new TypeStyle('#dc3545', '#c82333', '#ffffff'),
        hover: new TypeStyle('#c82333', '#b21f2d', '#ffffff'),
        active: new TypeStyle('#bd2130', '#9a1b1b', '#ffffff'),
        disabled: new TypeStyle('#f8d7da', '#f5c6cb', '#6c757d')
    },
    warning: {
        default: new TypeStyle('#ffc107', '#e0a800', '#212529'),
        hover: new TypeStyle('#e0a800', '#d48806', '#212529'),
        active: new TypeStyle('#d48806', '#c47605', '#212529'),
        disabled: new TypeStyle('#fff3cd', '#ffeeba', '#6c757d')
    },
    info: {
        default: new TypeStyle('#17a2b8', '#138496', '#ffffff'),
        hover: new TypeStyle('#138496', '#0d5b69', '#ffffff'),
        active: new TypeStyle('#0d5b69', '#0a4f5e', '#ffffff'),
        disabled: new TypeStyle('#b8e0ea', '#a0c5d9', '#6c757d')
    },
    default: {
        default: new TypeStyle('#f8f9fa', '#d6d8db', '#495057'),
        hover: new TypeStyle('#e2e6ea', '#bcc0c5', '#495057'),
        active: new TypeStyle('#cdd2d7', '#b6b9be', '#495057'),
        disabled: new TypeStyle('#e9ecef', '#d6dee1', '#6c757d')
    }
}

const plainTypeStyles = {
    primary: {
        default: new TypeStyle('transparent', '#007bff', '#007bff'),
        hover: new TypeStyle('transparent', '#0056b3', '#0056b3'),
        active: new TypeStyle('transparent', '#004085', '#004085'),
        disabled: new TypeStyle('#cce5ff', '#b3d0ff', '#6c757d')
    },
    success: {
        default: new TypeStyle('transparent', '#28a745', '#28a745'),
        hover: new TypeStyle('transparent', '#218838', '#218838'),
        active: new TypeStyle('transparent', '#1c7430', '#1c7430'),
        disabled: new TypeStyle('#c8e6a0', '#b1d98f', '#6c757d')
    },
    danger: {
        default: new TypeStyle('transparent', '#dc3545', '#dc3545'),
        hover: new TypeStyle('transparent', '#c82333', '#c82333'),
        active: new TypeStyle('transparent', '#bd2130', '#bd2130'),
        disabled: new TypeStyle('#f8d7da', '#f5c6cb', '#6c757d')
    },
    warning: {
        default: new TypeStyle('transparent', '#ffc107', '#ffc107'),
        hover: new TypeStyle('transparent', '#e0a800', '#e0a800'),
        active: new TypeStyle('transparent', '#d48806', '#d48806'),
        disabled: new TypeStyle('#fff3cd', '#ffeeba', '#6c757d')
    },
    info: {
        default: new TypeStyle('transparent', '#17a2b8', '#17a2b8'),
        hover: new TypeStyle('transparent', '#138496', '#138496'),
        active: new TypeStyle('transparent', '#0d5b69', '#0d5b69'),
        disabled: new TypeStyle('#b8e0ea', '#a0c5d9', '#6c757d')
    },
    default: {
        default: new TypeStyle('transparent', '#f8f9fa', '#495057'),
        hover: new TypeStyle('transparent', '#e2e6ea', '#495057'),
        active: new TypeStyle('transparent', '#cdd2d7', '#495057'),
        disabled: new TypeStyle('#e9ecef', '#d6dee1', '#6c757d')
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

export { types, sizes, defaultTypeStyles, plainTypeStyles, sizeStyles }