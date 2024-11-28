export default `
    .lordly-v-loading-el {
        position: relative;
    }

    .lordly-v-loading-backdrop {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, .98);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9000;
        border-radius: var(--el-border-radius);
    }

    .lordly-v-loading-spinner-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .lordly-v-loading-spinner {
        --spinner-size: 30px;
        --spinner-color: #409eff;

        width: var(--spinner-size);
        height: var(--spinner-size);
        position: relative;
    }

    .lordly-v-loading-spinner-circle {
        --spinner-circle-size: 6px;

        width: var(--spinner-circle-size);
        height: var(--spinner-circle-size);
        background-color: var(--spinner-color);

        border-radius: 100%;
        position: absolute;
        animation: bouncedelay 1.2s infinite ease-in-out;
        animation-fill-mode: both;
    }

    .lordly-v-loading-spinner-wrapper:nth-child(1) {
        transform: rotateZ(0deg);
    }

    .lordly-v-loading-spinner-wrapper:nth-child(2) {
        transform: rotateZ(45deg);
    }

    .lordly-v-loading-spinner-wrapper:nth-child(3) {
        transform: rotateZ(90deg);
    }

    .lordly-v-loading-spinner-circle:nth-child(1) { 
        top: 0; 
        left: 0;
    }

    .lordly-v-loading-spinner-circle:nth-child(2) { 
        top: 0; 
        right: 0;
    }

    .lordly-v-loading-spinner-circle:nth-child(3) { 
        right: 0; 
        bottom: 0;
    }

    .lordly-v-loading-spinner-circle:nth-child(4) { 
        left: 0;
        bottom: 0;
    }

    .lordly-v-loading-spinner-wrapper:nth-child(1) .lordly-v-loading-spinner-circle:nth-child(1) {
        animation-delay: 0s;
    }
        
    .lordly-v-loading-spinner-wrapper:nth-child(1) .lordly-v-loading-spinner-circle:nth-child(2) {
        animation-delay: -.9s;
    }

    .lordly-v-loading-spinner-wrapper:nth-child(1) .lordly-v-loading-spinner-circle:nth-child(3) {
        animation-delay: -.6s;  
    }

    .lordly-v-loading-spinner-wrapper:nth-child(1) .lordly-v-loading-spinner-circle:nth-child(4) {
        animation-delay: -.3s;  
    }

    .lordly-v-loading-spinner-wrapper:nth-child(2) .lordly-v-loading-spinner-circle:nth-child(1) {
        animation-delay: -1.1s;
    }

    .lordly-v-loading-spinner-wrapper:nth-child(2) .lordly-v-loading-spinner-circle:nth-child(2) {
        animation-delay: -.8s;
    }

    .lordly-v-loading-spinner-wrapper:nth-child(2) .lordly-v-loading-spinner-circle:nth-child(3) {
        animation-delay: -.5s;
    }

    .lordly-v-loading-spinner-wrapper:nth-child(2) .lordly-v-loading-spinner-circle:nth-child(4) {
        animation-delay: -.2s;
    }

    .lordly-v-loading-spinner-wrapper:nth-child(3) .lordly-v-loading-spinner-circle:nth-child(1) {
        animation-delay: -1s;
    }

    .lordly-v-loading-spinner-wrapper:nth-child(3) .lordly-v-loading-spinner-circle:nth-child(2) {
        animation-delay: -.7s;
    }

    .lordly-v-loading-spinner-wrapper:nth-child(3) .lordly-v-loading-spinner-circle:nth-child(3) {
        animation-delay: -.4s;
    }

    .lordly-v-loading-spinner-wrapper:nth-child(3) .lordly-v-loading-spinner-circle:nth-child(4) {
        animation-delay: -.1s;
    }

    @keyframes bouncedelay {
        0%, 80%, 100% {
            transform: scale(0.0);
        } 
            
        40% {
            transform: scale(1.0);
        }
    }
`