<template>
    <div class="absolute inset-0 w-full h-full z-0 bg-grid-breathe"></div>
    <div class="crop-mark crop-tl"></div>
    <div class="crop-mark crop-tr"></div>
    <div class="crop-mark crop-bl"></div>
    <div class="crop-mark crop-br"></div>
</template>

<style scoped>
.bg-grid-breathe {
    background-color: var(--color-paper);
    background-size: 32px 32px;
    background-image:
        linear-gradient(to right, rgba(26, 26, 26, 0.12) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(26, 26, 26, 0.12) 1px, transparent 1px);
    -webkit-mask-image: radial-gradient(circle at 50% 45%, black 25%, transparent 78%);
    mask-image: radial-gradient(circle at 50% 45%, black 25%, transparent 78%);
}

.crop-mark {
    position: absolute;
    width: 16px;
    height: 16px;
    border-color: rgba(30, 30, 30, 0.3);
    border-style: solid;
    pointer-events: none;
}
.crop-tl {
    top: 16px;
    left: 16px;
    border-width: 1.5px 0 0 1.5px;
}
.crop-tr {
    top: 16px;
    right: 16px;
    border-width: 1.5px 1.5px 0 0 ;
}
.crop-bl {
    bottom: 16px;
    left: 16px;
    border-width: 0 0 1.5px 1.5px;
}
.crop-br {
    bottom: 16px;
    right: 16px;
    border-width: 0 1.5px 1.5px 0;
}
</style>