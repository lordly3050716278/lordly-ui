export default `
    #lordly-alert-msg-container {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        overflow-x: hidden;
        overflow-y: auto;
        z-index: 10000;
        pointer-events: none;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    #lordly-alert-msg-container::-webkit-scrollbar {
        display: none;
    }

    .lordly-alert-msg-box {
        padding: 5px 10px;
        display: flex;
        align-items: center;
        gap: 5px;
        color: #ffffff;
        font-size: 14px;
        font-weight: 500;
    }

    .lordly-alert-msg-box__icon {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1em;
        height: 1em;
        fill: currentColor;
    }

    .lordly-alert-msg-box__content {
        max-width: 240px;
        word-break: break-word;
        flex: 1;
    }

    .lordly-alert-msg-box.primary {
        background-color: #007bff;
    }

    .lordly-alert-msg-box.success {
        background-color: #28a745;
    }

    .lordly-alert-msg-box.error {
        background-color: #dc3545;
    }

    .lordly-alert-msg-box.danger {
        background-color: #c82333;
    }

    .lordly-alert-msg-box.warning {
        background-color: #ffc107;
    }

    .lordly-alert-msg-box.info {
        background-color: #17a2b8;
    }

    .lordly-alert-msg-box.show {
        animation: box-in .2s forwards;
    }

    .lordly-alert-msg-box.hide {
        animation: box-out .2s forwards;
    }

    @keyframes box-in {
        0% {
            margin-top: var(--h);
        }

        100% {
            margin-top: 0;
        }
    }

    @keyframes box-out {
        0% {
            margin-top: 0;
        }

        100% {
            margin-top: calc(-1 * var(--h));
        }
    }
`