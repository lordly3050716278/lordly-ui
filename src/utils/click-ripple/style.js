export default `
    .lordly-click-ripple {
        position: fixed;
        z-index: 10000;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        pointer-events: none;
        border: 1px solid;
        border-top-color: #007bff;
        border-right-color: #17a2b8;
        border-bottom-color: #6610f2;
        border-left-color: #0056b3;
        animation: ripple .4s forwards;
    }

    @keyframes ripple {
        from {
            transform: scale(0);
            opacity: 1;
        }

        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`